import React from 'react'
import Styles from "./Carousel.module.scss"
import Card from '../card/Card';
const Carousel = () => {
  return (
    <div className={Styles.carousel}>
      <div className={Styles.carousel_wrap}>
      {[0, 1, 2, 3].map((e, i) =>{
        return(
          <Card margin_top = {i % 2 == 0 ? true : false}/>
        );
      })}
      </div>
    </div>
  )
};
export default Carousel;