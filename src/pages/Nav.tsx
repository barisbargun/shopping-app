import { Button, ButtonGroup, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const {productCategory} = {productCategory:searchParams.get('category')}

  const changeTitle = (title:string) => {
    document.title = title;
  }

  useMemo(() => {
    if(productCategory == 'phone')changeTitle("İndirimdeki telefonları kaçırma!")
    else if(productCategory == "notebook")changeTitle("Şok fiyatına notebooklar!!")
    else if(productCategory == "tv")changeTitle("Yeni 4k televizyonlar")
    else if(productCategory == "console")changeTitle("Güçlendirilmiş yeni konsollar")
    else if(location.pathname == "/about")changeTitle("Hakkımda")
    else if(location.pathname == "/cart")changeTitle("Sepetim")
    else if(location.pathname == "/products")changeTitle("Tüm Ürünler");
  },[location])
  
  const focusButton = (category:string, path:string):boolean => {
    if(productCategory === category && location.pathname === path) {
      return true;
    }
    return false;
  }

  return (
    <nav>
      <div className='Nav'>

        <ButtonGroup className="ButtonGroup" variant="outlined" aria-label="products button group">
          <Link to='products'><Button className={(location.pathname == "/products" || location.pathname == "/") && !productCategory ? 'focusedButton' : ''}>Tüm ürünler</Button></Link>
          <Link to='products?category=phone'><Button className={focusButton("phone","/products") ? 'focusedButton' : ''}>Telefon</Button></Link>
          <Link to='products?category=notebook' ><Button className={productCategory == 'notebook' ? 'focusedButton' : ''}>Bilgisayar</Button></Link>
          <Link to='products?category=tv'><Button className={productCategory == 'tv' ? 'focusedButton' : ''}>Televizyon</Button></Link>
          <Link to='products?category=console'><Button className={productCategory == 'console' ? 'focusedButton' : ''}>Konsol</Button></Link>
          <Link to='about'><Button className={location.pathname === '/about' ? 'focusedButton' : ''}>Hakkımda</Button></Link>
        </ButtonGroup>

        <ButtonGroup className="ButtonGroup" variant="outlined" aria-label="outlined primary button group">

          <Link to='cart'>
            <Button className={`buttonCart ${location.pathname === '/cart' ? 'focusedCartButton' : ''}`}>
              <p>Sepet</p><BsCart2 />
            </Button>
          </Link>
        </ButtonGroup>

      </div>
    </nav>
  )
}

export default Nav