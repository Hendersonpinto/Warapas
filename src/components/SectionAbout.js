import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'



import { breakpoints, colors } from "../styles/variables"

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media ${breakpoints.mobile} { 
    flex-direction: column;
    width: 100%;
  }
`
const Left = styled.div`
  width: 270px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};

  h1{
    font-weight: 400;
    text-align: center;
    color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
  }

  &:first-child{
    margin-right: 60px;
  }

  @media ${breakpoints.mobile} { 
    margin: 0;
    width: 100%;
    height: 60px;
    margin-bottom: 42px;

    h1{
      font-size: 32px;
    }

    &:first-child{
      margin-right: 0;
    }
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &>*{
    margin-bottom: 16px;
  }

  p{
    text-align: justify;
    font-weight: 700;
  }

  a{
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
    opacity: 0.64;
  }

  @media ${breakpoints.mobile} { 
    width: 100%;
    align-items: center;

    p{
      text-align: center;
    }
  }
`


const SectionAbout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <Wrapper>
      <Left>
        {isMobile ? <h1>Food with attitude</h1> : <h1>Food<br />with<br />attitude</h1>}
      </Left>
      <Right>
        <h3>About Us</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <Link to="/about">Read more ></Link>
      </Right>
    </Wrapper>
  )
}

export default SectionAbout