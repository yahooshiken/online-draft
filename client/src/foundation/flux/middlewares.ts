import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";

const socket = io();
export const socketIoMiddleware = createSocketIoMiddleware(socket, "SOCKET/");
