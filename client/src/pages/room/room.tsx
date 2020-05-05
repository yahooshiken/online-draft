import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { gameModeSelectors } from "../../domains/game_mode/game_mode_selectors";

import {
  BeforeStart,
  Picking,
  Picked,
  Announcing,
} from "../../domains/game_mode/components";

import {
  useStartGame,
  useTransitionPicked,
  useTransitionAnnouncing,
} from "../../domains/game_mode/game_mode_hooks";
import { userListSelectors } from "../../domains/user_list/user_list_selectors";

const Room: FC = () => {
  const gameMode = useSelector(gameModeSelectors.getGameMode);
  const userList = useSelector(userListSelectors.getUserList);
  const { roomKey } = useParams();
  const { startGame } = useStartGame(roomKey);
  const { transitionPicked } = useTransitionPicked(roomKey);
  const { transitionAnnouncing } = useTransitionAnnouncing(roomKey);

  useEffect(() => {
    if (
      gameMode === "picking" &&
      userList.every((user) => user.status === "selected")
    )
      transitionPicked();
  }, [userList]);

  useEffect(() => {
    if (gameMode === "picked") {
      const timer = setTimeout(() => {
        transitionAnnouncing();
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [gameMode]);

  const handleStartGame = () => {
    startGame();
  };

  switch (gameMode) {
    case "before_start":
      return <BeforeStart onClick={handleStartGame} />;

    case "picking":
      return <Picking />;

    case "picked":
      return <Picked />;

    case "announcing":
      return <Announcing />;

    default:
      return <div>room</div>;
  }
};

export default Room;
