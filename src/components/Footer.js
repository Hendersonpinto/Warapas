import React from "react"
import styled from "styled-components"

import { colors } from "../styles/variables"

const BottomNav = styled.nav`
  padding: 20px;
  padding-bottom: 90px;
  width: auto;
  background-color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};

  .inner {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

`

const Footer = ({ children }) => {
  return (
    <BottomNav>
      <div className="inner">
        <a href="https://www.google.com">
          <h1>Instagram</h1>
        </a>
        <a href="https://www.google.com">
          <h1>Facebook</h1>
        </a>
        <a href="https://www.google.com">
          <h1>Telephone</h1>
        </a>
      </div>
    </BottomNav>
  )
}

export default Footer