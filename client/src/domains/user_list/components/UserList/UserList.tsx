import React, { FC } from "react";
import { Box, Text } from "rebass";
import { UserModel } from "../../user_list_reducers";

type Props = {
  userList: Array<UserModel>;
};

const UserList: FC<Props> = ({ userList = [] }) => (
  <Box>
    {userList.map((user, index) => (
      <Box key={user._id} p={16} sx={{ borderBottom: "solid 1px #aaaaaa" }}>
        <Text fontWeight="bold">{`${index + 1}．${user.name}`}</Text>
      </Box>
    ))}
  </Box>
);

export default UserList;
