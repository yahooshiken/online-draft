import React, { FC, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Heading, Box, Flex } from "rebass";
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
      <Box
        width="50%"
        maxWidth={960}
        minWidth={600}
        mx="auto"
        mb={32}
        pb={32}
        sx={{ borderBottom: "solid 1px #aaaaaa" }}
      >
        <Heading textAlign="center" mb={32}>
          第１順希望選択選手を指名してください．
        </Heading>
        <Flex justifyContent="space-between" mb={32}>
          <Box width="46%">
            <Label htmlFor="team" color="gray">
              球団名
            </Label>
            <Select
              id="team"
              name="team"
              disabled={disabled}
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              height={48}
              sx={{ borderColor: "solid 1px #aaaaaa" }}
            >
              {teamOptions.map((team) => (
                <option key={team}>{team}</option>
              ))}
            </Select>
          </Box>
          <Box width="46%">
            <Label htmlFor="player" color="gray">
              選手名
            </Label>
            <Select
              id="player"
              name="player"
              disabled={disabled}
              value={playerId}
              onChange={(e) => {
                setPlayerId(e.target.value);
              }}
              height={48}
            >
              {playerOptions.map((player) => (
                <option key={player._id} value={player._id}>
                  {player.name} ({player.number})
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
        <Box mx="auto" sx={{ textAlign: "center" }}>
          <Button
            variant="secondary"
            disabled={disabled}
            onClick={handleClick}
            width={280}
          >
            指名する
          </Button>
        </Box>
      </Box>
      <Box width="40%" maxWidth={600} minWidth={400} mx="auto" py={32}>
        <Heading textAlign="center" color="gray" mb={18} fontSize={20}>
          他の参加者
        </Heading>
        <GameUserList userList={userList} />
      </Box>
    </MainLayout>
  );
};

export default Picking;
