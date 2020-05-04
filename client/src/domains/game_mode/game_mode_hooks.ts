import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { gameModeActions } from "./game_mode_actions";

export const useStartGame = () => {
  const dispatch = useDispatch();

  const startGame = useCallback(() => {
    dispatch(gameModeActions.startGame());
  }, [dispatch]);

  return { startGame };
};
