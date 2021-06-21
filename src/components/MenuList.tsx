import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchMenu} from "../store/action-creators/CartFetch";
import {ActionTypes} from "../types";

/**
 * defining the type of the confirm global variable
 */
declare var confirm: (question: string) => boolean

const MenuList: React.FC = () => {
    const {loading, error, menu} = useTypedSelector(state => state.menu)
    const dispatch = useDispatch()

    /**
     * I make a request to the server
     */
    useEffect(() => {
        dispatch(fetchMenu())
    }, [dispatch])

    if (loading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    /**
     * Remove item from cart by ID
     */
    const removeHandler = (elem: { id: number }) => {
        const shoudRemove = confirm('Are you sure you want to delete the product?')
        if (shoudRemove) {
            dispatch({type: ActionTypes.REMOVE_ITEM, payload: elem.id})
        }
    }

    /**
     * Increase count of item
     */
    const plusHandler = (elem: { id: number }) => {
        dispatch({type: ActionTypes.PLUS_ITEM, payload: elem.id})
    }

    /**
     * Decrease count of item
     */
    const minusHandler = (elem: { id: number, quantity: number }) => {
        const min = menu.find(e => {
            return e.quantity === elem.quantity
        })
        if (min.quantity > 0) {
            dispatch({type: ActionTypes.MINUS_ITEM, payload: elem.id})
        }
    }

    return (
        <>
            <table className={'Table'}>
                <thead className={'Thead'}>
                <tr>
                    <th className={'Box-title'}>Product name</th>
                    <th className={'Box-title'}>Quantity</th>
                    <th className={'Box-title'}>Price</th>
                </tr>
                </thead>
                <tbody>
                {menu.length > 0 ?
                    menu.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td className={'Title-td'}>{e.title}</td>
                                <td><span className={'Increase'} onClick={() => plusHandler(e)}>
                            +</span><span>{e.quantity}</span>
                                    <span className={'Decrease'}
                                          onClick={() => minusHandler(e)}>
                            -</span></td>
                                <td>{e.price}</td>
                                <td>
                                    <button className={'Del'} onClick={() => removeHandler(e)}>Del</button>
                                </td>
                            </tr>
                        )
                    }) : <tr className={'Quantity'}>
                        <td>NO PRODUCT</td>
                    </tr>
                }
                </tbody>
            </table>
        </>
    )
}

export default MenuList;