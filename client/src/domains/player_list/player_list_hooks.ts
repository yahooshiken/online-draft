import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { socketActions } from "../socket/socket_actions";

export const useFetchPlayerList = () => {
  const dispatch = useDispatch();

  const fetchPlayerList = useCallback(async () => {
    dispatch(socketActions.fetchPlayerList());
  }, [dispatch]);

  return { fetchPlayerList };
};
