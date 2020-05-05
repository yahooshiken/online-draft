import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socketActions } from "../socket/socket_actions";
import { playerListSelectors } from "./player_list_selectors";

export const useFetchPlayerList = () => {
  const dispatch = useDispatch();

  const fetchPlayerList = useCallback(async () => {
    dispatch(socketActions.fetchPlayerList());
  }, [dispatch]);

  return { fetchPlayerList };
};

export const useFindPlayerById = () => {
  const playerList = useSelector(playerListSelectors.getPlayerList);

  const findPlayerById = (playerId?: string) =>
    playerList.find((player) => player._id === playerId);
  return { findPlayerById };
};
