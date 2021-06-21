import {MenuAction, ActionTypes} from "../../types";
import {Dispatch} from "redux";

/**
 *Download a list of cart items from the server 'http://localhost:3001/menu' for local development
 *Server for Github Pages 'https://alex5678910.github.io/optimax-dev-test-json-api/api/db.json'
 */

export const fetchMenu = () => {
    return async (dispatch: Dispatch<MenuAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_MENU})
            let db = await fetch('https://alex5678910.github.io/optimax-dev-test-json-api/api/db.json', {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
            ;
            dispatch({type: ActionTypes.FETCH_MENU_SUCCESS, payload: db,})
        }catch (e) {
            dispatch({type: ActionTypes.FETCH_MENU_ERROR, payload: 'Произошла ошибка, проверьте сервер!'})
        }
    }
}



