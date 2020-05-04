import express from "express";
import http from "http";
import path from "path";
import socketio from "socket.io";

const PORT = process.env.PORT || 1844;

const app: express.Express = express();
const httpServer: http.Server = http.createServer(app);
const io: socketio.Server = socketio(httpServer);

interface IJoinRoomData {
  value: string;
}

app.use(express.static(path.join("..", "public")));

io.on("connection", (socket: socketio.Socket) => {
  console.log("connected!");
  let roomKey: string = "";
  let name: string = "";

  // join to room.
  socket.on("join_room", (data: IJoinRoomData) => {
    roomKey = data.value;
    console.log(`joined ${roomKey}`);
    socket.join(roomKey);
  });

  socket.on("action", (action) => {
    if (action.type === "SOCKET/JOIN_ROOM") {
      const { roomKey } = action.payload;
      socket.join(roomKey);
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
