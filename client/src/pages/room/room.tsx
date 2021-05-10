import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { gameSelectors } from "../../domains/game/game_selectors";

import {
  BeforeStart,
  Picking,
  Picked,
  Announcing,
  Announced,
} from "../../domains/game/components";

import { useTransitionGameMode } from "../../domains/game/game_hooks";
import { useRejoinRoom } from "../../domains/user/user_hooks";
import { userListSelectors } from "../../domains/user_list/user_list_selectors";

const Room: FC = () => {
  const gameMode = useSelector(gameSelectors.getGameMode);
  const userList = useSelector(userListSelectors.getUserList);
  const { roomKey } = useParams<{roomKey: string}>();
  const { rejoinRoom } = useRejoinRoom();
  const { transitionGameMode } = useTransitionGameMode();

  const handleStartGame = () => {
    transitionGameMode(roomKey, "picking");
  };

  useEffect(() => {
    rejoinRoom(roomKey);
  }, []);

  useEffect(() => {
    if (
      gameMode === "picking" &&
      userList.every((user) => user.status === "selected")
    )
      transitionGameMode(roomKey, "picked");
  }, [userList]);

  useEffect(() => {
    if (gameMode === "picked") {
      const timer = setTimeout(() => {
        transitionGameMode(roomKey, "announcing");
      }, 1500);

      return () => clearTimeout(timer);
    }
    if (gameMode === "announced") {
      const timer = setTimeout(() => {
        transitionGameMode(roomKey, "end");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [gameMode]);

  const handleTransitionAnnounced = () => {
    transitionGameMode(roomKey, "announced");
  };

  switch (gameMode) {
    case "before_start":
      return <BeforeStart onClick={handleStartGame} />;
    case "picking":
      return <Picking />;
    case "picked":
      return <Picked />;
    case "announcing":
      return <Announcing onClick={handleTransitionAnnounced} />;
    case "announced":
      return <Announced />;
    default:
      return <div>ここまで</div>;
  }
};

export default Room;
