import React, { FC, useEffect, useState, ChangeEvent } from "react";
import { Box, Heading, Button, Flex, Text } from "rebass";
import { Label, Input } from "@rebass/forms";
import io from "socket.io-client";

import { StartLayout } from "../../foundation/layouts";
import { useJoinRoom } from "../../domains/user/user_hooks";

const Start: FC = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [name, setName] = useState("");
  const [roomKey, setRoomKey] = useState("");

  useEffect(() => {
    const socketClient: SocketIOClient.Socket = io("http://localhost:1844");
    setSocket(socketClient);
  }, []);

  const { joinRoom } = useJoinRoom();

  const handleJoinRoom = () => {
    joinRoom(roomKey, name);
  };

  const handleChangeRoomKey = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomKey(e.currentTarget.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <StartLayout>
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Box color="text" minWidth={400} px={3}>
          <Heading fontSize={36} mb={4}>
            Welcome to
            <br /> Online Draft 👋
          </Heading>
          <Label htmlFor="roomKey" mb={1} color="gray">
            ルーム番号
          </Label>
          <Input
            id="roomKey"
            name="roomKey"
            type="text"
            value={roomKey}
            onChange={handleChangeRoomKey}
            height={48}
            sx={{ borderColor: "#aaaaaa" }}
            mb={2}
          />
          <Label htmlFor="name" mb={1} color="gray">
            チーム名
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleChangeName}
            height={48}
            mb={4}
            sx={{ borderColor: "#aaaaaa" }}
          />

          <Button
            onClick={handleJoinRoom}
            variant="secondary"
            width="100%"
            mb={4}
            sx={{ borderRadius: "20px" }}
          >
            ルームに参加
          </Button>

          <Text color="gray">
            Online Draftは開発中のサービスです．
            <br />
            いかなる不具合があっても，
            <br />
            開発者は一切責任を負いません．
          </Text>
        </Box>
      </Flex>
    </StartLayout>
  );
};
export default Start;
