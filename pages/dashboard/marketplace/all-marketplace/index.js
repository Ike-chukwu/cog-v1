import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import Tabs from "@/components/Tabs"
import Checkbox from "@/components/UI/Checkbox"
import Header from "@/components/UI/Dashboard/Header"
import { marketplace, offline } from "@/data/placeholder"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"

const AllMarketplace = () => {
  const [active, setActive] = useState(0)
  const [check, setCheck] = useState(false)
  const [checkAll, setCheckAll] = useState(false)
  const tabs = ["Applicants", "Listings"]

  const handleClick = (index) => {
    setActive(index)
  }

  const selectAll = () => {
    setCheckAll(!check)
    setCheck(!check)
  }

  return (
    <Dashboard className="p-8">
      <Header
        header="Marketplace"
        subHeader="Listings manager"
        name="Anna Hunt"
      />

      <div className="border rounded-lg my-8 p-6">
        <div className="flex justify-between items-center gap-6">
          <Tabs
            tabs={tabs}
            active={active}
            click={handleClick}
            className="w-2/5"
          />

          <button className="flex items-center gap-2 py-2 px-6 border border-primary text-primary rounded-full">
            <BsFilter />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-6 mt-10 font-bold">
          <div className="flex items-center">
            <Checkbox isChecked={checkAll} onChange={selectAll} />
            <span>Application ID</span>
          </div>
          <span>Date</span>
          {active === 0 ? (
            <span>Application name</span>
          ) : (
            <span>Interest count</span>
          )}
          <span>Property name</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        <div className="grid text-left mt-6">
          {marketplace.map((mar, i) => (
            <Marketplace
              key={i}
              data={mar}
              active={active}
              isChecked={check}
              setChecked={setCheck}
            />
          ))}
        </div>
      </div>
    </Dashboard>
  )
}

export default AllMarketplace

const Marketplace = ({ data, active, isChecked, setChecked }) => {
  let { id, date, name, count, propertyName, amount, status } = data
  const [show, setShow] = useState(false)

  if (active === 1) {
    if (status === "Pending") {
      status = "Unavailable"
    }
  }
  const type = () => {
    return offline
  }

  const className = `w-full overflow-hidden text-ellipsis whitespace-nowrap`
  return (
    <div className="grid grid-cols-6 gap-4 items-center justify-between py-4">
      <div className="flex items-center text-primary">
        {/* Work in progress... */}
        <Checkbox
          isChecked={isChecked}
          onChange={() => setChecked(!isChecked)}
        />
        <span>{id}</span>
      </div>

      <span className={className}>{date}</span>

      {active === 0 ? (
        <span className={`text-primary ${className}`}>{name}</span>
      ) : (
        <span className={`text-center ${className}`}>{count}</span>
      )}

      <span className={className}>{propertyName}</span>

      <span className={className}>{amount}</span>

      <div className="flex items-center justify-between">
        <span
          className={`border py-2 px-4 rounded-lg ${
            status === "Pending" || status === "Unavailable"
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
