import React, { FC } from "react";
import { Box, Flex, Text } from "rebass";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelectors } from "../../../domains/user/user_selectors";

const MainLayout: FC = (props) => {
  const { roomKey } = useParams();
  const name = useSelector(userSelectors.getName);

  return (
    <>
      <Box bg="primary" p={32}>
        <Flex>
          <Text width="100%">Online Draft</Text>
          <Flex width="100%" justifyContent="flex-end">
            <Text mr={4}>ルーム番号：{roomKey}</Text>
            <Text>チーム名：{name}</Text>
          </Flex>
        </Flex>
      </Box>
      <Box p={36}>{props.children}</Box>
    </>
  );
};

export default MainLayout;
