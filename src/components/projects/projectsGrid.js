import React from "react"
import ProjectsTeamCard from "./projectsTeamCard"

const ProjectsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <ProjectsTeamCard
        imgSrc="https://i.postimg.cc/HWhyyLNH/Holographic-Liquid3.webp"
        position="Holographic Liquid"
      ></ProjectsTeamCard>
      <ProjectsTeamCard
        imgSrc="https://i.postimg.cc/WbBzjWWc/Holographic-Liquid2.webp"
        position="Holographic Liquid"
      ></ProjectsTeamCard>
      <ProjectsTeamCard
        imgSrc="https://i.postimg.cc/907FTc4F/Holographic-Liquid1.webp"
        position="Holographic Liquid"
      ></ProjectsTeamCard>
    </div>
  )
}

export default ProjectsGrid
