import actionCreatorFactory from "typescript-fsa";
import { UserStatus, UserModel } from "../user_list/user_list_reducers";
const actionCreator = actionCreatorFactory();

export const userActions = {
  joinRoomSuccess: actionCreator<UserModel>("ACTIONS_JOIN_ROOM_SUCCESS"),
  changeStatus: actionCreator<UserStatus>("ACTIONS_CHANGE_STATUS"),
  changeStatusSuccess: actionCreator<UserModel>(
    "ACTIONS_CHANGE_STATUS_SUCCESS"
  ),
  selectPlayerSuccess: actionCreator<UserModel>(
    "ACTIONS_SELECT_PLAYER_SUCCESS"
  ),
};
