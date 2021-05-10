import actionCreatorFactory from "typescript-fsa";
import { UserStatus } from "../user_list/user_list_reducers";
import { GameMode } from "../game/types";
const actionCreator = actionCreatorFactory();

export const socketActions = {
  joinRoom: actionCreator<{ roomKey: string; name: string }>(
    "SOCKET/JOIN_ROOM"
  ),
  rejoinRoom: actionCreator<{ roomKey: string }>("SOCKET/REJOIN_ROOM"),
  fetchUserList: actionCreator<{ roomKey: string }>("SOCKET/FETCH_USER_LIST"),
  transitionGameMode: actionCreator<{ roomKey: string; gameMode: GameMode }>(
    "SOCKET/TRANSITION_GAME_MODE"
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
