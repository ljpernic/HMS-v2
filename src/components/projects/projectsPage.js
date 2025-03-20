import React from "react"
import HeroImage from "../../images/culture_camp.jpg"
import HeroImage2 from "../../images/lang_revival.jpg"
import HeroImage3 from "../../images/HMS logo_clear_bg.png"

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
        <h2 class="mt-10 px-8 text-black text-4xl font-bold">
          Ongoing Projects
        </h2>
      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>
          <div className="lg:w-1/2 sm:text-center lg:text-right flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Culture Camp
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Culture camp
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-sky text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
                >
                  See more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 sm:text-center lg:text-left flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Language Revival
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              Language revival project.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-0">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-sky text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
                >
                  See more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage2}
              alt="HeroImage"
            ></img>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage3}
              alt="HeroImage"
            ></img>
          </div>
          <div className="lg:w-1/2 sm:text-center lg:text-right flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Traditional Indigenous Arts
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              We pride ourselves on keeping the practices of our ancestors alive, and we host regular meetings at which experts and novices 
              alike come together to practice beading, stitchwork, moccasin sewing, pine needle basketry, and other crafts. Check out our events 
              page for upcoming meetings!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-sky text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
                >
                  See more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 sm:text-center lg:text-left flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Self-defence
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              Self-defence
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-0">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-sky text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
                >
                  See more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage2}
              alt="HeroImage"
            ></img>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage3}
              alt="HeroImage"
            ></img>
          </div>
          <div className="lg:w-1/2 sm:text-center lg:text-right flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Other things
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Other things
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-sky text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
                >
                  See more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 sm:text-center lg:text-left flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Language Revival
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              Language revival project.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-0">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-sky text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-sky md:py-3 md:text-lg md:px-10"
                >
                  See more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage2}
              alt="HeroImage"
            ></img>
          </div>
        </div>
      </div>


    </div>

)
}

export default ProjectsPage
