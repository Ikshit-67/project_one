import React from 'react'
import Styles from "./Card.module.scss"
import { Icon } from '@iconify/react';
import { Button } from '@mui/material';

const Card = ({margin_top}) => {
  return (
    <div className={Styles.card} style={{marginTop:margin_top?"20px":"", marginBottom:margin_top?"":"20px"}}>
        <div className={Styles.upper}>
        <strong className={Styles.smallText}>Sahara</strong>
        <h1 className={Styles.mainText}>Sand</h1>
        <p className={Styles.infoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut, libero dolores at in lahore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut, libero dolores at in lahore.</p>
        </div>
        <div className={Styles.middle}>
            <Button>Explore</Button>
            <Icon icon="bi:arrow-right" color="white" />
        </div>
        <div className={Styles.bottom}>
            <h2>02</h2>
        </div>
    </div>
  )
}

export default Card;