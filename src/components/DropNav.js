import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


import { colors } from "../styles/variables"


const Nav = styled.nav`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
  color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
  justify-content: center;
  align-items: center;
  padding: 50px;
  transition: all 0.5s ease-in-out;
  opacity: 1;

  &.closed{
    opacity: 0;
    padding: 0;
    visibility: hidden;
  }

  a{
    color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
    font-size: 50px;
    font-family: 'Cormorant Garamond';
    line-height: 150%;
  }
`

const DropNav = ({ isOpen }) => {
  return (
    <Nav className={isOpen ? '' : 'closed'}>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  )
}

export default DropNav