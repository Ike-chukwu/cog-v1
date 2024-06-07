import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import { AllCLients } from "@/components/Property/all-clients-array"
import PropertyFilterModal from "@/components/Property/property-filter-modal"
import { propertyViewAllTablePlaceholder } from "@/components/Property/property-view-all-table-placeholder"
import Tabs from "@/components/Tabs"
import { ViewAllTablePlaceholder } from "@/components/manager/clients/view-all-table-placeholder"
import ChevronRight from "@/components/shared/ChevronRight"
import { forSale, properties, rental } from "@/data/properties"
// import AllProperties from "@/pages/temp/all-Properties"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"
import { FiBell } from "react-icons/fi"

const AllProperties = () => {
  const [active, setActive] = useState(0)
  const tabs = ["All clients", "Notices"]

  const handleClick = (index) => {
    setActive(index)
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
            <h2 className="text-3xl font-semibold">Property</h2>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <FiBell className="text-2xl" />
            </button>

            <div>
              <div className="bg-[#E0CA04] ml-auto h-10 w-10 mb-2 rounded-full grid place-items-center font-semibold">
                PA
              </div>
              <small className="opacity-50">User ID: 12345678</small>
            </div>
          </div>
        </header>
        <div className="flex gap-6 ">
          <h1 className="font-medium text-[#4B4B4B] flex items-center gap-6">
            Property name
            <ChevronRight />
            <span className="font-bold">Tenant list</span>
          </h1>
          {/* <span>{'>'}</span> */}
        </div>

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
                <PropertyFilterModal toggleFilterModal={toggleFilterModal} />
              </div>
            </div>
          )}

          {active == 0 && (
            <>
              <div className="grid grid-cols-5 mt-10 font-bold px-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
                  />
                  <span>Client ID</span>
                </div>
                <span>Name</span>
                <span>Unit ID</span>
                <span>Due date</span>

                <div className="flex items-center justify-between">
                  <span>Amount</span>
                  <div />
                </div>
              </div>

              <div className="grid text-left mt-6">
                {AllCLients.map((property, i) => (
                  <ClientDetails key={i} index={i} data={property} />
                ))}
              </div>
            </>
          )}
          {active == 1 && (
            <>
              <div className="grid grid-cols-5 mt-10 font-bold px-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
                  />
                  <span>Client ID</span>
                </div>
                <span>Name</span>
                <span>Unit ID</span>
                <span>Due date</span>

                <div className="flex items-center justify-between">
                  <span>Amount</span>
                  <div />
                </div>
              </div>

              <div className="grid text-left mt-6">
                {AllCLients.map((property, i) => (
                  <ClientDetails key={i} index={i} data={property} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Dashboard>
  )
}

export default AllProperties

const ClientDetails = ({ data, index }) => {
  const { clientId, type, name, unitId, dueDate, amount } = data
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "/dashboard/manager/property/all-properties/1/1",
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
        "grid grid-cols-5 items-center justify-between py-8 px-4 " +
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
        <span>{clientId}</span>
      </div>

      {/* <span className={className}>{date}</span> */}

      <span className={className}>{name}</span>

      <span className={className}>{unitId}</span>

      <span className={className}>{dueDate}</span>

      <div className="flex items-center justify-between">
        <span className={className}>{amount}</span>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}
