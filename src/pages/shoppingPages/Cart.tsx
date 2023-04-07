import React, { useMemo, useState, useEffect } from 'react'
import { GetCart } from '../../backProcess/localStProgress';
import { typeProduct } from '../../types/typeProduct';
import { typeCartInfo } from '../../types/typeCartInfo';
import CartItems from './CartItems';
import { Button } from '@mui/material';
import { typeCart } from '../../types/typeCart';

const Cart = ({ products }: { products: typeProduct[] }) => {

  const [shoppingInfo, setShoppingInfo] = useState<typeCartInfo>({
    amount: 0,
    total: 0
  });

  return (
    <main className='Cart'>
      <ul className='cartList'>

        {GetCart().map(function (item) {
          if (item.id && Number(item.amount) > 0) {
            const product = products.find(p => p.id == item.id)
            if (product?.id && Number(product.price) > 0) {
              return (
                < CartItems key={product.id} product={product} cartInfo={item} setShoppingInfo={setShoppingInfo} />
              );
            }
          }
        })}

      </ul>
      <section className='cartInfo'>
        <div className='container'>
          <h1>Alışveriş bilgileriniz</h1>

          <div className='info'>
            <div>
              <h3>Ürün Sayısı</h3>
              <h5>{shoppingInfo.amount}</h5>
            </div>
            <div>
              <h3>Toplam Fiyat</h3>
              <h5>{shoppingInfo.total}TL</h5>
            </div>
          </div>
          <p>Vade ve taksit tutarları tek bir ürün üzerinden hesaplanmış olup sepetteki tutar üzerinden değişiklik gösterebilir.
            <br/><br/>
            Maksimum vade bilgisayarlarda 12, tabletlerde 6 aydır. 12.000 TL ve altındaki cep telefonlarında maksimum vade 12 ay, 12.000 TL üzerindeki cep telefonlarında 3 aydır. Örneğin, sepetinizde 12.600 TL ve 11.500 TL değerinde iki ayrı telefon varsa kullanabileceğiniz maksimum vade 3 aydır.</p>
          <Button className='buttonBuy' variant='outlined' color='success'>Satın almayı onayla</Button>
        </div>

      </section>
    </main >
  )
}

export default Cart