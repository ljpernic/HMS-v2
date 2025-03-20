import React from "react"
import JoinTeamCard from "./joinTeamCard"

const JoinGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <JoinTeamCard
        imgSrc="https://i.postimg.cc/HWhyyLNH/Holographic-Liquid3.webp"
        position="Holographic Liquid"
      ></JoinTeamCard>
      <JoinTeamCard
        imgSrc="https://i.postimg.cc/WbBzjWWc/Holographic-Liquid2.webp"
        position="Holographic Liquid"
      ></JoinTeamCard>
      <JoinTeamCard
        imgSrc="https://i.postimg.cc/907FTc4F/Holographic-Liquid1.webp"
        position="Holographic Liquid"
      ></JoinTeamCard>
    </div>
  )
}

export default JoinGrid
