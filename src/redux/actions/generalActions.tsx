import {Dispatch} from "redux";

export const actionMenuDrawer = (payload: boolean) => (dispatch: Dispatch) => {
    return dispatch({
        type: 'GENERAL_MENU_DRAWER',
        payload
    });
};