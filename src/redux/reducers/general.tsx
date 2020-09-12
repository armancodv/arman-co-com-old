import {GeneralState} from "../../models/GeneralState";
import {Action} from "../../models/Action";

const initialState: GeneralState = {
    menu: {
        drawer: false
    }
}

export function general(state = initialState, action: Action<string, any>): GeneralState {
    switch (action.type) {
        case "GENERAL_MENU_DRAWER":
            return {
                ...state,
                menu: {
                    ...state.menu,
                    drawer: action.payload
                }
            }
        default:
            return state;
    }
}