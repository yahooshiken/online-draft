import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { socketActions } from "../socket/socket_actions";
import { GameMode } from "./types";

export const useTransitionGameMode = () => {
  const dispatch = useDispatch();

  const transitionGameMode = useCallback(
    (roomKey: string, gameMode: GameMode) => {
      dispatch(socketActions.transitionGameMode({ roomKey, gameMode }));
    },
    [dispatch]
  );

  return { transitionGameMode };
};
