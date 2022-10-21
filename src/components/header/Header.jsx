import React from 'react'
import Styles from "./Header.module.scss"


const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.hamborgir}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={Styles.menu}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header;