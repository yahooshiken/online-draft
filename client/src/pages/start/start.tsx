import React, { FC, useEffect, useState, ChangeEvent } from "react";
import { Box, Heading, Button, Flex } from "rebass";
import { Label, Input } from "@rebass/forms";
import io from "socket.io-client";

import { useSendRoomKey } from "../../domains/user/user_hooks";

const Start: FC = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [name, setName] = useState("");
  const [roomKey, setRoomKey] = useState("");

  useEffect(() => {
    const socketClient: SocketIOClient.Socket = io();
    setSocket(socketClient);
  }, []);

  useEffect(() => {
    socket?.on("server_to_client", (data: { value: string }) => {
      const msg = data.value;
      console.warn(msg);
    });
  }, [socket]);

  const { sendRoomKey } = useSendRoomKey(roomKey);

  const handleJoinRoom = () => {
    sendRoomKey();
  };

  const handleSendMessage = () => {
    console.log(name);
    socket?.emit("client_to_server_broadcast", { value: name });
  };

  const handleChangeRoomKey = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomKey(e.currentTarget.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <Box
      color="white"
      bg="primary"
      sx={{
        maxWidth: 512,
        mx: "auto",
        p: 3,
      }}
    >
      <Heading fontSize={[5, 6, 7]}>Welcome.</Heading>
      <Label htmlFor="roomKey">roomKey</Label>
      <Input
        id="roomKey"
        name="roomKey"
        type="text"
        value={roomKey}
        onChange={handleChangeRoomKey}
      />
      <Label htmlFor="name">name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChangeName}
      />

      <Flex justifyContent="flex-end" mt={4}>
        <Button onClick={handleSendMessage} variant="secondary">
          Send Name
        </Button>

        <Button onClick={handleJoinRoom} variant="secondary">
          Join room
        </Button>
      </Flex>
    </Box>
  );
};
export default Start;
