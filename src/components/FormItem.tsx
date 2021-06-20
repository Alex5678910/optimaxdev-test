import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {ActionTypes} from "../types";

const FormItem: React.FC = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(1)
    const [price, setPrice] = useState<number>(1)
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

    const handleInput1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value.slice(0, 15))
    }
    const handleInput2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(+event.target.value.slice(0, 5))
    }
    const handleInput3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(+event.target.value.slice(0, 5))
    }

    const addCart = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (title && price && quantity) {
            dispatch({
                type: ActionTypes.ADD_CART,
                payload: {
                    title,
                    price,
                    quantity,
                    id: new Date()
                }
            })
        }
        if(title === ''){
            inputRef.current.focus()
            setQuantity(quantity)
            setPrice(price)
        }
        if(title !== ''){
            setTitle('')
            setQuantity(1)
            setPrice(1)
        }
    }

    return (
        <form onSubmit={addCart}>
            <button type="submit">Send to cart</button>
            <label>
                <input
                    ref={inputRef}
                    placeholder={'Name of product'}
                    type="text"
                    value={title}
                    onChange={handleInput1}
                />
                Name product
            </label>
            <label>
                <input
                    placeholder={'Quantity of product'}
                    type="number"
                    value={quantity}
                    onChange={handleInput2}
                />
                Quantity
            </label>
            <label>
                <input
                    placeholder={'Price of product'}
                    type="number"
                    value={price}
                    onChange={handleInput3}
                />
                Price
            </label>
        </form>
    );
};

export default FormItem;
