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

  @media ${breakpoints.mobile} { 
    flex-direction: column-reverse;
  }
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

  @media ${breakpoints.mobile} { 
    align-items: center;
    margin: 0;
    width: 100%;

    &:first-child{
      margin-right: 0;
    }

    form{
      width: 100%;
    }
  }
`

const Right = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${breakpoints.mobile} { 
    width: 100%;
    margin-bottom: 56px;
  }
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