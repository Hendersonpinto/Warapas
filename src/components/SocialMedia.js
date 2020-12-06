import React from "react"
import styled from "styled-components"

import Instagram from '../assets/instagram.inline.svg'
import Facebook from '../assets/facebook.inline.svg'
import Phone from '../assets/phone.inline.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  &>*{
    margin-bottom: 10px;
  }
`

const SocialMedia = () => {
  return (
    <Wrapper className={'socialmedia'}>
      <Facebook />
      <Instagram />
      <Phone />
    </Wrapper>
  )
}

export default SocialMedia