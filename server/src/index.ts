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
  let roomKey: string = "";
  let name: string = "";

  socket.on("join_room", (data: IJoinRoomData) => {
    roomKey = data.value;
    socket.join(roomKey);
  });

  socket.on("disconnect", () => {});
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}!`));
