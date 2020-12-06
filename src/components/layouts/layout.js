import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { colors } from "../../styles/variables"
import Footer from "../Footer"

import Logo from "../../assets/images/logo.png"
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

  .logo{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
  }

  .social-media{
    position: fixed;
    top: 100px;
    left: 70px;
    z-index: 99;

    &>*{
      margin-bottom: 150px;
    }
  }
`

const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);


  return (
    <>
      <GlobalStyle />
      <MainContainer className={`main-container`}>
        <img className="logo" src={Logo} alt="Warapas Grill logo" />
        <ContactCircle />
        <div className="social-media">
          <BurgerMenu toggleNav={setIsNavOpen} isOpen={isNavOpen} />
          <SocialMedia />
        </div>
        <DropNav isOpen={isNavOpen} />
        {children}
        <Footer />
      </MainContainer>

    </>
  )
}

export default Layout