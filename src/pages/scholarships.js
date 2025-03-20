import React from "react"
import ScholarshipsPage from "../components/scholarships/scholarshipsPage"

// import ScholarshipsGrid from "../components/scholarships/scholarshipsGrid"
import ScholarshipsImages from "../components/scholarships/scholarshipsImages"

import Seo from "../components/seo"

import Layout from "../components/layout"
// import ScholarshipsExtra from "../components/scholarships/scholarshipsExtra"
import ScholarshipsHeader from "../components/scholarships/scholarshipsHeader"

const Scholarships = () => {
  return (
    <Layout>
      <Seo
        title="Scholarships - Ho Minti Society"
        description="Ho Minti Society is an Indigenous community organization that promotes cultural awareness, service, community organizing, and education in ways that respect traditional knowledge and the breadth of our history and heritage."
      ></Seo>
      <ScholarshipsHeader></ScholarshipsHeader>
      <ScholarshipsPage></ScholarshipsPage>
      <ScholarshipsImages></ScholarshipsImages>
      {/* <ScholarshipsExtra></ScholarshipsExtra> */}
    </Layout>
  )
}

export default Scholarships
