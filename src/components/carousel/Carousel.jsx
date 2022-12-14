import React from 'react'
import Styles from "./Carousel.module.scss"
import Card from '../card/Card';
import { data } from '../../utils/data';


const Carousel = () => {
  return (
    <div className={Styles.carousel}>
      <div className={Styles.carousel_wrap}>
      {data.map((e, i) =>{
        return(
          <Card key = {i} index = {i} info = {e}/>
        );
      })}
      </div>
    </div>
  )
};
export default Carousel;