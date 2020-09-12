import {UserState} from "./UserState";
import {GeneralState} from "./GeneralState";

export interface State {
    user: UserState,
    general: GeneralState
}