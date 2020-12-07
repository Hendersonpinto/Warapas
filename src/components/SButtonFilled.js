import styled from "styled-components"

import { colors, breakpoints } from "../styles/variables"

const buttonProps = {
  light: Boolean,
  round: Boolean,
  fullWidth: Boolean,
  halfWidth: Boolean,
  marginRight: String
}

const SButtonFilled = styled('button', buttonProps)`
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s ease-in;
  width: ${props => props.fullWidth ? '100%' : props.halfWidth ? '50%' : 'fit-content'};
  height: ${props => props.round ? '34px' : '52px'};
  padding-left: ${props => props.round ? '24px' : '60px'};
  padding-right: ${props => props.round ? '24px' : '60px'};
  border-radius: ${props => props.round ? '71px' : '0'};
  border: 1px solid ${props => props.light ? colors.white : colors.blue};
  background: ${props => props.light ? colors.white : colors.blue};
  color: ${props => props.light ? colors.blue : colors.white};
  margin-right: ${props => props.marginRight ? props.marginRight : '0'};
  font-family: 'Cormorant Garamond';
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 3px;
  margin: auto;


  &:hover {
    background: none;
    color: ${props => props.light ? colors.white : colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${props => props.light ? colors.blue : colors.white};
  }

  .label {
    width: 100%;
    margin: auto;
  }

  @media ${breakpoints.mobile} { 
    height: 44px;
    padding: 0 30px;
  }
`

export default SButtonFilled
