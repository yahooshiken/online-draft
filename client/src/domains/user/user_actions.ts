import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export const userActions = {
  setRoomKey: actionCreator<string>("ACTIONS_SET_ROOM_KEY"),
  setName: actionCreator<string>("ACTIONS_SET_NAME"),
};
