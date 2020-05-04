import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export const socketActions = {
  joinRoom: actionCreator<{ roomKey: string }>("SOCKET/JOIN_ROOM"),
};
