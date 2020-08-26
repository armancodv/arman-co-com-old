import {UserState} from "../../models/UserState";
import { Action } from "redux";

const initialState: UserState = {
    user: {
        firstName: "a",
        lastName: "",
        title: ""
    }
}

export function user(state = initialState, action: Action): UserState {
    switch (action.type) {
        default:
            return state;
    }
}