import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"


import { colors } from "../styles/variables"
import Layout from "../components/layouts/layout"
import Collage from "../components/Collage"
import SectionAbout from "../components/SectionAbout"
import SectionReviews from "../components/SectionReviews"
import SectionContact from "../components/SectionContact"



const SecContainer = styled.div`
  margin: 250px 40px 20px 40px;
  background-color: ${props => (props.theme === "dark" ? colors.blue : colors.white)};
  flex: 1;
  padding: 0px 60px;

  &>*{
    margin-bottom: 100px;
  }
`

const Home = ({ data }) => {
  return (
    <Layout>
      <SecContainer>
        <Collage data={data} />
        <SectionAbout />
        <SectionReviews />
        <SectionContact data={data} />
      </SecContainer>
    </Layout>
  )
}
export default Home

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "dish1.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "dish2.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "dish3.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "dish4.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "dish5.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "dish6.png" }) {
      ...fluidImage
    }
    imageContact: file(relativePath: { eq: "contact.png" }) {
      ...fluidImage
    }
  }
`
