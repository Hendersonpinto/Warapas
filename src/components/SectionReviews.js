import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from "styled-components"


import { colors } from "../styles/variables"
import { reviews } from "../config/reviews"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;


  h3{
    color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
  }
`
const ReviewWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-style: solid none solid none;
  border-color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
  
  h1{
    font-weight: 400;
    text-align: center;
    color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
  }
  
  &:first-child{
    margin-right: 60px;
  }
  `

const Review = styled.div`
    width: 60%;
    text-align: center;
    color: ${props => (props.theme === "dark" ? colors.white : colors.blue)};
    margin: 50px 0;

    p{
      margin-bottom: 16px;
    }

    span {
      font-size: 14px;
      font-style: italic;
    }

    &.review-enter {
      opacity: 0;
      transform: translateX(-100px)
    }
    &.review-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 1000ms;
    }
    &.review-exit {
      transform: translateX(0);
      opacity: 1;
    }
    &.review-exit-active {
      transform: translateX(100px);
      opacity: 0;
      transition: all 1000ms;
    }
    &.review-exit-done {
      opacity: 0;
    }
  `

const SliderWrapper = styled.div`
    display: flex;
    margin: 20px 0;

    &>*{
      margin-right: 20px;
    }
  `

const Slider = styled.div`
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid;
    border-color: ${props => (props.theme === "dark" ? colors.white : colors.gold)};
    background-color: ${props => (props.theme === "dark" ? colors.white : colors.gold)};

    &:last-child{
      margin: 0;
    }

    &.active{
      background-color: ${props => (props.theme === "dark" ? colors.gold : colors.white)};
    }
  `


const SectionAbout = () => {
  const [reviewIndex, setReviewIndex] = useState(1);
  const [sliderIndex, setSliderIndex] = useState(1);
  const [inView, setInView] = useState(true);

  const isActive = (index) => index === sliderIndex ? 'active' : ''

  const handleSliderClick = (index) => {
    setInView(false)
    setSliderIndex(index)
    setTimeout(() => {
      setInView(true)
      setReviewIndex(index)
    }, 800);
  }
  return (
    <Wrapper>
      <h3>What people say about us</h3>
      <ReviewWrapper>
        <CSSTransition in={inView} timeout={1000} classNames="review">
          <Review>
            <p>{reviews[reviewIndex].review}</p>
            <span>{reviews[reviewIndex].author}</span>
          </Review>
        </CSSTransition>
        <SliderWrapper>
          <Slider className={isActive(0)} onClick={() => handleSliderClick(0)}></Slider>
          <Slider className={isActive(1)} onClick={() => handleSliderClick(1)}></Slider>
          <Slider className={isActive(2)} onClick={() => handleSliderClick(2)}></Slider>
        </SliderWrapper>
      </ReviewWrapper>
    </Wrapper>
  )
}

export default SectionAbout