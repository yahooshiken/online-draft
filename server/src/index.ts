import express from "express";
import mongoose from "mongoose";
import http from "http";
import path from "path";
import socketio from "socket.io";
import userModel from "./models/userModel";
import playerModel from "./models/playerModel";

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

  socket.on("action", (action) => {
    if (action.type === "SOCKET/JOIN_ROOM") {
      const { roomKey, name } = action.payload;
      socket.join(roomKey);

      const user = new userModel({ roomKey, name, status: "selecting" });
      user.save((err, result) => {
        if (err) console.log("Cannot add new member");
        else {
          console.log("result", result);
          const socketId = socket.id;
          io.to(socketId).emit("action", {
            type: "ACTIONS_JOIN_ROOM_SUCCESS",
            payload: result,
          });
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

    if (action.type === "SOCKET/TRANSITION_GAME_MODE") {
      const { roomKey } = action.payload;
      io.to(roomKey).emit("action", {
        type: "ACTIONS_TRANSITION_GAME_MODE_SUCCESS",
        payload: action.payload,
      });
    }

    if (action.type === "SOCKET/FETCH_PLAYER_LIST") {
      playerModel.find({}, (err, result) => {
        if (err) console.log("Cannot get player list");
        else {
          io.emit("action", {
            type: "ACTIONS_FETCH_PLAYER_LIST_SUCCESS",
            payload: result,
          });
        }
      });
    }

    if (action.type === "SOCKET/CHANGE_STATUS") {
      const { _id, status, roomKey } = action.payload;
      console.log(_id, status, roomKey);
      userModel.findOneAndUpdate(
        { _id },
        { status },
        { new: true },
        (err, result) => {
          if (err) console.log("Cannot update status");
          else {
            io.to(roomKey).emit("action", {
              type: "ACTIONS_CHANGE_STATUS_SUCCESS",
              payload: result,
            });
          }
        }
      );
    }

    if (action.type === "SOCKET/SELECT_PLAYER") {
      const { _id, playerId, roomKey } = action.payload;
      userModel.findOneAndUpdate(
        { _id },
        { selectedPlayerId: playerId },
        { new: true },
        (err, result) => {
          if (err) console.log("Cannot update status");
          else {
            console.log("result", result);
            io.to(roomKey).emit("action", {
              type: "ACTIONS_SELECT_PLAYER_SUCCESS",
              payload: result,
            });
          }
        }
      );
    }
  });

  socket.on("disconnect", () => {
    console.log("disconnected...");
    io.to(roomKey).emit("server_to_client", { value: "メッセージです" });
  });
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}!`));
