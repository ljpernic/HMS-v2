import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/culture_camp.jpg"
import HeroImage2 from "../../images/lang_revival.jpg"
import HeroImage3 from "../../images/basket.jpg"
import Image1 from "../../images/fishing.jpg"
import Image2 from "../../images/basket_2.jpg"
import Image3 from "../../images/stickball.jpg"

const FeatureImages = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureImages
