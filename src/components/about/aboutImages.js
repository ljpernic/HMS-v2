import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import AboutImage1 from "../../images/HMS logo_clear_bg.png"
import AboutImage2 from "../../images/basket_2.jpg"
import AboutImage3 from "../../images/HMS logo_clear_bg.png"

const AboutImages = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={AboutImage1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={AboutImage2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={AboutImage3}></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default AboutImages
