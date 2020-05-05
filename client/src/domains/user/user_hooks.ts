import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userActions } from "./user_actions";
import { socketActions } from "../socket/socket_actions";
import { UserStatus } from "../user_list/user_list_reducers";
import { PlayerModel } from "../player_list/player_list_models";

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

export const useRejoinRoom = () => {
  const dispatch = useDispatch();

  const rejoinRoom = useCallback(
    async (roomKey: string) => {
      dispatch(socketActions.rejoinRoom({ roomKey }));
    },
    [dispatch]
  );

  return { rejoinRoom };
};

export const useChangeStatus = () => {
  const dispatch = useDispatch();

  const changeStatus = useCallback(
    (_id: string, status: UserStatus, roomKey: string) => {
      dispatch(userActions.changeStatus(status));
      dispatch(socketActions.changeStatus({ _id, status, roomKey }));
    },
    [dispatch]
  );

  return { changeStatus };
};

export const useSelectPlayer = () => {
  const dispatch = useDispatch();

  const selectPlayer = useCallback(
    (_id: string, playerId: string, roomKey: string) => {
      dispatch(socketActions.selectPlayer({ _id, playerId, roomKey }));
    },
    [dispatch]
  );

  return { selectPlayer };
};
