import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"


import { colors } from "../styles/variables"
import Layout from "../components/layouts/layout"


const SecContainer = styled.div`
  margin: 20px 40px;
  background-color: ${props => (props.theme === "dark" ? colors.blue : 'wheat')};
  flex: 1;
  padding: 0px 60px;
`

const Home = ({ data }) => {
  return (
    <Layout>
      <SecContainer>
        <div>Hello world!</div>
        <h1> {data.site.siteMetadata.title}</h1>
      </SecContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home