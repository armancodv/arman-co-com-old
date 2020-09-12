import {UserState} from "../../models/UserState";
import { Action } from "redux";

const initialState: UserState = {
    user: {
        firstName: "Arman",
        lastName: "Kolahan",
        title: "Senior Software Engineer"
    }
}

export function user(state = initialState, action: Action): UserState {
    switch (action.type) {
        default:
            return state;
    }
}