import React from 'react'
import './carousal.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousal = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
    
       <div className='carousal'>
       <h1>Motivation Being Our Hard Work</h1>
       <i className="fa-solid fa-quote-left left"></i>
       <Slider {...settings}>
       {text.map((t)=>(
        <div className='card-carous'>
        
       <h3>{t.heading}</h3>
       
       </div>
       ))}
       </Slider>
      
       

       </div> 
         
               
       
    </>
  )
}
 const text = [
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
  {
    heading : '"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can wait to go back again and again. Its definitely my new favorite spot!"'
  },
 ]

  

export default Carousal;