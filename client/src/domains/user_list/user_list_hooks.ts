import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { socketActions } from "../socket/socket_actions";

export const useFetchUserList = (roomKey: string) => {
  const dispatch = useDispatch();

  const fetchUserList = useCallback(async () => {
    dispatch(socketActions.fetchUserList({ roomKey }));
  }, [dispatch, roomKey]);

  return { fetchUserList };
};
