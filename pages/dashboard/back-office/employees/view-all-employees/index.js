import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import PropertyFilterModal from "@/components/Property/property-filter-modal"
import Tabs from "@/components/Tabs"
import { allEmployeesData } from "@/data/properties"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"
import { FiBell } from "react-icons/fi"

const AllEmployees = () => {
  const [active, setActive] = useState(0)
  const tabs = ["All employees", "Active", "Inactive"]

  const handleClick = (index) => {
    setActive(index)
  }

  const [filterModal, setFilterModal] = useState(false)
  const toggleFilterModal = () => {
    setFilterModal(!filterModal)
  }

  return (
    <Dashboard>
      <section className="p-8">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Payments</h2>
            <h3 className="text-xl font-semibold opacity-50 mt-4">
              View all Payments
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

          <>
            <div className="grid grid-cols-5 mt-10 font-bold px-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
                />
                <span>Employee ID</span>
              </div>
              {/* <span>Date</span> */}
              <span>Employee name</span>
              <span>Department</span>
              <span>Income</span>

              <div className="flex items-center justify-between">
                <span>Status</span>
                <div />
              </div>
            </div>

            <div className="grid text-left mt-6">
              {allEmployeesData.map((property, i) => (
                <AllEmployeesData index={i} key={i} data={property} />
              ))}
            </div>
          </>
        </div>
      </section>
    </Dashboard>
  )
}

export default AllEmployees

const AllEmployeesData = ({ data, index }) => {
  const { id, department, name, status, income } = data
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "",
        value: "Edit property",
        src: "/assets/icons/editicon.svg",
      },
      {
        to: "",
        value: "Delete property",
        src: "/assets/icons/deleteicon.svg",
      },
      {
        to: "/dashboard/manager/property/all-properties/1",
        value: "View details",
        src: "/assets/icons/viewicon.svg",
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

      <span className={className}>{name}</span>
      <span className={className}>{department}</span>

      <span className={className}>{income}</span>

      <div className="flex items-center justify-between">
        <span
          className={`border py-2 px-4 rounded-lg w-max ${
            status == "Active"
              ? "text-[#049561] border-[#049561] bg-[#9FF1CA]"
              : "text-[#ba2d02] border-[#eabeb0] bg-[#eabeb0]"
          }`}
        >
          {status}
        </span>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}
