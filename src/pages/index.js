import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import FeatureImages from "../components/Home/featureImages"
// import Testimonial from "../components/Home/testimonial"
import FeaturedEvent from "../components/FeaturedEvent"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Ho Minti Society, An Indigenous Community Organization"
        description="The purpose of Ho Minti Society is to promote cultural awareness, service, community organizing, and education in ways that respect traditional knowledge and the breadth of our history and heritage. We organize regular activities for members and the community at large."
      ></Seo>
      {/* HEADER -> Top section */}
      <Header></Header>                   
      <FeatureSection></FeatureSection>
      <FeatureImages></FeatureImages>      
      {/* <FeaturedEvent></FeaturedEvent> */}
      {/* <Testimonial></Testimonial> */}
    </Layout>
  </div>
)

export default IndexPage
