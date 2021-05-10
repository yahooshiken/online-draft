import React, { FC } from "react";
import { Box, Heading } from "rebass";
import { useSelector } from "react-redux";

import { MainLayout } from "../../../../foundation/layouts";
import { GameUserList } from "../../../user_list/components/GameUserList";
import { userListSelectors } from "../../../user_list/user_list_selectors";

const Picked: FC = () => {
  const userList = useSelector(userListSelectors.getUserList);

  return (
    <MainLayout>
      <Box
        width="50%"
        maxWidth={960}
        minWidth={600}
        mx="auto"
        mb={32}
        py={80}
        sx={{ borderBottom: "solid 1px #aaaaaa" }}
      >
        <Heading textAlign="center">
          全球団の指名が終わりました．しばらくお待ち下さい．
        </Heading>
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
export default Picked;
