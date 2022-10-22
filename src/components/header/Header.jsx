import React from 'react'
import Styles from "./Header.module.scss"
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.hamborgir}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={Styles.menu}>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </div>
    </div>
  )
}

export default Header;