import {MenuAction, ActionTypes} from "../../types";
import {Dispatch} from "redux";

export const fetchMenu = () => {
    return async (dispatch: Dispatch<MenuAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_MENU})
            let db = await fetch('http://localhost:3001/menu', {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json());
            db = {
                "menu": [
                    {"title": "Cesar salad","price": 42, "quantity": 1,"id": 1},
                    {"title": "Pizza Margherita","price": 44, "quantity": 1,"id": 2},
                    {"title": "Pizza Neapolitan","price": 41,"quantity": 1,"id": 3},
                    {"title": "Greece salad","price": 48,"quantity": 1,"id": 4},
                    {"title": "Cowboy Steak","price": 42,"quantity": 1,"id": 5}
                ]
            };
            dispatch({type: ActionTypes.FETCH_MENU_SUCCESS, payload: db,})
        }catch (e) {
            dispatch({type: ActionTypes.FETCH_MENU_ERROR, payload: 'Произошла ошибка, проверьте сервер!'})
        }
    }
}


