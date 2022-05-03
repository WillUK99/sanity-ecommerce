import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer-container">
      <p>2022 Sanity Commerce All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer