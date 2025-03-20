import React from "react"
import ProjectsPage from "../components/projects/projectsPage"

// import ProjectsGrid from "../components/projects/projectsGrid"
import ProjectsImages from "../components/projects/projectsImages"

import Seo from "../components/seo"

import Layout from "../components/layout"
// import ProjectsExtra from "../components/projects/projectsExtra"
import ProjectsHeader from "../components/projects/projectsHeader"

const Projects = () => {
  return (
    <Layout>
      <Seo
        title="Projects - Ho Minti Society"
        description="Ho Minti Society is an Indigenous community organization that promotes cultural awareness, service, community organizing, and education in ways that respect traditional knowledge and the breadth of our history and heritage."
      ></Seo>
      <ProjectsHeader></ProjectsHeader>
      <ProjectsPage></ProjectsPage>
      <ProjectsImages></ProjectsImages>
      {/* <ProjectsExtra></ProjectsExtra> */}
    </Layout>
  )
}

export default Projects
