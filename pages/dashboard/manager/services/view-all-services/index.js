import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import Tabs from "@/components/Tabs"
import Header from "@/components/UI/Dashboard/Header"
import FilterModal from "@/components/manager/clients/filter-modal"
import ViewAllTable from "@/components/manager/clients/view-all-table"
import ServicesFilterModal from "@/components/manager/services/filter-modal"
import { offline, online } from "@/data/placeholder"
import { services } from "@/data/properties"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"

const ViewAllClients = () => {
  const [active, setActive] = useState(0)

  const tabs = ["All services", "Rentals", "Sold"]

  const handleClick = (index) => {
    setActive(index)
  }

  const [filterModal, setFilterModal] = useState(false)
  const toggleFilterModal = () => {
    setFilterModal(!filterModal)
  }

  return (
    <Dashboard className="p-8">
      <Header
        header="Services"
        subHeader="View all services"
        name="Anna Hunt"
      />

      <div className="border rounded-lg my-8 p-6">
        <div className="flex justify-between items-center gap-6">
          <Tabs
            tabs={tabs}
            active={active}
            click={handleClick}
            className="w-1/2"
          />

          <button
            onClick={() => toggleFilterModal()}
            className="flex items-center gap-2 py-2 px-6 border border-primary text-primary rounded-full"
          >
            <BsFilter />
            Filter
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
              <ServicesFilterModal />
            </div>
          </div>
        )}

        <>
          <div className="grid grid-cols-5 mt-10 font-bold px-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
              />
              <span>Service ID</span>
            </div>
            {/* <span>Date</span> */}
            <span>Date</span>
            <span>Property name</span>
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

export default ViewAllClients

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
