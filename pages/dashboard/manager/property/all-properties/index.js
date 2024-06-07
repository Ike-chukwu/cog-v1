import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import PropertyFilterModal from "@/components/Property/property-filter-modal"
import { propertyViewAllTablePlaceholder } from "@/components/Property/property-view-all-table-placeholder"
import Tabs from "@/components/Tabs"
import { forSale, properties, rental } from "@/data/properties"
// import AllProperties from "@/pages/temp/all-Properties"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"
import { FiBell } from "react-icons/fi"

const AllProperties = () => {
  const [active, setActive] = useState(0)
  const tabs = ["All properties", "Rentals", "For sale"]

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
            <h3 className="text-xl font-semibold opacity-50 mt-4">
              View all Properties
            </h3>
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
                  <span>Propperty ID</span>
                </div>
                {/* <span>Date</span> */}
                <span>Property name</span>
                <span>Property type</span>
                <span>Occupant count</span>

                <div className="flex items-center justify-between">
                  <span>Amount</span>
                  <div />
                </div>
              </div>

              <div className="grid text-left mt-6">
                {properties.map((property, i) => (
                  <Properties index={i} key={i} data={property} />
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
                  <span>Propperty ID</span>
                </div>
                <span>Property name</span>
                <span>Tenant count</span>
                <span>Rental notices in 6 months</span>

                <div className="flex items-center justify-between">
                  <span>Vacancies</span>
                  <div />
                </div>
              </div>

              <div className="grid text-left mt-6">
                {propertyViewAllTablePlaceholder.map((property, i) => (
                  <Rental key={i} index={i} data={property} />
                ))}
              </div>
            </>
          )}
          {active == 2 && (
            <>
              <div className="grid grid-cols-5 mt-10 font-bold px-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
                  />
                  <span>Propperty ID</span>
                </div>
                <span>Property name</span>
                <span>Total units</span>
                <span>Available units</span>

                <div className="flex items-center justify-between">
                  <span>Sold units</span>
                  <div />
                </div>
              </div>

              <div className="grid text-left mt-6">
                {propertyViewAllTablePlaceholder.map((property, i) => (
                  <SecondRental key={i} index={i} data={property} />
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

const Properties = ({ data, index }) => {
  const { id, date, name, type, occupantCount, amount } = data
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "/dashboard/manager/property/all-properties/1",
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
        <span>{id}</span>
      </div>

      {/* <span className={className}>{date}</span> */}

      <span className={className}>{name}</span>

      <span
        className={`border py-2 px-4 rounded-lg w-max ${
          type !== "Rental"
            ? "text-[#BA2D02] border-[#BA2D02] bg-[#EABEB1] bg-opacity-30"
            : "text-[#049561] border-[#049561] bg-[#9FF1CA]"
        }`}
      >
        {type}
      </span>

      <span className={className}>{occupantCount}</span>

      <div className="flex items-center justify-between">
        <span className={className}>{amount}</span>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}

const Rental = ({ data, index }) => {
  const { clientId, type, name, tenantCount, rentalNoticesIn6mths, vacancies } =
    data
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "/dashboard/manager/property/rentals/1",
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

      <span className={className}>{tenantCount}</span>

      <span className={className}>{rentalNoticesIn6mths}</span>

      <div className="flex items-center justify-between">
        <span className={className}>{vacancies}</span>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}

const SecondRental = ({ data, index }) => {
  const { clientId, type, name, tenantCount, rentalNoticesIn6mths, vacancies } =
    data
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "/dashboard/manager/property/for-sale/1",
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

      <span className={className}>{tenantCount}</span>

      <span className={className}>{rentalNoticesIn6mths}</span>

      <div className="flex items-center justify-between">
        <span className={className}>{vacancies}</span>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}
