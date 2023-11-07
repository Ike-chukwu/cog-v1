"use client"
import { useState } from "react"
import { OfferButton } from "./OfferButton"
import { OfferButton1 } from "./OfferButton"
import OfferModal from "./OfferModal"
import staricon from "../../../public/assets/icons/staricon.svg"
import downloadicon from "../../../public/assets/icons/downloadicon.svg"
import sendicon from "../../../public/assets/icons/sendicon.svg"
import backicon from "../../../public/assets/icons/backicon.svg"

const OfferSummary = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex flex-col gap-6 lg:gap-0 justify-center items-center md:flex-row lg:justify-end md:items-start p-6 lg:pt-0 lg:w-2/3">
      <div className="lg:w-2/3 border-2 mr-12 p-8 pb-0">
        <h1 className="font-semibold font-euclid text-cog-color text-3xl lg:text-[40px]">
          Offer summary
        </h1>
        <p className="font-[500] font-euclid text-lg lg:text-[24px] pb-4 mt-12">
          Client Information
        </p>
        <ul className="pr-16 lg:pr-4 p-4 pb-8 border-2 border-b-0 rounded-t-lg">
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Name:
            </p>
            <p className="font-euclid text-[20px]">Audrey Freeborn</p>
          </li>
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Client type
            </p>
            <p className="font-euclid text-[20px]">Individual</p>
          </li>
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Email address:
            </p>
            <p className="font-euclid text-[20px]">freeborn.audrey@gmail.com</p>
          </li>
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Phone number:
            </p>
            <p className="font-euclid text-[20px]">+2348122859871</p>
          </li>
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Gender
            </p>
            <p className="font-euclid text-[20px]">Female</p>
          </li>
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Religion
            </p>
            <p className="font-euclid text-[20px]">Christianity</p>
          </li>
          <li>
            <p className="font-[500] font-euclid text-base text-body-text">
              Tribe{" "}
            </p>
            <p className="font-euclid text-[20px]">Yoruba</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <OfferButton1
          onClick={() => setOpenModal(true)}
          src={sendicon}
          label="Send"
          btnClass="bg-primary text-white w-[116px] md:w-[164px] h-[32px]"
        />
        <OfferButton1
          src={downloadicon}
          label="Download"
          btnClass="bg-white text-primary border-2 border-primary w-[116px] md:w-[164px] h-[32px]"
        />
        <OfferButton1
          src={staricon}
          label="Bookmark"
          btnClass="bg-white text-primary border-2 border-primary w-[116px] md:w-[164px] h-[32px]"
        />
        <OfferButton1
          src={backicon}
          label="Back"
          btnClass="bg-white text-primary border-2 border-primary w-[116px] md:w-[164px] h-[32px]"
        />
      </div>
      {openModal && <OfferModal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default OfferSummary
