import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image'

import { breakpoints } from "../styles/variables"

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
  position: relative;
  height: 70vh;

  @media ${breakpoints.desktopXL} { 
    height: 100vh;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

  &:nth-child(1){
    width: 30%;
    z-index: 10;
  }

  &:nth-child(2){
    width: 50%;
    z-index: 7;
    transform: translate(8%,-100%);

  }
  &:nth-child(3){
    width: 40%;
    z-index: 8;
    transform: translate(-80%,-100%);
  }
  &:nth-child(4){
    width: 50%;
    z-index: 9;
    transform: translate(-100%,-50%);
  }
  &:nth-child(5){
    width: 30%;
    z-index: 4;
    transform: translate(-135%,7%);

  }
  &:nth-child(6){
    width: 42%;
    z-index: 6;
    transform: translate(-34%,-17%);

  }
`

const Collage = ({ data: { imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix } }) => {
  return (
    <Wrapper>
      <ImageWrapper >
        <Img fluid={imageOne.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fluid={imageTwo.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fluid={imageThree.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fluid={imageFour.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fluid={imageFive.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fluid={imageSix.childImageSharp.fluid} />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Collage