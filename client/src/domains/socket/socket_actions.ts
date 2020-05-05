import actionCreatorFactory from "typescript-fsa";
import { UserStatus } from "../user_list/user_list_reducers";
const actionCreator = actionCreatorFactory();

export const socketActions = {
  joinRoom: actionCreator<{ roomKey: string; name: string }>(
    "SOCKET/JOIN_ROOM"
  ),
  fetchUserList: actionCreator<{ roomKey: string }>("SOCKET/FETCH_USER_LIST"),
  startGame: actionCreator<{ roomKey: string }>("SOCKET/START_GAME"),
  fetchPlayerList: actionCreator<void>("SOCKET/FETCH_PLAYER_LIST"),
  changeStatus: actionCreator<{
    _id: string;
    status: UserStatus;
    roomKey: string;
  }>("SOCKET/CHANGE_STATUS"),
};
