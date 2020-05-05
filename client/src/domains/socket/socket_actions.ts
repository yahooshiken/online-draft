import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export const socketActions = {
  joinRoom: actionCreator<{ roomKey: string; name: string }>(
    "SOCKET/JOIN_ROOM"
  ),
  fetchUserList: actionCreator<{ roomKey: string }>("SOCKET/FETCH_USER_LIST"),
  startGame: actionCreator<{ roomKey: string }>("SOCKET/START_GAME"),
  fetchPlayerList: actionCreator<void>("SOCKET/FETCH_PLAYER_LIST"),
};
