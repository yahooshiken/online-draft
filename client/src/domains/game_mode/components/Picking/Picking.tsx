import React, { FC, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Label, Select } from "@rebass/forms";

import { GameUserList } from "../../../user_list/components/GameUserList";
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { playerListSelectors } from "../../../player_list/player_list_selectors";
import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { useFetchPlayerList } from "../../../player_list/player_list_hooks";

const Picking: FC = () => {
  const { roomKey } = useParams();
  const userList = useSelector(userListSelectors.getUserList);
  const playerList = useSelector(playerListSelectors.getPlayerList);
  const { fetchUserList } = useFetchUserList(roomKey);
  const { fetchPlayerList } = useFetchPlayerList();

  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");

  useEffect(() => {
    fetchUserList();
    fetchPlayerList();
  }, []);

  const teamOptions = playerList
    .map(({ team }) => team)
    .filter((team, index, array) => array.indexOf(team) === index);
  const playerOptions = playerList.filter(
    (player) => player.team === selectedTeam
  );

  return (
    <div>
      スタートしたよ
      <GameUserList userList={userList} />
      <Label htmlFor="team">team</Label>
      <Select
        id="team"
        name="team"
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        {teamOptions.map((team) => (
          <option key={team}>{team}</option>
        ))}
      </Select>
      <Label htmlFor="player">player</Label>
      <Select
        id="player"
        name="player"
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
      >
        {playerOptions.map((player) => (
          <option key={player._id}>
            {player.name} ({player.number})
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Picking;
