import actionCreatorFactory from "typescript-fsa";
import { UserStatus } from "../user_list/user_list_reducers";
import { PlayerModel } from "../player_list/player_list_reducers";
const actionCreator = actionCreatorFactory();

export const socketActions = {
  joinRoom: actionCreator<{ roomKey: string; name: string }>(
    "SOCKET/JOIN_ROOM"
  ),
  fetchUserList: actionCreator<{ roomKey: string }>("SOCKET/FETCH_USER_LIST"),
  startGame: actionCreator<{ roomKey: string }>("SOCKET/START_GAME"),
  transitionPicked: actionCreator<{ roomKey: string }>(
    "SOCKET/TRANSITION_PICKED"
  ),
  transitionAnnouncing: actionCreator<{ roomKey: string }>(
    "SOCKET/TRANSITION_ANNOUNCING"
  ),
  fetchPlayerList: actionCreator<void>("SOCKET/FETCH_PLAYER_LIST"),
  changeStatus: actionCreator<{
    _id: string;
    status: UserStatus;
    roomKey: string;
  }>("SOCKET/CHANGE_STATUS"),
  selectPlayer: actionCreator<{
    _id: string;
    playerId: string;
    roomKey: string;
  }>("SOCKET/SELECT_PLAYER"),
};
