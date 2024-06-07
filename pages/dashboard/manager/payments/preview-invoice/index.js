"use client"
import Dashboard from "@/components/Layout/Dashboard"
import PaymentModal from "@/components/manager/payments/PaymentOverlay"
import BookmarkIcon from "@/public/assets/icons/BookmarkIcon"
import DeleteIcon from "@/public/assets/icons/DeleteIcon"
import DownloadIcon from "@/public/assets/icons/DownloadIcon"
import Send from "@/public/assets/icons/Send"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function PreviewPage() {
  const [subtotal, setSubtotal] = useState(0)
  const [serviceData, setServiceData] = useState({})
  const [unitIds, setUnitIds] = useState([])
  const [detailsCollectedOnce, setDetailCollectedOnce] = useState({})
  const [vat, setVat] = useState(0)
  const [total, setTotal] = useState(0)
  const [clientName, setClientName] = useState("")
  const [propertyName, setPropertyName] = useState("")
  const [paymentsData, setPaymentsData] = useState("")

  const [filterModal, setFilterModal] = useState(false)
  const toggleFilterModal = () => {
    setFilterModal(!filterModal)
  }

  useEffect(() => {
    if (window !== undefined) {
      const workscopeDetaildata = JSON.parse(
        localStorage.getItem("list-of-workscope")
      )
      const paymentData = JSON.parse(
        localStorage.getItem("set-terms-payment-data")
      )
      const paymentExistingClientStatus = paymentData?.existingClient == "yes"
      if (paymentExistingClientStatus) {
        const existingClientsData = JSON.parse(
          localStorage.getItem("manager-new-client-data")
        )
        const actualClient = existingClientsData?.clientName
        setClientName(actualClient)
      } else {
        const newClientsName = paymentData?.clientName
        setClientName(newClientsName)
      }
      const paymentExistingPropertyStatus =
        paymentData?.existingProperty == "yes"
      if (paymentExistingPropertyStatus) {
        const existingPropertyData = JSON.parse(
          localStorage.getItem("manager-new-property-data")
        )
        const actualProperty = existingPropertyData?.propertyName
        setPropertyName(actualProperty)
        console.log(actualProperty)
        const existingUnitIds =
          existingPropertyData &&
          Object.keys(existingPropertyData)
            .filter((key) => key.startsWith("unit"))
            .map((key) => existingPropertyData[key]) // Assuming the input names start with 'Vendor'
        setUnitIds(existingUnitIds)
      } else {
        const newPropertyName = paymentData?.propertyName
        setPropertyName(newPropertyName)
        const newUnitIds =
          paymentData &&
          Object.keys(paymentData)
            .filter((key) => key.startsWith("unit"))
            .map((key) => paymentData[key])
        // const ids = newUnitIds?.map((unitItems) => unitItems.unitId)

        setUnitIds(newUnitIds)
      }
      const subtotalAmount = JSON.parse(localStorage.getItem("totalAmount"))
      setSubtotal(subtotalAmount)
      setVat(parseInt(subtotalAmount) * (5 / 100))
      setTotal(parseInt(subtotalAmount) + subtotalAmount * (5 / 100))

      const totalServiceObjData = JSON.parse(
        localStorage.getItem("add-service-data")
      )
      const singlyTakenDetails = JSON.parse(
        localStorage.getItem("details-collected-at-once")
      )
      setServiceData(totalServiceObjData)
      // setWorkscopeDetail(workscopeDetaildata)
      setDetailCollectedOnce(singlyTakenDetails)
      setPaymentsData(paymentData)
    }
  }, [])

  return (
    <Dashboard>
      <main className="p-10 relative">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Payments</h1>
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
          <h1 className="font-medium text-[#4B4B4B]">Add payment</h1>
        </div>

        <div className="flex flex-col gap-4 items-start right-[43px] top[10px] absolute">
          <button
            className="px-10 py-3 flex items-center justify-center gap-2 rounded-lg text-white bg-[#386A8B] w-[250px]"
            onClick={() => toggleFilterModal()}
          >
            <Send />
            <span>Send</span>
          </button>
          <button className="px-10 py-3 flex items-center justify-center gap-2 rounded-lg text-[#386A8B] border border-[#386A8B] bg-white w-[250px]">
            <DownloadIcon />
            <span>Download</span>
          </button>
          <button className="px-10 py-3 flex items-center gap-2 justify-center rounded-lg text-[#386A8B] border border-[#386A8B] bg-white w-[250px]">
            <BookmarkIcon />
            <span>Bookmark</span>
          </button>
          <button className="px-10 py-3 flex items-center gap-2 justify-center rounded-lg text-[#E42440] border border-[#E42440] bg-white w-[250px]">
            <DeleteIcon />
            <span>Cancel</span>
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
              <PaymentModal toggleFilterModal={toggleFilterModal} />
            </div>
          </div>
        )}

        <div className="border border-[#62909F] py-9 px-20 w-[600px] min-h-[700px] relative 2xl:mx-auto flex flex-col gap-5 items-start">
          <img
            alt=""
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
                Property name: {propertyName}
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500] ">
                UnitID:{" "}
                {unitIds?.map((element, index) => (
                  <span key={index}>{element.unitId}, </span>
                ))}
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500] ">
                Invoice date: {paymentsData?.dueDate}
              </p>
              <p className="mb-2 text-[10px] capitalize font-[500] ">
                Due date: {paymentsData?.dueDate}
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
              Client Name:{clientName}
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
                  PAYMENT TITLE:
                </p>
              </div>
              <p className="uppercase text-[10px] font-[600]">amount (nra):</p>
            </div>
            {/* {workscopeDetail?.map((deets, index) => ( */}
            <div className="flex justify-between p-2 border border-t-black  items-center ">
              <div className="flex gap-6">
                <p className="text-[10px] w-[20px] ">1</p>
                <p className="capitalize text-[10px] ">
                  {paymentsData?.paymentTitle}
                </p>
              </div>
              <p className="text-[10px]">₦{paymentsData?.amount}</p>
            </div>
            {/* ))} */}
          </div>
          <div className="flex w-full flex-col items-end justify-end">
            <div className="">
              <p className="mb-2 text-[10px]  capitalize">
                Subtotal:{" "}
                <span className="border-t-[0.1px] min-w-[40px] text-right inline-block border-t-black font-[400]">
                  {paymentsData?.amount}.00
                </span>
              </p>
            </div>
            <div className="">
              <p className="mb-2 text-[10px] ">
                VAT:{" "}
                <span className="border-t-[0.1px] min-w-[40px] text-right inline-block border-t-black font-[400]">
                  {parseInt(paymentsData?.amount) * (5 / 100)}.00
                </span>
              </p>
            </div>
            <div className="">
              <p className="mb-2 text-[10px]  capitalize">
                Total:{" "}
                <span className="border-t-[0.1px] min-w-[40px] text-right inline-block border-t-black font-[400]">
                  {parseInt(paymentsData?.amount) +
                    parseInt(paymentsData?.amount) * (5 / 100)}
                  .00
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
