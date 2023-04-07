import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState, useEffect } from 'react'
import { typeProduct } from '../../types/typeProduct';
import { typeCart } from '../../types/typeCart';
import { Button } from '@mui/material';
import { DeleteCart, SetCart } from '../../backProcess/localStProgress';
import { typeCartInfo } from '../../types/typeCartInfo';

const CartItems = (
    { product, cartInfo, setShoppingInfo }:
        { product: typeProduct | undefined, cartInfo: typeCart, setShoppingInfo: Dispatch<SetStateAction<typeCartInfo>> }
) => {

    const hideDisplay = useRef<any>()
    const [amount, setAmount] = useState(cartInfo.amount || 0);

    const getImage = useCallback(() => {
        try {
            return require(`../../images/${product?.img}.jpg`);
        } catch {
            return require(`../../images/noImage.jpg`);;
        }
    }, [product])

    const updateCart = () => {
        const total = ((amount) - (cartInfo.amount || 0)) * (product?.price || 0)
        setShoppingInfo(prev => ({
            ...prev,
            total: (prev.total || 0) + total,
            amount: (prev.amount || 0) + (amount) - (cartInfo.amount || 0)
        }));
    }

    const deleteProduct = useCallback(() => {
        setAmount(0);
        DeleteCart(Number(cartInfo.id));
        hideDisplay.current.style.display = 'none';
        
        // setShoppingInfo(prev => ({ ...prev, amount: (prev.amount || 1) - 1 }));
    }, [cartInfo.id])

    useMemo(() => {
        updateCart();
        

        

        SetCart(product || {} as typeProduct, amount);
        if (amount == 0) hideDisplay.current.style.display = 'none';

    }, [amount])

    useEffect(() => {
        setShoppingInfo(prev => ({
            ...prev,
            amount: (prev.amount || 0) + (cartInfo.amount || 0),
            total: (prev.total || 0) + (product?.price || 0) * (cartInfo.amount || 0)
        }))
    }, [])

    return (
        <>
            <li ref={hideDisplay} key={product?.id}>
                <Button onClick={deleteProduct} className='buttonDelete' color='error' variant='outlined'>Sil</Button>
                <img rel={product?.img} src={getImage()}></img>
                <div className='info'>

                    <h4 className='id'>#{cartInfo.id}</h4>
                    <h1 className='title'>
                        <h2>{product?.title} </h2>
                        {product?.name}
                    </h1>
                </div>
                <label htmlFor='amount' style={{ display: 'none' }}></label>
                <select value={amount} onChange={(e) => setAmount(Number(e.target.value) || 0)} name='amount' id='amount'>
                    {[...Array(10)].map((m, x) => <option value={x}>{x}</option>)}
                </select>
                <h4 className='price'>{(product?.price || 0) * (amount || 0)}TL</h4>
            </li>
        </>
    )
}

export default CartItems