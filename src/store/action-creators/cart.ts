import {MenuAction, ActionTypes} from "../../types";
import {Dispatch} from "redux";

export const fetchMenu = () => {
    return async (dispatch: Dispatch<MenuAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_MENU})
            const db = await fetch('http://localhost:3001/menu', {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json());
            dispatch({type: ActionTypes.FETCH_MENU_SUCCESS, payload: db,})
        }catch (e) {
            dispatch({type: ActionTypes.FETCH_MENU_ERROR, payload: 'Произошла ошибка, проверьте сервер!'})
        }
    }
}


