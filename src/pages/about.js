import React from "react"
import AboutPage from "../components/about/aboutPage"

// import AboutGrid from "../components/about/aboutGrid"
import AboutImages from "../components/about/aboutImages"

import Seo from "../components/seo"

import Layout from "../components/layout"
// import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About - Ho Minti Society"
        description="Ho Minti Society is an Indigenous community organization that promotes cultural awareness, service, community organizing, and education in ways that respect traditional knowledge and the breadth of our history and heritage."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutImages></AboutImages>
      {/* <AboutExtra></AboutExtra> */}
    </Layout>
  )
}

export default About
