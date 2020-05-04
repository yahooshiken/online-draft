import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./user_actions";
import { socketActions } from "../socket/socket_actions";

export const useSendRoomKey = (roomKey: string) => {
  const dispatch = useDispatch();

  const sendRoomKey = useCallback(async () => {
    dispatch(userActions.setRoomKey(roomKey));
    dispatch(socketActions.joinRoom({ roomKey }));
  }, [dispatch, roomKey]);

  return { sendRoomKey };
};
