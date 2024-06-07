"use client"
import Dashboard from "@/components/Layout/Dashboard"
import ServicesRecurringFilterModal from "@/components/manager/services/recurring-modal"
import BackIcon from "@/public/assets/icons/BackIcon"
import DownloadIcon from "@/public/assets/icons/DownloadIcon"
import Send from "@/public/assets/icons/Send"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function PreviewInvoicePage() {
  const [subtotal, setSubtotal] = useState(0)
  const [vendorNames, setVendorNames] = useState([])
  const [serviceData, setServiceData] = useState({})
  const [workscopeDetail, setWorkscopeDetail] = useState([])
  const [detailsCollectedOnce, setDetailCollectedOnce] = useState({})
  const [vat, setVat] = useState(0)
  const [total, setTotal] = useState(0)
  const [filterModal, setFilterModal] = useState(false)
  const [recurringStatus, setRecurringStatus] = useState(false)
  const toggleFilterModal = () => {
    setFilterModal(!filterModal)
  }

  useEffect(() => {
    if (window !== undefined) {
      const workscopeDetaildata = JSON.parse(
        localStorage.getItem("list-of-workscope")
      )
      const subtotalAmount = JSON.parse(localStorage.getItem("totalAmount"))
      setSubtotal(subtotalAmount)
      setVat(parseInt(subtotalAmount) * (5 / 100))
      setTotal(parseInt(subtotalAmount) + subtotalAmount * (5 / 100))

      const namesOfVendors = JSON.parse(localStorage.getItem("vendor-list"))
      console.log(namesOfVendors)
      const totalServiceObjData = JSON.parse(
        localStorage.getItem("add-service-data")
      )
      const singlyTakenDetails = JSON.parse(
        localStorage.getItem("details-collected-at-once")
      )

      setVendorNames(namesOfVendors)
      setServiceData(totalServiceObjData)
      setWorkscopeDetail(workscopeDetaildata)
      setDetailCollectedOnce(singlyTakenDetails)
    }
  }, [])

  return (
    <Dashboard>
      <main className="p-10 relative">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Services</h1>
          </div>
          <div>
            <div className="flex items-center gap-x-12 mb-2">
              <figure>
                <Image
                  src="/assets/images/notification.svg"
                  alt="Notification"
                  width={24}
                  height={24}
                />
              </figure>
              <div className="h-[58px] w-[58px] rounded-[50%] bg-[#E0CA04] grid place-items-center">
                <span className="font-bold text-[20px]">PA</span>
              </div>
            </div>
            <p className="text-[#4B4B4B] text-[14px] text-right">
              User ID: 12345678
            </p>
          </div>
        </nav>

        <div className="flex gap-6 mb-9">
          <h1 className="font-medium text-[#4B4B4B]">Add service</h1>
        </div>

        <div className="flex flex-col gap-4 items-start right-[43px] top[10px] absolute">
          <button className="px-10 py-3 flex items-center justify-center gap-2 rounded-lg text-white bg-[#386A8B] w-[250px]">
            <Send />
            <span>Send Invoice</span>
          </button>
          <button
            className="px-10 py-3 flex items-center justify-center gap-2 rounded-lg text-[#386A8B] border border-[#386A8B] bg-white w-[250px]"
            // onClick={() => toggleFilterModal()}
          >
            <DownloadIcon />
            <span>Download</span>
          </button>
          <button className="px-10 py-3 flex items-center gap-2 justify-center rounded-lg text-[#386A8B] border border-[#386A8B] bg-white w-[250px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L10.163 5.60778L15 6.35121L11.5 9.93586L12.326 15L8 12.6078L3.674 15L4.5 9.93586L1 6.35121L5.837 5.60778L8 1Z"
                fill="white"
                stroke="#62909F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Bookmark</span>
          </button>
          <button className="px-10 py-3 flex items-center gap-2 justify-center rounded-lg text-[#386A8B] border border-[#386A8B] bg-white w-[250px]">
            <BackIcon />

            <span>Back</span>
          </button>
        </div>
        {filterModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-gray-900 opacity-50"
              onClick={toggleFilterModal}
            ></div>
            <div
              className="rounded-lg p-8 relative max-w-xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ServicesRecurringFilterModal
                toggleFilterModal={toggleFilterModal}
                recurringStatus={recurringStatus}
                setRecurringStatus={setRecurringStatus}
              />
            </div>
          </div>
        )}
        <div className="border border-[#62909F] py-9 px-20 w-[600px] min-h-[700px] relative 2xl:mx-auto flex flex-col gap-5 items-start">
          <img
            src="/assets/icons/blueVector.png"
            className="absolute top-0 left-0 right-0 w-full"
          />
          <img
            src="/assets/icons/grey.png"
            className="absolute top-[18px] right-0 w-[130px] h-[20px]"
          />

          <div className="flex w-full items-start justify-between pt-[3rem] mb-6">
            <Image
              src="/assets/icons/COG Logo.png"
              alt="Logo"
              width={80}
              height={80}
              priority={true}
            />
          </div>
          <div className="flex w-full items-start justify-between">
            <div className="">
              <p className="mb-2 text-[10px] capitalize  font-[500] ">
                Property name: {detailsCollectedOnce?.propertyName}
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500] ">
                UnitID: {detailsCollectedOnce?.unitId}
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500] ">
                Invoice date: {detailsCollectedOnce?.dueDate}
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500] ">
                Due date: {detailsCollectedOnce?.dueDate}
              </p>
            </div>
            <div className="">
              <p className="mb-2 text-[10px] text-right">User name:</p>
              <p className="mb-2 text-[10px] text-right">User address:</p>
              <p className="mb-2 text-[10px] text-right">User state:</p>
              <p className="mb-2 text-[10px] text-right">User country:</p>
            </div>
          </div>
          <div className="">
            <p className="mb-2 text-[10px] font-[500]">
              Vendor Name(s):{" "}
              {vendorNames?.map((vendor) => (
                <span className="ml-[0.5px]" key={vendor.value}>
                  {vendor.value},
                </span>
              ))}
            </p>
            {/* <p className="mb-2 text-[10px] capitalize font-[500]">
                Vendor address:
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500]">
                vendor state:
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500]">
                vendor country:
              </p> */}
          </div>

          <div className="w-full border border-[#62909F]">
            <div className="flex justify-between p-2  items-center bg-[#f2f2f2]">
              <div className="flex gap-6">
                <p className=" uppercase text-[10px] w-[20px]  font-[600]">
                  S/N
                </p>
                <p className=" uppercase text-[10px]  font-[600]">
                  WORK SCOPE/ITEM:
                </p>
              </div>
              <p className="uppercase text-[10px] font-[600]">amount (nra):</p>
            </div>
            {workscopeDetail?.map((deets, index) => (
              <div
                key={index}
                className="flex justify-between p-2 border border-t-black  items-center "
              >
                <div className="flex gap-6">
                  <p className="text-[10px] w-[20px] ">0{index + 1}</p>
                  <p className="capitalize text-[10px] ">{deets.wScope}</p>
                </div>
                <p className="text-[10px]">
                  {deets.currentCurrency} {deets.amountOfMoney}
                </p>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-end justify-end">
            <div className="">
              <p className="mb-2 text-[10px]  capitalize">
                Subtotal:{" "}
                <span className="border-t-[0.1px] min-w-[40px] text-right inline-block border-t-black font-[400]">
                  {subtotal}.00
                </span>
              </p>
            </div>
            <div className="">
              <p className="mb-2 text-[10px] ">
                VAT:{" "}
                <span className="border-t-[0.1px] min-w-[40px] text-right inline-block border-t-black font-[400]">
                  {vat}.00
                </span>
              </p>
            </div>
            <div className="">
              <p className="mb-2 text-[10px]  capitalize">
                Total:{" "}
                <span className="border-t-[0.1px] min-w-[40px] text-right inline-block border-t-black font-[400]">
                  {total}.00
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
