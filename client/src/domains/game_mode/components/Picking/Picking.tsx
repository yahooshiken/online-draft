import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { GameUserList } from "../../../user_list/components/GameUserList";
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { useFetchPlayerList } from "../../../player_list/player_list_hooks";

const Picking: FC = () => {
  const { roomKey } = useParams();
  const userList = useSelector(userListSelectors.getUserList);
  const { fetchUserList } = useFetchUserList(roomKey);
  const { fetchPlayerList } = useFetchPlayerList();

  useEffect(() => {
    fetchUserList();
    fetchPlayerList();
  }, []);

  return (
    <div>
      スタートしたよ
      <GameUserList userList={userList} />
    </div>
  );
};

export default Picking;
