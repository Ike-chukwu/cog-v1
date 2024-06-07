import Dashboard from "@/components/Layout/Dashboard"
import Tabs from "@/components/Tabs"
import Header from "@/components/UI/Dashboard/Header"
import FilterModal from "@/components/manager/clients/filter-modal"
import ViewAllTable from "@/components/manager/clients/view-all-table"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"

const ViewAllClients = () => {
  const [active, setActive] = useState(0)

  const tabs = ["All clients", "Tenants", "Buyers"]

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
              <FilterModal toggleFilterModal={toggleFilterModal} />
            </div>
          </div>
        )}

        <div className="grid  mt-10 font-bold">
          <ViewAllTable />
        </div>

        {/* <div className="grid text-left mt-6">
          {prospects.map((prospect, i) => (
            <Prospect key={i} data={prospect} />
          ))}
        </div> */}
      </div>
    </Dashboard>
  )
}

export default ViewAllClients
