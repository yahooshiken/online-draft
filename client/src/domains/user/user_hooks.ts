import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userActions } from "./user_actions";
import { socketActions } from "../socket/socket_actions";

export const useJoinRoom = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const joinRoom = useCallback(
    async (roomKey: string, name: string) => {
      dispatch(userActions.setRoomKey(roomKey));
      dispatch(userActions.setName(name));
      dispatch(socketActions.joinRoom({ roomKey, name }));
      history.push(`/${roomKey}`);
    },
    [dispatch]
  );

  return { joinRoom };
};
