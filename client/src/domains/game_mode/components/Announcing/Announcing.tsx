import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GameUserList } from "../../../user_list/components/GameUserList";

import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { userListSelectors } from "../../../user_list/user_list_selectors";

const Announcing: FC = () => {
  const { roomKey } = useParams();
  const userList = useSelector(userListSelectors.getUserList);
  const { fetchUserList } = useFetchUserList(roomKey);

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      結果発表を行います
      <GameUserList userList={userList} />
    </div>
  );
};

export default Announcing;
