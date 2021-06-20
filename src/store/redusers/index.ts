import {combineReducers} from "redux";
import {reducer} from "./rootReducer"

export const rootReducer = combineReducers({
    menu: reducer
})

export type RootState = ReturnType<typeof rootReducer>