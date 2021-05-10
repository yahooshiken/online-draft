import React, { FC, useEffect } from "react";
import { Box, Button, Flex, Heading, Text } from "rebass";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { StartLayout } from "../../../../foundation/layouts";
import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { UserList } from "../../../user_list/components/UserList";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BeforeStart: FC<Props> = ({ onClick }) => {
  const { roomKey } = useParams();
  const userList = useSelector(userListSelectors.getUserList);
  const { fetchUserList } = useFetchUserList(roomKey);

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <StartLayout>
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Box color="text" minWidth={400} px={3}>
          <Heading fontSize={36} mb={1} color="text">
            このメンバーで
            <br />
            ドラフトをはじめます
          </Heading>
          <Text color="gray" mb={3} px={1}>
            ルーム番号：{roomKey}
          </Text>
          <UserList userList={userList} />
          <Button
            onClick={onClick}
            variant="secondary"
            width="100%"
            my={4}
            sx={{ borderRadius: "20px" }}
          >
            ドラフトをはじめる
          </Button>
        </Box>
      </Flex>
    </StartLayout>
  );
};

export default BeforeStart;
