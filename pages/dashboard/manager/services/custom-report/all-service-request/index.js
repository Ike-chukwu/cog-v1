import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import { AllCLients } from "@/components/Property/all-clients-array"
import PropertyFilterModal from "@/components/Property/property-filter-modal"
import { propertyViewAllTablePlaceholder } from "@/components/Property/property-view-all-table-placeholder"
import Tabs from "@/components/Tabs"
import ClientTable from "@/components/manager/clients/client-table"
import PieChartExample from "@/components/manager/clients/piechart"
import ChevronRight from "@/components/shared/ChevronRight"
import { forSale, properties, rental, services } from "@/data/properties"
import Link from "next/link"
// import AllProperties from "@/pages/temp/all-Properties"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"
import { FiBell } from "react-icons/fi"

const AllServices = () => {
  const [active, setActive] = useState(0)
  const tabs = ["All clients", "Off plan", "Full payment"]
  // const { mainid } = router.query

  const handleClick = (index) => {
    setActive(index)
  }

  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "",
        value: "View details",
        src: "/assets/icons/viewicon.svg",
      },
      {
        to: "",
        value: "Edit details",
        src: "/assets/icons/editicon.svg",
      },
      {
        to: "",
        value: "Delete detail",
        src: "/assets/icons/deleteicon.svg",
      },
    ]
  }

  const [filterModal, setFilterModal] = useState(false)
  const toggleFilterModal = () => {
    setFilterModal(!filterModal)
    console.log("yes")
  }

  return (
    <Dashboard>
      <section className="p-8">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Services</h2>
          </div>
        </header>
        <div className="flex gap-6 mt-3 ">
          <h1 className="font-medium text-[#4B4B4B] flex items-center gap-6">
            Servies - custom report
            <ChevronRight />
            <span className="font-bold">All services requests</span>
          </h1>
        </div>
      </section>

      <div className={`m-8 mb-0 p-8 border border-primary`}>
        <section className="grid place-items-center">
          <h1 className="font-bold text-3xl">Paulina Agnes</h1>
          <p className="text-[#B1B1B4] py-3">12345678</p>
          <p className="text-[#B1B1B4]">clientname@domain.com</p>
          <p className="text-[#B1B1B4]">
            12, Chatham street, London, LDN124, United Kingdom
          </p>

          <div className="flex gap-3 py-3">
            <p>All rents</p>
            <p className="text-[#B1B1B4]">DD/MM/YYYY</p>
          </div>
        </section>

        <>
          <div className="grid grid-cols-5 mt-10 font-bold px-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
              />
              <span>Invoice ID</span>
            </div>
            {/* <span>Date</span> */}
            <span>Date</span>
            <span>Client name</span>
            <span>Amount</span>

            <div className="flex items-center justify-between">
              <span>Status</span>
              <div />
            </div>
          </div>

          <div className="grid text-left mt-6">
            {services.map((property, i) => (
              <ServicesTable index={i} key={i} data={property} />
            ))}
          </div>
        </>
      </div>
    </Dashboard>
  )
}

export default AllServices

const ServicesTable = ({ data, index }) => {
  const { id, date, name, status, amount } = data
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "",
        value: "View details",
        src: "/assets/icons/viewicon.svg",
      },
      {
        to: "",
        value: "Edit details",
        src: "/assets/icons/editicon.svg",
      },
      {
        to: "",
        value: "Delete detail",
        src: "/assets/icons/deleteicon.svg",
      },
    ]
  }

  const className = `w-full overflow-hidden text-ellipsis whitespace-nowrap`
  return (
    <div
      className={
        "grid grid-cols-5 items-center justify-between py-6 px-4 " +
        (index == 0 || index == 2 || index == 4 || index == 6
          ? "border-[1px] border-[#d9d9d9]"
          : "null")
      }
    >
      <div className="flex items-center text-primary">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
        />
        <span className="text-[#54a4cc]">{id}</span>
      </div>

      {/* <span className={className}>{date}</span> */}

      <span className={className}>{date}</span>

      <span className={className}>{name}</span>

      <span className={className}>{amount}</span>

      <div className="flex items-center justify-between">
        <span
          className={`border py-2 px-4 rounded-lg w-max ${
            status == "Pending"
              ? "text-[#ffa902] border-[#ffa902] bg-[#ffe481] bg-opacity-30"
              : "text-[#049561] border-[#049561] bg-[#9FF1CA]"
          }`}
        >
          {status}
        </span>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}
