import React, { useState, useEffect, useMemo } from 'react'
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

import { typeProduct } from '../../types/typeProduct';
import Product from './Product';
import PageNumbers from './PageNumbers';




// const products: typeProduct[] | [] = shuffle(jsonProducts);

const perProduct = 8;
const Products = ({products}:{products:typeProduct[]}) => {

  const [searchParams] = useSearchParams();
  const { productCategory, page } = { productCategory: searchParams.get('category'), page: searchParams.get('p') }

  const [searchedProducts, setSearchedProducts] = useState<typeProduct[]>([]);
  const [productLength, setProductLength] = useState(0);


  useMemo(() => {
    let length = 0;
    
    const pageLength = Number(page || 1) * perProduct;

    const items2: any = products.filter(
      (product: typeProduct) => {

        const prod = (pageLength - perProduct <= length && length < pageLength ) && product.category?.includes(productCategory || "");
        product.category?.includes(productCategory || "") && length++;
        return prod;

      }
    )

    setProductLength(length);

    setSearchedProducts(items2 || [])
  }, [products, productCategory, page])

  return (
    <div className='Products'>
      <p className='productLength'>Bulunan ürün sayısı: {productLength}</p>
      <ul>
        {searchedProducts.map((product: typeProduct) => <Product key={product.id} product={product} />)}

      </ul>

      {
        productLength === 0 &&
        <div className='productNotFounded' >
          <p>Aradığınız kategoride ürün bulunamamıştır.</p>
        </div>
      }

      <PageNumbers urlParams={searchParams} productLength={productLength} page={Number(page) || 1} />
    </div>
  )
}

export default Products