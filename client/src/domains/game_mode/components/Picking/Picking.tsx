import React, { FC, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "rebass";
import { Label, Select } from "@rebass/forms";

import { GameUserList } from "../../../user_list/components/GameUserList";
import { userSelectors } from "../../../user/user_selectors";
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { playerListSelectors } from "../../../player_list/player_list_selectors";
import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { useFetchPlayerList } from "../../../player_list/player_list_hooks";
import { useChangeStatus } from "../../../user/user_hooks";

const Picking: FC = () => {
  const { roomKey } = useParams();
  const _id = useSelector(userSelectors.getId);
  const name = useSelector(userSelectors.getName);
  const status = useSelector(userSelectors.getStatus);
  const userList = useSelector(userListSelectors.getUserList);
  const playerList = useSelector(playerListSelectors.getPlayerList);
  const { fetchUserList } = useFetchUserList(roomKey);
  const { fetchPlayerList } = useFetchPlayerList();
  const { changeStatus } = useChangeStatus();

  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");

  useEffect(() => {
    fetchUserList();
    fetchPlayerList();
  }, []);

  const disabled = status !== "selecting";
  const teamOptions = playerList
    .map(({ team }) => team)
    .filter((team, index, array) => array.indexOf(team) === index);
  const playerOptions = playerList.filter(
    (player) => player.team === selectedTeam
  );

  return (
    <div>
      スタートしたよ．君{name}のステータス：{status}
      <GameUserList userList={userList} />
      <Label htmlFor="team">team</Label>
      <Select
        id="team"
        name="team"
        disabled={disabled}
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
        disabled={disabled}
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
      >
        {playerOptions.map((player) => (
          <option key={player._id}>
            {player.name} ({player.number})
          </option>
        ))}
      </Select>
      <Button
        disabled={disabled}
        onClick={() => changeStatus(_id, "selected", roomKey)}
      >
        指名する
      </Button>
    </div>
  );
};

export default Picking;
