import React, { useState, useCallback } from 'react'
import { typeProduct } from '../../types/typeProduct'
import { useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import { SetCart } from '../../backProcess/localStProgress';

const ProductPage = ({ products }: { products: typeProduct[] }) => {

  const { id } = useParams();
  const [product, setProduct] = useState<typeProduct | undefined>(products.find(p => p.id === Number(id)))

  const getImage = useCallback(() => {
    try {
      return require(`../../images/${product?.img}.jpg`);
    } catch {
      return require(`../../images/noImage.jpg`);;
    }
  },[product]);

  const setData = useCallback(() => {
    SetCart(product || {} as typeProduct);
  },[product])


  return (
    <main className='ProductPage'>
      {product &&
          <section className='container'>
            <div className='productPhoto'>
              <img rel = "productPhoto" src={getImage()}/>
            </div>
            <div className='productInfo'>
              <h3 className='category'>Products/{product.category}</h3>

                
                <h1 className='title'>
                  <h1 className='brand'>{product.title}</h1>
                  <h4 style={{display:'inline'}}>{product.name}</h4>
                </h1>
              
              <p>Satış sonrası hizmette yenilik: KolayServis. Sadece Jesus Store'a özel cihaz kullanıcılarına KolayServis uygulamamız ile istediğiniz akıllı telefonunuzu dilediğiniz yerden alıp, servis sonrası size getiriyoruz.</p>
              <br/>
              <p>Alışverişlerinizde Yapı Kredi Bankası’nın size özel kredi fırsatlarından yararlanın.</p>
              <br/>
              <h5 className='price'>{product.price}TL<span style={{fontSize:'0.7rem'}}> (KDV dahildir.)</span></h5>
              <Button onClick={setData} variant = "outlined" className='buttonCart'>Sepete Ekle</Button>
              <p className='stock'>Miktar:{product.stock} adet</p>
              
            </div>
          </section>
      }

    </main>
  )
}

export default ProductPage