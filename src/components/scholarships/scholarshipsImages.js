import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import ScholarshipImage1 from "../../images/HMS logo_clear_bg.png"
import ScholarshipImage2 from "../../images/basket_2.jpg"
import ScholarshipImage3 from "../../images/HMS logo_clear_bg.png"

const ScholarshipsImages = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={ScholarshipImage1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={ScholarshipImage2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={ScholarshipImage3}></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default ScholarshipsImages
