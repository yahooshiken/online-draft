import { AppState } from "../../foundation/flux/store";

export const userSelectors = {
  getStatus: (state: AppState) => state.user.status,
};
