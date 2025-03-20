import React from "react"
import JoinPage from "../components/join/joinPage"

// import JoinGrid from "../components/join/joinGrid"
import JoinImages from "../components/join/joinImages"

import Seo from "../components/seo"

import Layout from "../components/layout"
// import JoinExtra from "../components/join/joinExtra"
import JoinHeader from "../components/join/joinHeader"

const Join = () => {
  return (
    <Layout>
      <Seo
        title="Join - Ho Minti Society"
        description="Ho Minti Society is an Indigenous community organization that promotes cultural awareness, service, community organizing, and education in ways that respect traditional knowledge and the breadth of our history and heritage."
      ></Seo>
      <JoinHeader></JoinHeader>
      <JoinPage></JoinPage>
      <JoinImages></JoinImages>
      {/* <JoinExtra></JoinExtra> */}
    </Layout>
  )
}

export default Join
