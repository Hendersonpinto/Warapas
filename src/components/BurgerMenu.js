import React from "react"
import styled from "styled-components"

import { colors } from "../styles/variables"


const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 22.5px;

  .line {
    height: 1px;
    width: 100%;
    background-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
    transition: all 0.3s ease-out;
  }

  &.open{
    .line{
      background-color: ${props => (props.theme === "dark" ? colors.blue : colors.gold)};
      transform-origin: left;

      &.line1 {
        transform: rotate(45deg);
      }

      &.line2 {
        display: none;
      }

      &.line3 {
        transform: rotate(-45deg);
      }
    }
  }
`

const BurgerMenu = ({ toggleNav, isOpen }) => {
  return (
    <Wrapper onClick={() => toggleNav(!isOpen)} className={isOpen ? 'open' : ''}>
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </Wrapper>
  )
}

export default BurgerMenu