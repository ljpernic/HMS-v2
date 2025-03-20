import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/frybread.jpg"

const JoinHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-120 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
      </div>
    </Fade>
  )
}

export default JoinHeader
