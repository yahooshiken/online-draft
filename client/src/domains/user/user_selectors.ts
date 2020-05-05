import { AppState } from "../../foundation/flux/store";

export const userSelectors = {
  getId: (state: AppState) => state.user._id,
  getName: (state: AppState) => state.user.name,
  getStatus: (state: AppState) => state.user.status,
};
