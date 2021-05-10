import React, { FC, useState, useEffect } from "react";
import { Box, Flex, Text, Heading } from "rebass";
import { useSelector } from "react-redux";
import { Button } from "rebass";

import { gameSelectors } from '../../../game/game_selectors'
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { useFindPlayerById } from "../../../player_list/player_list_hooks";
import { MainLayout } from "../../../../foundation/layouts";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Announcing: FC<Props> = ({ onClick }) => {
  const userList = useSelector(userListSelectors.getUserList);
  const turn = useSelector(gameSelectors.getTurn);

  const { findPlayerById } = useFindPlayerById();

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIndex((showIndex) => showIndex + 1);
    }, 3000);
    if (showIndex > userList.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const currentPlayer = findPlayerById(
    userList[showIndex - 1]?.selectedPlayerId
  );
  const beforeAnnouncing = 0 >= showIndex;
  const isAnnouncing = 0 < showIndex && showIndex <= userList.length;

  return (
    <MainLayout>
      <Box width="70%" maxWidth={960} minWidth={600} mx="auto" mb={32} pb={32}>
        <Heading textAlign="center" mb={32}>
          第{turn}順希望選択選手の結果発表を行います．
        </Heading>
        <Flex justifyContent="space-between">
          <Box width="55%">
            <Text fontWeight="bold" color="gray" mb={1}>
              スクリーン
            </Text>

            <Box height={270} p={[12, 16]} sx={{ border: "solid 1px #aaaaaa" }}>
              {isAnnouncing ? (
                <Flex flexDirection="column">
                  <Text color="text" fontSize="16">
                    {userList[showIndex - 1]?.name}
                  </Text>
                  <Box py={60}>
                    <Text color="text" fontSize={24} fontWeight="bold">
                      {currentPlayer?.name} ({currentPlayer?.number})
                    </Text>
                    <Text color="gray" fontSize={12}>
                      {currentPlayer?.team}
                    </Text>
                  </Box>
                </Flex>
              ) : (
                <Text py={60} color="text" fontSize={24} fontWeight="bold">
                  {beforeAnnouncing ? (
                    <>
                      それでは，指名結果を
                      <br />
                      発表いたします．
                    </>
                  ) : (
                    <>
                      全球団の指名結果が
                      <br />
                      発表されました．
                    </>
                  )}
                </Text>
              )}
            </Box>
          </Box>
          <Box width="40%">
            <Text fontWeight="bold" color="gray" mb={1}>
              発表結果
            </Text>
            {userList.map((user, index) => {
              const player = findPlayerById(user.selectedPlayerId);
              return index < showIndex ? (
                <Flex
                  key={user._id}
                  p={14}
                  sx={{ borderBottom: "solid 1px #aaaaaa" }}
                >
                  <Box width="50%">
                    <Text fontWeight="bold" fontSize={18}>{`${index + 1}．${
                      user.name
                    }`}</Text>
                  </Box>
                  <Box width="50%">
                    <Text fontWeight="bold" fontSize={18} textAlign="right">
                      {player?.name} ({player?.number})
                    </Text>
                  </Box>
                </Flex>
              ) : null;
            })}
            <Button variant="secondary" onClick={onClick} mt={24} width="100%">
              {showIndex <= userList.length ? "結果発表中..." : "次へ"}
            </Button>
          </Box>
        </Flex>
      </Box>
    </MainLayout>
  );
};

export default Announcing;
