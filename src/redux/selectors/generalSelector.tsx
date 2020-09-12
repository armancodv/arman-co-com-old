import {State} from "../../models/State";

export const generalSelector = {
    menu: (state: State) => state.general.menu,
};