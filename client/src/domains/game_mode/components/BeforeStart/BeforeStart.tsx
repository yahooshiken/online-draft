import React, { FC, useEffect } from "react";
import { Button } from "rebass";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
    <div>
      スタートしてないよ
      <Button onClick={onClick}>スタート</Button>
      <UserList userList={userList} />
    </div>
  );
};

export default BeforeStart;
