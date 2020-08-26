import {State} from "../../models/State";

export const userSelector = {
    user: (state: State) => state.user.user,
};