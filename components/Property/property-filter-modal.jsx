import { useState } from "react"

const PropertyFilterModal = ({ toggleFilterModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProperty, setSelectedProperty] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handlePropertyChange = (property) => {
    setSelectedProperty(property)
  }

  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  const handleApplyFilter = () => {
    toggleFilterModal()

    // Apply filter logic here
    console.log("Applying filter:", {
      selectedCategory,
      selectedProperty,
      startDate,
      endDate,
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-semibold mb-4 text-[#55656F] ">Filter</h2>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2 text-[#55656F]">
          Filter category
        </p>
        <div className="flex space-x-4">
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "All"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Tenant"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Tenant")}
          >
            Rental
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Buyer"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Buyer")}
          >
            For sale
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2 text-[#55656F]">
          Filter property
        </p>
        <div className="relative">
          <select
            className="block w-[40%] px-4 py-2 pr-8 leading-tight bg-white border border-[#55656F] text-[#55656F] font-semibold rounded-full appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedProperty}
            onChange={(e) => handlePropertyChange(e.target.value)}
          >
            <option value="">Select property</option>
            <option value="property1">Property 1</option>
            <option value="property2">Property 2</option>
            <option value="property3">Property 3</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-500"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2 text-[#55656F]">Filter date</p>
        <div className="flex space-x-4">
          <div className="flex items-center gap-3">
            <label htmlFor="" className="text-[14px] text-[#55656F]">
              From
            </label>
            <input
              type="date"
              className="block w-full px-4 py-2 h-[48px] leading-tight bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="DD-MM-YYYY"
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="" className="text-[14px] text-[#55656F]">
              To
            </label>
            <input
              type="date"
              className="block w-full px-4 py-2 h-[48px] leading-tight bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="DD-MM-YYYY"
              value={endDate}
              onChange={(e) => handleEndDateChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        className="bg-[#386A8B]  text-white font-bold py-2 px-4 rounded-full w-full"
        onClick={handleApplyFilter}
      >
        Apply filter
      </button>
    </div>
  )
}

export default PropertyFilterModal
