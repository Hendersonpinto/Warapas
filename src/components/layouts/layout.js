import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { colors } from "../../styles/variables"
import Logo from "../../assets/logo.png"


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

  img{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainContainer className={`main-container`}>
        <img src={Logo} alt="Warapas Grill logo" />

        {children}
      </MainContainer>
    </>
  )
}

export default Layout