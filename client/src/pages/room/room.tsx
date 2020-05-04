import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { gameModeSelectors } from "../../domains/game_mode/game_mode_selectors";

import { BeforeStart } from "../../domains/game_mode/components/BeforeStart";
import { Picking } from "../../domains/game_mode/components/Picking";
import { useStartGame } from "../../domains/game_mode/game_mode_hooks";

const Room: FC = () => {
  const gameMode = useSelector(gameModeSelectors.getGameMode);
  const { roomId } = useParams();
  const { startGame } = useStartGame();

  const handleStartGame = () => {
    startGame();
  };

  switch (gameMode) {
    case "before_start":
      return <BeforeStart onClick={handleStartGame} />;

    case "picking":
      return <Picking />;

    default:
      return <div>room</div>;
  }
};

export default Room;
