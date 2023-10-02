"use client"
import Image from "next/image"
import { useState } from "react"
import OfferHeading from "../../../../components/DashboardData/offers/OfferHeading"
import { prospects } from "../../../../data/placeholder"
import date from "../../../../public/assets/icons/date.png"
import deleteicon from "../../../../public/assets/icons/deleteicon.svg"
import editticon from "../../../../public/assets/icons/editticon.png"
import sort from "../../../../public/assets/icons/sort.svg"
import viewicon from "../../../../public/assets/icons/viewicon.svg"

const Index = () => {
  const [openStatus, setOpenStatus] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [tableFilter, setTableFilter] = useState({
    allOffers: true,
    rentals: false,
    forSale: false,
  })

  const handleAllOffer = () => {
    setTableFilter({
      allOffers: true,
      rentals: false,
      forSale: false,
    })
  }
  const handleRentals = () => {
    setTableFilter({
      allOffers: false,
      rentals: true,
      forSale: false,
    })
  }
  const handleForSale = () => {
    setTableFilter({
      allOffers: false,
      rentals: false,
      forSale: true,
    })
  }

  return (
    <div className="p-8 pt-16">
      <OfferHeading />
      <h2 className="font-bold font-inter text-lg md:text-[22px] text-grey-text mb-6 mt-4">
        All offers
      </h2>
      <div className="hidden md:block border-2 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="bg-text-green rounded-[45px] p-2 flex justify-between items-center w-fit">
            <button
              onClick={handleAllOffer}
              className={`font-semibold font-inter text-base text-white w-[149px] h-[50px] ${
                tableFilter.allOffers ? "bg-cog-color rounded-[30px]" : ""
              }`}
            >
              All offers
            </button>
            <button
              onClick={handleRentals}
              className={`font-semibold font-inter text-base text-white w-[149px] h-[50px] ${
                tableFilter.rentals ? "bg-cog-color rounded-[30px]" : ""
              }`}
            >
              Rentals
            </button>
            <button
              onClick={handleForSale}
              className={`font-semibold font-inter text-base text-white w-[149px] h-[50px] ${
                tableFilter.forSale ? "bg-cog-color rounded-[30px]" : ""
              }`}
            >
              For sale
            </button>
          </div>
          <div
            onClick={() => setOpenFilter((prev) => !prev)}
            className="flex justify-center items-center gap-2 border-2 border-[#009FE3] w-[136px] h-[54px] rounded-[30px] cursor-pointer"
          >
            <Image
              src={sort}
              width={30}
              height={29}
              alt="check icon"
              className="mr-2"
            />
            <p className="font-inter font-[600] text-base text-[#009FE3] ">
              Filter
            </p>
          </div>
        </div>
        {openFilter && (
          <div className="bg-white rounded-lg shadow-2xl flex flex-col gap-2 p-4 -mt-1 absolute right-8">
            <h2 className="font-[600] font-inter text-[32px] text[#55656F] mb-6">
              Filter
            </h2>
            <p className="font-[500] font-inter text-base text[#55656F] pb-2">
              Filter status
            </p>
            <div className="flex justify-start items-center gap-4 mb-8">
              <button className="font-semibold font-inter text-base h-[48px] pl-4 pr-4 active:bg-cog-color active:text-white active:border-0 text-grey-text border-grey-text border-2 rounded-[30px]">
                All
              </button>
              <button className="font-semibold font-inter text-base h-[48px] pl-4 pr-4 active:bg-cog-color active:text-white active:border-0 text-grey-text border-grey-text border-2 rounded-[30px]">
                Pending
              </button>
              <button className="font-semibold font-inter text-base h-[48px] pl-4 pr-4 active:bg-cog-color active:text-white active:border-0 text-grey-text border-grey-text border-2 rounded-[30px]">
                Accepted
              </button>
            </div>
            <p className="font-[500] font-euclid text-base text[#55656F] pb-2">
              Filter date
            </p>
            <div className="flex justify-start items-center gap-4 mb-6">
              <p className="font-[500] font-euclid text-sm text[#55656F]">
                From
              </p>
              <button className="flex justify-center items-center font-semibold font-inter text-base h-[48px] pl-4 pr-4 text-[#55656F] border-grey-text border-2 rounded-[30px]">
                <Image
                  src={date}
                  width={16}
                  height={16}
                  alt="check icon"
                  className="mr-2"
                />
                DD-MM-YYYY
              </button>
              <p className="font-[500] font-euclid text-sm text[#55656F]">To</p>
              <button className="flex justify-center items-center font-semibold font-inter text-base h-[48px] pl-4 pr-4 text-[#55656F] border-grey-text border-2 rounded-[30px]">
                <Image
                  src={date}
                  width={16}
                  height={16}
                  alt="check icon"
                  className="mr-2"
                />
                DD-MM-YYYY
              </button>
            </div>
            <button className="font-semibold font-euclid text-base w-4/5 md:w-[465px] h-[56px] bg-cog-color text-white rounded-[100px]">
              Apply filter
            </button>
          </div>
        )}
        <div className="w-full">
          <table className="w-full">
            <colgroup>
              <col className="w-fit" />
              <col className="w-fit" />
              <col className="w-fit" />
              <col className="w-fit" />
              <col className="w-fit" />
              <col className="w-fit" />
            </colgroup>
            <thead>
              <tr className="font-inter font-semibold text-lg h-[70px] p-8 flex justify-between items-center w-full text-left mb-4 mt-6">
                <th>
                  <button className="w-4 h-4 border-2 rounded mr-2"></button>{" "}
                  Prospect ID
                </th>
                <th>Date</th>
                <th>Client Name</th>
                <th>Property name</th>
                <th>Status </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="font-inter text-sm text-[#4F4F4F] text-left">
              {prospects.map((item, i) => (
                <tr
                  key={item.id}
                  className={`p-8 h-[70px] flex justify-between items-center w-full text-left ${
                    i % 2 === 0 ? "border-2" : "border-0"
                  }`}
                >
                  <td className="text-[#386A8B]">
                    <button className="w-4 h-4 border-2 rounded mr-2"></button>
                    {item.id}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.propertyName}</td>
                  <td>
                    <button
                      className={`text-white p-2 rounded-[10px] w-[85px] h-[34px] ${
                        item.status === "Pending"
                          ? "bg-[#FFA902]"
                          : "bg-[#049561]"
                      }`}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="flex flex-col gap-1 cursor-pointer">
                    <button className="w-1 h-1 bg-black"></button>{" "}
                    <button className="w-1 h-1 bg-black"></button>{" "}
                    <button className="w-1 h-1 bg-black"></button>
                  </td>
                  {openStatus && (
                    <td className="flex flex-col gap-3 bg-white rounded-lg shadow-xl p-2">
                      <div className="flex ">
                        <Image
                          src={editticon}
                          width={16}
                          height={16}
                          alt="check icon"
                          className="mr-2"
                        />
                        <p className="text-xs">Edit details</p>
                      </div>
                      <div className="flex ">
                        <Image
                          src={deleteicon}
                          width={16}
                          height={16}
                          alt="check icon"
                          className="mr-2"
                        />
                        <p className="text-xs">Delete prospect</p>
                      </div>
                      <div className="flex  ">
                        <Image
                          src={viewicon}
                          width={8}
                          height={8}
                          alt="check icon"
                          className="mr-3 ml-1"
                        />
                        <p className="text-xs">View details</p>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Index
