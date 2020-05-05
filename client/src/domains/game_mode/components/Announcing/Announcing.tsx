import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "rebass";
import { GameUserList } from "../../../user_list/components/GameUserList";

import { useFetchUserList } from "../../../user_list/user_list_hooks";
import { userListSelectors } from "../../../user_list/user_list_selectors";
import { useFindPlayerById } from "../../../player_list/player_list_hooks";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Announcing: FC<Props> = ({ onClick }) => {
  const { roomKey } = useParams();
  const userList = useSelector(userListSelectors.getUserList);
  const { findPlayerById } = useFindPlayerById();

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    console.info(userList, showIndex);
    const interval = setInterval(() => {
      setShowIndex((showIndex) => showIndex + 1);
    }, 3000);
    if (showIndex === userList.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, []);

  console.info({ showIndex });

  return (
    <div>
      結果発表を行います
      {userList.map((user, index) => {
        const player = findPlayerById(user.selectedPlayerId);
        return index < showIndex ? (
          <li key={user._id}>
            <p>{user.name}</p>
            <p>
              {player?.team} {player?.name} {player?.number}
            </p>
          </li>
        ) : null;
      })}
      <Button onClick={onClick}>
        {showIndex < userList.length ? "結果発表中..." : "次へ"}
      </Button>
    </div>
  );
};

export default Announcing;
