import React, { FC } from "react";
import { UserModel } from "../../user_list_reducers";

type Props = {
  userList: Array<UserModel>;
};

const GameUserList: FC<Props> = ({ userList = [] }) => (
  <div>
    <ul>
      {userList.map((user) => (
        <li key={user._id}>
          {user.name} {user.status} {user.selectedPlayer}
        </li>
      ))}
    </ul>
  </div>
);
export default GameUserList;
