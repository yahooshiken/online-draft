import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userActions } from "./user_actions";
import { socketActions } from "../socket/socket_actions";
import { UserStatus } from "../user_list/user_list_reducers";

export const useJoinRoom = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const joinRoom = useCallback(
    async (roomKey: string, name: string) => {
      dispatch(socketActions.joinRoom({ roomKey, name }));
      history.push(`/${roomKey}`);
    },
    [dispatch]
  );

  return { joinRoom };
};

export const useChangeStatus = () => {
  const dispatch = useDispatch();

  const changeStatus = useCallback(
    (status: UserStatus) => {
      dispatch(userActions.changeStatus(status));
    },
    [dispatch]
  );

  return { changeStatus };
};
