import express from "express";
import mongoose from "mongoose";
import http from "http";
import path from "path";
import socketio from "socket.io";
import userModel from "./models/userModel";

const PORT = process.env.PORT || 1844;

const app: express.Express = express();
const httpServer: http.Server = http.createServer(app);
const io: socketio.Server = socketio(httpServer);

// Express
app.use(express.static(path.join("..", "public")));

app.get("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "public", "index.html"));
});

// Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/draft");
const db = mongoose.connection;

db.on("error", () => console.log("FAILED to connect to mongoose."));
db.once("open", () => console.log("SUCCEED to connect to mongoose."));

// Socket.io
io.on("connection", (socket: socketio.Socket) => {
  console.log("connected!");
  let roomKey: string = "";
  let name: string = "";

  socket.on("action", (action) => {
    if (action.type === "SOCKET/JOIN_ROOM") {
      const { roomKey, name } = action.payload;
      socket.join(roomKey);
      const user = new userModel({ id: 1, roomKey, name });
      user.save((err, result) => {
        if (err) console.log("Cannot add new member");
        else {
          io.to(roomKey).emit("item_added", action.payload);
          console.log("added");
        }
      });
    }

    if (action.type === "SOCKET/FETCH_USER_LIST") {
      const { roomKey } = action.payload;
      userModel.find({ roomKey }, (err, result) => {
        if (err) console.log("Cannot get user list");
        else {
          io.to(roomKey).emit("action", {
            type: "ACTIONS_FETCH_USER_LIST_SUCCESS",
            payload: result,
          });
        }
      });
    }

    if (action.type === "SOCKET/START_GAME") {
      const { roomKey } = action.payload;
      console.info(roomKey);
      io.to(roomKey).emit("action", {
        type: "ACTIONS_START_GAME_SUCCESS",
        payload: roomKey,
      });
    }
  });

  // クライアントからのデータを受信する.
  socket.on("client_to_server", (data) => {
    console.log(roomKey, data.value);
    io.to(roomKey).emit("server_to_client", { value: data.value });
  });

  // クライアントからのデータを受信氏，送信元以外に送信する.
  socket.on("client_to_server_broadcast", (data) => {
    socket.broadcast
      .to(roomKey)
      .emit("server_to_client", { value: data.value });
  });

  socket.on("client_to_server_personal", (data) => {
    const { id } = socket;
    name = data.value;
    const personalMessage = `You are ${name}`;
    io.to(id).emit("server_to_client", { value: personalMessage });
  });

  socket.on("disconnect", () => {
    console.log("disconnected...");
    io.to(roomKey).emit("server_to_client", { value: "メッセージです" });
  });
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}!`));
