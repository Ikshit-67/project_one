import React from 'react'
import Styles from "./Card.module.scss"
import { Icon } from '@iconify/react';
import { Button } from '@mui/material';

const Card = ({info, index}) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.img_wrapper}>
        <img src={info.img_url} alt="lol"/>
      </div>
        <div className={Styles.upper}>
        <strong className={Styles.smallText}>{info.smallText}</strong>
        <h1 className={Styles.mainText}>{info.mainText}</h1>
        <p className={Styles.infoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut, libero dolores at in lahore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut, libero dolores at in lahore.</p>
        </div>
        <div className={Styles.middle}>
            <Button>Explore</Button>
            <Icon icon="bi:arrow-right" color="white" />
        </div>
        <div className={Styles.bottom}>
            <h2>0{index+1}</h2>
        </div>
    </div>
  )
}

export default Card;