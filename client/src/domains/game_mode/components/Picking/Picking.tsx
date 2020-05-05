import React, { FC, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "rebass";
import { Label, Select } from "@rebass/forms";

import { MainLayout } from "../../../../foundation/layouts";
import { GameUserList } from "../../../user_list/components/GameUserList";
import { userSelectors } from "../../../user/user_selectors";
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { playerListSelectors } from "../../../player_list/player_list_selectors";
import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { useFetchPlayerList } from "../../../player_list/player_list_hooks";
import { useChangeStatus, useSelectPlayer } from "../../../user/user_hooks";

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
  const { selectPlayer } = useSelectPlayer();

  const [selectedTeam, setSelectedTeam] = useState("");
  const [playerId, setPlayerId] = useState("");

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

  const handleClick = () => {
    changeStatus(_id, "selected", roomKey);
    selectPlayer(_id, playerId, roomKey);
  };

  return (
    <MainLayout>
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
        value={playerId}
        onChange={(e) => {
          setPlayerId(e.target.value);
        }}
      >
        {playerOptions.map((player) => (
          <option key={player._id} value={player._id}>
            {player.name} ({player.number})
          </option>
        ))}
      </Select>
      <Button disabled={disabled} onClick={handleClick}>
        指名する
      </Button>
    </MainLayout>
  );
};

export default Picking;
