import {MenuAction, ActionTypes, MenuState} from "../../types";

const initialState: MenuState = {
    menu: [],
    loading: false,
    error: null,
}

export const reducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        case ActionTypes.FETCH_MENU:
            return {
                loading: true,
                error: null,
                menu: []
            }
        case ActionTypes.FETCH_MENU_SUCCESS:
            return {
                loading: false,
                error: null,
                menu: action.payload
            }
        case ActionTypes.FETCH_MENU_ERROR:
            return {
                loading: false,
                error: action.payload,
                menu: []
            }
        case  ActionTypes.REMOVE_ITEM:
            return {
                ...state, menu: state.menu.filter(({ id }) => id !== action.payload)
            }
        case  ActionTypes.PLUS_ITEM:
            return {
                ...state, menu: state.menu.map(el => el.id === action.payload ? { ...el, quantity: el.quantity + 1} : el)
            }
        case  ActionTypes.MINUS_ITEM:
            return {
                ...state, menu: state.menu.map(el => el.id === action.payload ? { ...el, quantity: el.quantity - 1} : el)
            }
        case  ActionTypes.ADD_CART:
            return {
                ...state, menu: [action.payload, ...state.menu]
            }
        default:
            return state
    }
}