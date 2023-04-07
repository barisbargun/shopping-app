import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaBasketballBall} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='Footer'>
      <section className="footerInfo">
        <div className="container">
            <div className="left">
                <h2>YER</h2>
                <p>Yakacık Yolu, Uğur Cad. No:27 34870 KARTAL/ISTANBUL(ÖRNEKTİR)</p>
            </div>
            
            <div className="center">
                <h2>INTERNETTE BİZİ TAKİP EDİN!</h2>
                <div className="iconSection">
                  <FaFacebookF className='icons'/>
                  <FaTwitter className='icons'/>
                  <FaLinkedinIn className='icons'/>
                  <FaGooglePlusG className='icons'/>
                  <FaBasketballBall className='icons'/>
                </div>
            </div>
            <div className="right">
                <h2>WEBSİTESİ HAKKINDA</h2>
                <p>Kullanmakta olduğunuz websitesi javascript frameworkuna ait react ile yapılmıştır. </p>
            </div>
        </div>
    </section>
    <section className='footerDown'>
        <p>Copyright © Barış Olgun 2023</p>
    </section>
    </footer>
  )
}

export default Footer