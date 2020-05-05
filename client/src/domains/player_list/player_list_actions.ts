import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

interface fetchPlayerListResponse {
  _id: string;
  team: string;
  number: number;
  name: string;
}

export const playerListActions = {
  fetchPlayerListSuccess: actionCreator<fetchPlayerListResponse[]>(
    "ACTIONS_FETCH_PLAYER_LIST_SUCCESS"
  ),
};
