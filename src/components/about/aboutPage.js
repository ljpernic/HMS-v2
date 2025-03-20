import React from "react"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
        <h2 class="text-black text-4xl font-bold">
          About Us
        </h2>
        <h2 class="mt-10 text-black text-2xl font-bold">
          Why Ho Minti Society?
        </h2>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Ho Minti is a Choctaw phrase that means “y'all come.” We call for a coming back together and a return to traditional American Indian 
          ways of knowing and doing. The name also suggests a kind of in-gathering and renewal that we believe is necessary for our nation and 
          culture to both survive and prosper.
        </p>
      </div>        
      <div className="mt-10 px-8">
        <h2 class="text-black text-2xl font-bold">
          What are our goals?
        </h2>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          The purpose of the group is to promote CULTURAL AWARENESS, SERVICE, COMMUNITY ORGANIZING, and EDUCATION in a way that respects 
          traditional knowledge and the breadth of our history and heritage. We organize regular activities for tribal members and the 
          community at large.
        </p>
      </div>
      <div className="mt-10 px-8">
        <h2 class="text-black text-2xl font-bold">
          Where do we fit in?
        </h2>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          We acknowledge the Choctaw-Apache tribal council as the governmental entity for the tribal nation to which most of us belong. 
          However, Ho Minti Society is a Louisiana non-profit organization that operates completely independently from the tribal government. 
          Full membership is open to those eligible for enrollment in the tribe. We also encourage all American Indians and other supporters 
          living in the region to become associate members.
        </p>
      </div>      
      <div className="mt-10 px-8">
        <h2 className="text-black text-2xl font-bold">
          What do we believe?
        </h2>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          HO MINTI SOCIETY is committed to the following four pillars:
        </p>
        <ol className="list-decimal list-inside text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          <li>Respect for traditional knowledge and cultural vitalization.</li>
          <li>Reinvigorating cultural knowledge in everyday life through monthly cultural teachings and sharing of cultural knowledge as well as annual meetings.</li>
          <li>Supporting historical and heritage knowledge through historical and ethnological research and publications.</li>
          <li>Supporting traditional arts and crafts and artistic development.</li>
        </ol>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          If you agree with our mission and our vision, we encourage you to join us!
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/join"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
            >
              Join
            </a>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default WorkPage
