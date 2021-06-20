import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchMenu} from "../store/action-creators/cart";
import {ActionTypes} from "../types";

const MenuList: React.FC = () => {
    const {loading, error, menu} = useTypedSelector(state => state.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
    }, [dispatch])

    if (loading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const removeHandler = (n: { id: number }) => {
        dispatch({type: ActionTypes.REMOVE_ITEM, payload: n.id})
    }

    const plusHandler = (n: { id: number }) => {
        dispatch({type: ActionTypes.PLUS_ITEM, payload: n.id})
    }

    const minusHandler = (n: { id: number, quantity: number }) => {
        const min = menu.find(e => {
            return e.quantity === n.quantity
        })
        if (min.quantity > 0) {
            dispatch({type: ActionTypes.MINUS_ITEM, payload: n.id})
        }
    }

    return (
        <>
            <table className={'Table'}>
                <thead className={'Thead'}>
                <tr>
                    <th className={'Box-title'}>Name product</th>
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
                            +</span><span>{e.quantity}</span><span className={'Decrease'}
                                                                                          onClick={() => minusHandler(e)}>
                            -</span></td>
                                <td>{e.price}</td>
                                <td>
                                    <button className={'Del'} onClick={() => removeHandler(e)}>Del</button>
                                </td>
                            </tr>
                        )
                    }) : <tr className={'Quantity'}><td>NO PRODUCT</td></tr>
                }
                </tbody>
            </table>
        </>
    )
}

export default MenuList;