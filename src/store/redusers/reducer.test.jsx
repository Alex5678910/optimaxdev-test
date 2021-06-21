import React from 'react';
import {reducer} from "./rootReducer";
import {MenuAction, ActionTypes} from "../../types";
import {fetchMenu} from "../action-creators/CartFetch";

describe('menu reducer', () => {
    let elements;
    beforeEach(() => {
        //elements = [{menu: [], loading: false, error: null}, {menu: [{ id: 1, quantity: 1 }, { id: 2, quantity: 2 }], loading: false, error: null}]
        elements =  [{ id: 1, quantity: 1 }, { id: 2, quantity: 2 }]
    });

    it('initial state', () => {
        expect(reducer(undefined, {})).toEqual({"error": null, "loading": false, "menu": []});
    });

    it('show REMOVE_ITEM action', () => {
        const action = {
            type: ActionTypes.REMOVE_ITEM,
            payload: 1
        };

        expect(reducer(elements, action.payload)).toEqual([
            { id: 1, quantity: 1 }, { id: 2, quantity: 2 }
        ]);
    });

    it('show PLUS_ITEM action', () => {
        const action = {
            type: ActionTypes.PLUS_ITEM,
            payload: 1
        };

        expect(reducer([{ id: 1, quantity: 1 }], action.payload)).toEqual([
            { id: 1, quantity: 1 }
        ]);
    });

    it('show MINUS_ITEM action', () => {
        const action = {
            type:  ActionTypes.MINUS_ITEM,
            payload: 2
        };

        expect(reducer([{ id: 2, quantity: 2 }], action.payload)).toEqual([
            { id: 2, quantity: 2 }
        ]);
    });

    it('length of product should', () => {
        let action = ActionTypes;
        let state = {
            menu: [
                {title: 'Cesar salad' , price: 42, quantity: 1,id: 1},
                {title: 'Pizza Margherita' , price: 44, quantity: 2,id: 2},
                {title: 'Pizza Neapolitan' , price: 41,quantity: 1,id: 3},
                {title: 'Greece salad' , price: 48,quantity: 1,id: 4},
                {title: 'Cowboy Steak' , price: 42,quantity: 1, d: 5}
            ]
        }
        let newState = reducer(state, action)

        expect(newState.menu.length).toBe(5)
    })
});

it(' should fetch of product', () => {
    let action = fetchMenu;
    let state = {
        menu: [
            {title: 'Cesar salad' , price: 42, quantity: 1,id: 1},
            {title: 'Pizza Margherita' , price: 44, quantity: 2,id: 2},
            {title: 'Pizza Neapolitan' , price: 41,quantity: 1,id: 3},
            {title: 'Greece salad' , price: 48,quantity: 1,id: 4},
            {title: 'Cowboy Steak' , price: 42,quantity: 1, d: 5}
        ]
    }
    let newState = reducer(state, action)

    expect(newState.menu.length).toBe(5)
})





