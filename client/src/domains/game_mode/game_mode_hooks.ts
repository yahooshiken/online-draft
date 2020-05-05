import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { socketActions } from "../socket/socket_actions";

export const useStartGame = (roomKey: string) => {
  const dispatch = useDispatch();

  const startGame = useCallback(() => {
    dispatch(socketActions.startGame({ roomKey }));
  }, [dispatch]);

  return { startGame };
};
