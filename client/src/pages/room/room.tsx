import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { gameModeSelectors } from "../../domains/game_mode/game_mode_selectors";

import { BeforeStart } from "../../domains/game_mode/components/BeforeStart";
import { Picking } from "../../domains/game_mode/components/Picking";
import {
  useStartGame,
  useTransitionPicked,
} from "../../domains/game_mode/game_mode_hooks";
import { userListSelectors } from "../../domains/user_list/user_list_selectors";

const Picked: FC = () => <div>hoge</div>;

const Room: FC = () => {
  const gameMode = useSelector(gameModeSelectors.getGameMode);
  const userList = useSelector(userListSelectors.getUserList);
  const { roomKey } = useParams();
  const { startGame } = useStartGame(roomKey);
  const { transitionPicked } = useTransitionPicked(roomKey);

  useEffect(() => {
    if (
      gameMode === "picking" &&
      userList.every((user) => user.status === "selected")
    )
      transitionPicked();
  }, [userList]);

  const handleStartGame = () => {
    startGame();
  };

  console.info(gameMode);

  switch (gameMode) {
    case "before_start":
      return <BeforeStart onClick={handleStartGame} />;

    case "picking":
      return <Picking />;

    case "picked":
      return <Picked />;

    default:
      return <div>room</div>;
  }
};

export default Room;
