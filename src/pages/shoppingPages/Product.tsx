import React, { useRef, useEffect, useCallback, useState } from 'react'
import { typeProduct } from '../../types/typeProduct'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SetCart } from '../../backProcess/localStProgress';


const Product = ({ product }: { product: typeProduct }) => {

  const [buttonDisplay, setButtonDisplay] = useState(false);

  const getImage = useCallback(() => {
    try {
      return require(`../../images/${product.img}.jpg`);
    } catch {
      return require(`../../images/noImage.jpg`);;
    }
  },[product])

  const setCart = useCallback(() => {
    SetCart(product);
  },[product])

  return (

    <li onMouseOver={() => setButtonDisplay(true)} onMouseLeave={() => setButtonDisplay(false)}>

      <div className='productCard'>
        <Link to={'/product/' + product.id}>
          <img className='productImage' alt={product.name} src={getImage()} />
          <div className='productName'>
            <h4 className='title'>{product.title}</h4>
            <h6 className='brand'>{product.name}</h6>
          </div>
          <h5 className='price'>{product.price} TL</h5>
        </Link>

        <Button onClick={setCart} style={buttonDisplay ? {opacity:'1'} : {}} variant="outlined" className='buttonCart'>Sepete Ekle</Button>
      </div>
    </li >

  )
}

export default Product