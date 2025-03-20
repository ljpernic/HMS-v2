import React from "react"
import Button from "../Atoms/button"

const JoinPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
        <h2 class="text-black text-4xl font-bold">
          Join Us
        </h2>
        <h2 class="mt-10 text-black text-2xl font-bold">
          Become a member
        </h2>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          The vital work of Ho Minti Society depends on donations and member volunteers. We hope that you will join us and/or make a 
          financial contribution.
        </p>
      </div>        
      <div className="mt-10 px-8">
        <h2 class="text-black text-2xl font-bold">
          Full membership
        </h2>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          To qualify for full member, you must be eligible for enrollment in the Choctaw-Apache Tribe of Ebarb or be a person of 
          Choctaw-Apache descent and approved by the Ho Minti Society Board of Directors. You must also commit to volunteering for 
          three events per year or organizing and hosting one event per year, and pay annual dues of $25.
        </p>
      </div>
      <div className="mt-10 px-8">
        <h2 class="text-black text-2xl font-bold">
          Associate membership
        </h2>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Associate members support the mission of the organization, participate in the organization’s activities, and pay annual dues 
          of $25 per individual.
        </p>
      </div>      
      <div className="mt-10 px-8">
        <h2 className="text-black text-2xl font-bold">
          How to join
        </h2>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Joining is easy! Just submit the form below and then pay your dues through Paypal through the link beneath the form. If you'd 
          rather print it out, you can also find <a className="text-blue-600 opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg" href='https://drive.google.com/uc?export=download&id=1l2vawLWP3S3t7HBG_3Xydgs0aYJVNpRa'>the form at this link</a>. Just mail it with a check or money order to:
        </p>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          HO MINTI SOCIETY<br />
          886 Garcie Road<br />
          Zwolle, LA 71486<br />
        </p>
      </div>
      <div className="mt-10 px-8">
        <h2 className="text-black text-2xl font-bold">
          Already a member?
        </h2>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          After you've submitted the form to become a member, the final step is to pay your dues. Don't forget to follow the Paypal link below or send a check or money order to the address above to in order to maintain your membership!
        </p>
      </div>
      <div className="mt-10 px-8">      
        <h2 className="text-black text-2xl font-bold">
          Complete the form to join
        </h2>
        <iframe src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/7" allow="payment" style={{"border":"0","width":"100%", "minHeight":"100%", "overflow":"hidden"}} height="1110"></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js"></script>
      </div>
      <div className="mt-10 px-8">      
        <h2 className="text-black text-2xl font-bold">
          Pay your dues
        </h2>
        <p className="text-black opacity-95 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          After you've submitted this form to become a member, the final step is to pay your dues. Don't forget to follow the Paypal link below in order to complete your membership!
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-black text-base font-semibold rounded-md text-white hover:text-black bg-sky hover:bg-white md:py-3 md:text-lg md:px-10"
              href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=B7MCVYKL3LXLQ&fbclid=IwAR232cSidtgMzXZfz4LzA69Ce4a4Kskj8BUReX9ZWNnecTZDFZzScb1liYU"
              target="_blank"
              rel="noopener noreferrer"
            >
              PAY DUES
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinPage
