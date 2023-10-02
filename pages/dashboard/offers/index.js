"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import OfferActivities from "../../../components/DashboardData/offers/OfferActivities"
import { OfferButton } from "../../../components/DashboardData/offers/OfferButton"
import OfferCard from "../../../components/DashboardData/offers/OfferCard"
import OfferHeading from "../../../components/DashboardData/offers/OfferHeading"
import bluecard from "../../../public/assets/icons/bluecard.png"
import card from "../../../public/assets/icons/card.png"
import eye from "../../../public/assets/icons/eye.png"
import plusicon from "../../../public/assets/icons/plusicon.svg"

const Offers = () => {
  const [manageOffer, setManageOffer] = useState(false)
  const handleOffer = () => {
    setManageOffer((prev) => !prev)
  }

  return (
    <div className="flex flex-col p-8">
      <OfferHeading />
      <div className="self-end mt-8 mb-4">
        <OfferButton
          onClick={handleOffer}
          label="Manage offers"
          btnClass="bg-primary text-white hover:bg-white hover:border-2 hover:border-primary hover:text-primary"
        />
        {manageOffer && (
          <div className="border-2 p-4 z-999 absolute bg-white w-[230px]">
            <Link
              href="/dashboard/offers/make-offers"
              className="flex justify-start items-center gap-4 cursor-pointer"
            >
              <Image src={plusicon} width={24} height={24} alt="plus icon" />
              <p className="font-inter font-semibold text-base">Make offer</p>
            </Link>
            <Link
              href="/dashboard/offers/view-offers"
              className="flex justify-start items-center gap-4 mt-4 cursor-pointer"
            >
              <Image src={eye} width={24} height={24} alt="eye icon" />
              <p className="font-inter font-semibold text-base">
                View all offers
              </p>
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center">
        <OfferCard
          text1="Total offers"
          text2="15"
          text3="+ Increased by 30% since July 2022"
          src={card}
          cardClass="text-white"
        />
        <OfferCard
          text1="Accepted offers"
          text2="15"
          text3="+ Increased by 30% since July 2022"
          src={bluecard}
          cardClass="bg-white text-main-text border-2 border-primary"
          textColor="text-main-green"
        />
        <OfferCard
          text1="Pending offers"
          text2="15"
          text3="+ Increased by 30% since July 2022"
          src={bluecard}
          cardClass="bg-white text-main-text border-2 border-primary"
          textColor="text-default-red"
        />
      </div>
      <div className="self-end mb-8 mt-4">
        <OfferButton
          label="View custom report"
          btnClass="bg-white text-primary hover:bg-primary hover:border-0 border-2 border-primary hover:text-white"
        />
      </div>
      <OfferActivities />
    </div>
  )
}

export default Offers
