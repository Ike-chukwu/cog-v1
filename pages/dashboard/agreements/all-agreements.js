import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import Tabs from "@/components/Tabs"
import { offline, online, prospects } from "@/data/placeholder"
// import AllAgreements from "@/pages/temp/all-agreements"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"
import { FiBell } from "react-icons/fi"

const AllAgreements = () => {
  const [active, setActive] = useState(0)
  const tabs = ["All agreements", "Rental", "For sale"]

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <Dashboard>
      <section className="p-8">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Agreement</h2>
            <h3 className="text-xl font-semibold opacity-50 mt-4">
              All Agreement
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

            <button className="flex items-center gap-2 py-2 px-6 border border-primary text-primary rounded-full">
              <BsFilter />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-5 mt-10 font-bold">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
              />
              <span>Prospect ID</span>
            </div>
            <span>Date</span>
            <span>Client name</span>
            <span>Property name</span>

            <span>Status</span>
          </div>

          <div className="grid text-left mt-6">
            {prospects.map((prospect, i) => (
              <Agreement key={i} data={prospect} />
            ))}
          </div>
        </div>
      </section>
    </Dashboard>
  )
}

export default AllAgreements

const Agreement = ({ data }) => {
  const { id, date, name, propertyName, status } = data
  const [show, setShow] = useState(false)

  const type = () => {
    if (source === "Online") {
      return online
    } else return offline
  }
  const className = `w-full overflow-hidden text-ellipsis whitespace-nowrap`
  return (
    <div className="grid grid-cols-5 gap-4 items-center justify-between py-4">
      <div className="flex items-center text-primary">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
        />
        <span>{id}</span>
      </div>

      <span className={className}>{date}</span>

      <span className={className}>{name}</span>

      <span className={className}>{propertyName}</span>

      

      <div className="flex items-center justify-between">
        <span
          className={`border py-2 px-4 rounded-lg ${
            status === "Pending"
              ? "text-[#FFA902] border-[#FFA902] bg-[#FFA902] bg-opacity-30"
              : "text-[#049561] border-[#049561] bg-[#9FF1CA]"
          }`}
        >
          {status}
        </span>

        <Options type={type} show={show} setShow={setShow} />
      </div>
    </div>
  )
}
