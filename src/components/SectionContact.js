import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image'

import { breakpoints, colors } from "../styles/variables"

import ContactForm from "./ContactForm"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1{
    font-weight: 400;
    text-align: center;
    color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
  }

  &:first-child{
    margin-right: 60px;
  }
`

const Right = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageWrapper = styled.div`
  width: 100%;
`



const SectionContact = ({ data: { imageContact } }) => {
  return (
    <Wrapper>
      <Left>
        <h3>Get in touch</h3>
        <ContactForm />
      </Left>
      <Right>
        <ImageWrapper>
          <Img fluid={imageContact.childImageSharp.fluid} />
        </ImageWrapper>
      </Right>
    </Wrapper>
  )
}

export default SectionContact