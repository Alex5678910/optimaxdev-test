export interface MenuState {
    menu: any[];
    loading: boolean;
    error: null | string;
}

export enum ActionTypes {
    FETCH_MENU = 'FETCH_MENU',
    FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS',
    FETCH_MENU_ERROR = 'FETCH_MENU_ERROR',
    REMOVE_ITEM = 'REMOVE_ITEM',
    PLUS_ITEM = 'PLUS_ITEM',
    MINUS_ITEM='MINUS_ITEM',
    ADD_CART='ADD_CART'
}

interface FetchMenuAction {
    type: ActionTypes.FETCH_MENU
}

interface FetchMenuSuccessAction {
    type: ActionTypes.FETCH_MENU_SUCCESS;
    payload: any[]
}

interface addCart {
    type: ActionTypes.ADD_CART;
    payload: {}
}

interface FetchMenuErrorAction {
    type: ActionTypes.FETCH_MENU_ERROR;
    payload: string
}

interface RemoveItem {
    type: ActionTypes.REMOVE_ITEM;
    payload: number;
}

interface plusItem {
    type: ActionTypes.PLUS_ITEM;
    payload: number;
}

interface minusItem {
    type: ActionTypes.MINUS_ITEM;
    payload: number;
}

export type MenuAction = FetchMenuErrorAction |
    FetchMenuSuccessAction |
    FetchMenuAction |
    RemoveItem |
    plusItem |
    minusItem |
    addCart