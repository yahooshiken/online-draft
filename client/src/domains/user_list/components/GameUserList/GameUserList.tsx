import React, { FC } from "react";
import { Flex, Box, Text } from "rebass";
import { UserModel, UserStatus } from "../../user_list_reducers";

type Props = {
  userList: Array<UserModel>;
};

const toDisplayStatus = (status: UserStatus) => {
  switch (status) {
    case "selecting":
      return "指名中";
    case "selected":
      return "指名済み";
    case "picked":
      return "交渉権獲得済み";
    default:
      return "";
  }
};

const toStatusColor = (status: UserStatus) => {
  switch (status) {
    case "selecting":
      return "text";
    case "selected":
      return "gray";
    case "picked":
      return "secondary";
    default:
      return "";
  }
};

const GameUserList: FC<Props> = ({ userList = [] }) => (
  <>
    {userList.map((user, index) => (
      <Flex key={user._id} p={14} sx={{ borderBottom: "solid 1px #aaaaaa" }}>
        <Box width="50%">
          <Text fontWeight="bold" fontSize={18}>{`${index + 1}．${
            user.name
          }`}</Text>
        </Box>
        <Box width="50%">
          <Text
            fontWeight="bold"
            fontSize={18}
            textAlign="right"
            color={toStatusColor(user.status)}
          >
            {toDisplayStatus(user.status)}
          </Text>
        </Box>
      </Flex>
    ))}
  </>
);
export default GameUserList;
