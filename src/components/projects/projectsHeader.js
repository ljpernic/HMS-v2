import React from "react"
import Fade from "react-reveal/Fade"

import projectsImage from "../../images/basket_banner.webp"

const ProjectsHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-120 m-4">
          <img alt="Image" src={projectsImage}></img>
        </div>
      </div>
    </Fade>
  )
}

export default ProjectsHeader
