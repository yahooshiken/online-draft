import { AppState } from "../../foundation/flux/store";

export const userSelectors = {
  getId: (state: AppState) => state.user._id,
  getStatus: (state: AppState) => state.user.status,
};
