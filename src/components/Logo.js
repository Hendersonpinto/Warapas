import React from "react"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'

import LogoImg from "../assets/images/logo.png"
import { colors, breakpoints } from "../styles/variables"
import SocialMedia from "./SocialMedia"


const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  
  .logo{
    height: 200px;
  }

  @media ${breakpoints.mobile} { 
    position: absolute;
    top: 35px;
    left: 30px;
    transform: translate(0);
    
    .logo{
      height: 100px;
    }
  }
`

const Logo = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
  return (
    <Wrapper >
      <img className="logo" src={LogoImg} alt="Warapas Grill logo" />
      {isMobile && <SocialMedia />}
    </Wrapper>
  )
}

export default Logo