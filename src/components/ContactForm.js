import React from "react"
import styled from "styled-components"

import SButtonFilled from "./SButtonFilled"
import { colors } from "../styles/variables"

const Form = styled.form`
  width: 80%;
`
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
  margin-top: 80px;
`
const Field = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  input {
    appearance: none;
    border: none;
    background: none;
    border-bottom: 1px solid ${colors.blue};
    outline: none;
  }

  label {
    margin-left: 20px;
    font-family: 'Cormorant Garamond';
  }
`
const TextWrapper = styled.div`
    flex-direction: column;
    display: flex;
    border-bottom: 1px solid ${colors.blue};
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

  textarea {
    appearance: none;
    border: none;
    background: #DDDDDD;
    width: 90%;
    margin-bottom: 12px;
    outline: none;
    font-family: 'Cormorant Garamond';
  }
`

const ContactForm = () => {
  return (
    <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <TopWrapper>
        <Field>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </Field>
        <Field>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </Field>
      </TopWrapper>
      <TextWrapper>
        <textarea name="message" id="message" rows="6" placeholder="Any question? Write us here" />
      </TextWrapper>
      <div className="actions">
        <SButtonFilled type="submit">Submit now</SButtonFilled>
      </div>
    </Form>
  )
}

export default ContactForm