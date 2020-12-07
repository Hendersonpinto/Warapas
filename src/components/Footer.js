import React from "react"
import styled from "styled-components"

import { colors, breakpoints } from "../styles/variables"

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
    @media ${breakpoints.mobile} { 
      width: 100%;
      margin: 0;

      a{
        h1{
          font-size: 24px;
        }
      }
    }
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