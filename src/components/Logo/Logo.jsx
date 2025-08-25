import React from 'react'
// import logo from '@assets/img/logo/logo.svg';
import logo from '@assets/img/ja-logo.png';
import Image from 'next/image';
export default function Logo() {
  return (
    <Image className="logo-light" style={{
      width: "180px",
      height: '80px'
    }} src={logo} alt="logo" width={'auto'} height={'auto'} />
  )
}
