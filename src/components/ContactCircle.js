import React from "react"
import styled from "styled-components"

import { colors } from "../styles/variables"

const Wrapper = styled.div`
  z-index: 99;
  cursor: pointer;
  border-radius: 50%;
  position: fixed;
  top: 80px;
  display: flex;
  right: 70px;
  height: 160px;
  width: 160px;
  transition: all 0.4s ease 0s;
  border: 2px solid;
  border-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
  background-color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};


  p{
    margin: auto;
    color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
    font-size: 18px;
    font-style: italic;
  }

  &:hover{
    background-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};

    p{
      color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
    }
  }
`

const ContactCircle = () => {
  return (
    <Wrapper className={'contact-circle'}>
      <p>Contact us</p>
    </Wrapper>
  )
}

export default ContactCircle