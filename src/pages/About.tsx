import React, {useEffect} from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {

  const uploadImage = () => {
    try {
      return require("../images/myPhoto.jpg");
    } catch (error) {
      return require("../images/noImage.jpg");
    }
  }

  return (
    <main className='About'>
      <section className='aboutSection'>
        <div className='aboutPhoto'>
          <img rel="myPhoto" src={uploadImage()} />
        </div>
        <div className='text'>
          <h3 className='title'>Kendi hakkımda kısa bir önyazı..</h3>
          <p className='description'>Merhaba ben barış, bilgisayar programcılığı bölümünde okumaktayım, ileride bilgisayar mühendisliğine geçmeyi düşünüyorum. Yazılımla uğraşmayı seviyorum özellikle web/yapay zeka alanlarına ilgim olduğunu söylüyebilirim. Sitemi ziyaret ettiğiniz için teşekkür ederim</p>
          <p className='socialMediaIcons'>
            <Link to="https://www.facebook.com" target='blank' rel='noopener noreferrer'><FaFacebookSquare className='icons'/></Link>
            <Link to="https://www.twitter.com" target='blank' rel='noopener noreferrer'><FaTwitterSquare className='icons'/></Link>
            <Link to="https://www.linkedin.com" target='blank' rel='noopener noreferrer'><FaLinkedin className='icons'/></Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default About