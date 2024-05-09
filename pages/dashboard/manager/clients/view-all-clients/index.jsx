import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import Tabs from "@/components/Tabs"
import Header from "@/components/UI/Dashboard/Header"
import { offline, online, prospects } from "@/data/placeholder"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"

const ViewAllClients = () => {
  const [active, setActive] = useState(0)

  const tabs = ["All clients", "Tenants", "Buyers"]

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <Dashboard className="p-8">
      <Header
        header="Clients"
        subHeader="Clients - custom report"
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

          <button className="flex items-center gap-2 py-2 px-6 border border-primary text-primary rounded-full">
            <BsFilter />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-6 mt-10 font-bold">
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
          <span>Source</span>
          <span>Status</span>
        </div>

        <div className="grid text-left mt-6">
          {prospects.map((prospect, i) => (
            <Prospect key={i} data={prospect} />
          ))}
        </div>
      </div>
    </Dashboard>
  )
}

export default ViewAllClients

const Prospect = ({ data }) => {
  const { id, date, name, propertyName, source, status } = data
  const [show, setShow] = useState(false)

  const type = () => {
    if (source === "Online") {
      return online
    } else return offline
  }
  const className = `w-full overflow-hidden text-ellipsis whitespace-nowrap`
  return (
    <div className="grid grid-cols-6 gap-4 items-center justify-between py-4">
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

      <span className={className}>{source}</span>

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
