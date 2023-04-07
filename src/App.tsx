import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './pages/Layout';
import Unknown from './pages/Unknown';

import ProductPage from './pages/shoppingPages/ProductPage';
import Products from './pages/shoppingPages/Products';
import Cart from './pages/shoppingPages/Cart';
import { typeProduct } from './types/typeProduct';
import jsonProducts from './database/products.json';


function shuffle(array: typeProduct[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const App = () => {

    const [products, setProducts] = useState<typeProduct[] | []>(jsonProducts);

    return (
        <Routes>
            <Route path='/' element={
                <Layout />}>

                <Route index element={<Products products={shuffle(products)} />}/>
                <Route path='products' element={<Products products={shuffle(products)} />}/>

                <Route path="product/:id" element={<ProductPage products={products}/>} />



                <Route path="cart" element={<Cart products = {products}/>} />

                <Route path="about" element={<About />} />
                <Route path="*" element={<Unknown />} />
            </Route>
        </Routes >
    )
}

export default App;