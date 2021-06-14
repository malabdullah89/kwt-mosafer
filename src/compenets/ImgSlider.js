import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
    let settings = {
        dots:false,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
          <Wrap>
              <img src="https://kuwaitmosafer.gov.kw/images/banners/ill-5.png" />
          </Wrap>

          <Wrap>
              <img src="https://kuwaitmosafer.gov.kw/images/banners/ill-6.png" />
          </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
   
`

const Wrap = styled.div`
     

     img {
        width: 100%;
        border-radius: 0.75rem;
        
     }
`




