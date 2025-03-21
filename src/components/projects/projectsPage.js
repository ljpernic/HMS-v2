import React from "react"
import CultureCampImage from "../../images/culture_camp.jpg"
import LangRevivalImage from "../../images/lang_revival.jpg"
import IndigenousArtsImage from "../../images/tanning.jpg"
import SelfDefenseImage from "../../images/self_defense.jpg"

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
              src={CultureCampImage}
              alt="HeroImage"
            ></img>
          </div>
          <div className="lg:w-1/2 sm:text-center lg:text-right flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Culture Camp
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              The preservation of our culture and its transmission to the future generations of our community is at the heart of Ho Minti Society's 
              mission. Each June, we gather tribal children aged 7-17 from across Louisiana and beyond to learn traditional practices, to 
              build community, and to have fun!
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              At the camp, children are introduced to community languages, regalia, and dances, in addition to native plant identification, 
              archery, fishing, Indigenous crafts, such as beadwork and leatherwork, and much more. Ho Minti Society's Culture Camp is just one 
              endeavor aimed at the preservation of Indigenous cultural practices among the Choctaw-Apache Tribe of Ebarb (and beyond), but in some 
              ways it is the most vital. If we don't educate each new generation, then all of those ways of knowing that are distinct and essential 
              to our community end with us. 
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Volunteers and donations are deeply welcome!  
            </p>            
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              {/* <div className="mt-3 sm:mt-0 sm:ml-3">
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
              </div> */}
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
              Ho Minti Society has launched a language revival project for the Indigenous pidgin language of Yamá, also known as Mobilian Trade 
              Language (MTL). It operated for centuries as a lingua franca among the Indigenous peoples of the Southeastern Woodlands, including Choctaw, Chickasaw, 
              Tunica, and Biloxi communities, among many others. The language is thought to have gone extinct by the 1950s, though elders could recall 
              fragments of it into the 1980s.
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              With help from language scholars, language revival practitioners of other language projects, and members of our community and others, we 
              have begun the challenging and exciting work of rebuilding the Yamá lexicon from sources scattered across the archives and hidden 
              within other reservoirs of knowledge. It is our goal to return Yamá to the vibrant place of intertribal communication between its former 
              speakers that it once held.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {/* <div className="mt-3 sm:mt-0 sm:ml-0">
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
              </div> */}
            </div>
          </div>
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={LangRevivalImage}
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
              src={IndigenousArtsImage}
              alt="HeroImage"
            ></img>
          </div>
          <div className="lg:w-1/2 sm:text-center lg:text-right flex-col justify-center">
            <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-3xl lg:text-3xl text-gradient bg-black">
              Traditional Indigenous Arts
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              We pride ourselves on keeping the practices of our ancestors alive, and we host regular meetings at which experts and novices 
              alike come together to practice beading, stitchwork, moccasin sewing, pine needle basketry, and other crafts. 
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
                Previous events have included Rhonda Gauthier teaching how to make traditional hominy from scratch and how to do applique 
                beadwork, Dr. Rebecca Riall teaching how to make brick stitch earrings, and Steve Jones leading hide tanning workshops, plus 
                many others on making dance regalia for our spring and fall powwows, making flat turkey fans, making shawls, and lots else.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              {/* <div className="mt-3 sm:mt-0 sm:ml-3">
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
              </div> */}
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
            Indigenous women and girls face a staggering onslaught of personal violence.
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              The murder rate of Indigenous women is three times higher than non-Native women. It is the third leading cause of death for Indigenous women; over 85 percent of them have experienced violence and historical trauma.
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              Our ancestors lived in matrilineal and matrilocal societies where women were respected as sacred life-givers. We must work diligently to end cultures of toxic misogyny and lateral violence.
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              We support the Missing and Murdered Indigenous Women (MMIW) movement. We also promote women’s self-defense training.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {/* <div className="mt-3 sm:mt-0 sm:ml-0">
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
              </div> */}
            </div>
          </div>
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={SelfDefenseImage}
              alt="HeroImage"
            ></img>
          </div>
        </div>
      </div>
    </div>

)
}

export default ProjectsPage
