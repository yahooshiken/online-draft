import React, { FC } from "react";
import { UserModel } from "../../user_list_reducers";

type Props = {
  userList: Array<UserModel>;
};

const SelectedPlayerList: FC<Props> = ({ userList = [] }) => {
  return (
    <div>
      {userList.map((user) => (
        <li key={user._id}>{user.name} </li>
      ))}
    </div>
  );
};

export default SelectedPlayerList;
