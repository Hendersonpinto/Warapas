import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useMediaQuery } from 'react-responsive'


import { colors, breakpoints } from "../../styles/variables"

import Footer from "../Footer"
import Logo from "../Logo"
import SocialMedia from "../SocialMedia"
import BurgerMenu from "../BurgerMenu"
import DropNav from "../DropNav"
import ContactCircle from "../ContactCircle"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
    color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
  }
`
const MainContainer = styled.div`
  margin: 30px;
  background-color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .social-media{
    position: fixed;
    top: 100px;
    left: 70px;
    z-index: 99;

    &>*{
      margin-bottom: 150px;
    }
  }

  @media ${breakpoints.mobile} { 
    margin: 12px;
    position: relative;

    .social-media{
      position: fixed;
      left: initial;
      top: 50px;
      right: 8vw;
      z-index: 99;
    }
  }
`

const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <>
      <GlobalStyle />
      <MainContainer className={`main-container`}>
        <Logo />
        <ContactCircle />
        <div className="social-media">
          <BurgerMenu toggleNav={setIsNavOpen} isOpen={isNavOpen} />
          {!isMobile && <SocialMedia />}
        </div>
        <DropNav isOpen={isNavOpen} />
        {children}
        <Footer />
      </MainContainer>

    </>
  )
}

export default Layout