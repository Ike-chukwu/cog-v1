import { useEffect, useState } from "react"

const ServicesRecurringFilterModal = ({
  toggleFilterModal,
  setRecurringStatus,
  recurringStatus,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Once")
  const [selectedProperty, setSelectedProperty] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [applySettingsStatus, setApplySettingsStatus] = useState(false)

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
    setApplySettingsStatus(true)
    toggleFilterModal()
    console.log("Applying filter:", {
      selectedCategory,
      selectedProperty,
      startDate,
      endDate,
    })
    setRecurringStatus(true)
    localStorage.setItem("recurringStatus", `${selectedCategory}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-semibold mb-4 text-[#55656F] ">
        Recurring settings
      </h2>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2 text-[#55656F]">Frequency</p>
        <div className="flex flex-wrap gap-4">
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Once"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Once")}
          >
            Once
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Weekly"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Weekly")}
          >
            Weekly
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Biweekly"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Biweekly")}
          >
            Biweekly
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Monthly"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Bi-Monthly"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Bi-Monthly")}
          >
            Bi-Monthly
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Quarterly"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Quarterly")}
          >
            Quarterly
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Semi annually"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Semi annually")}
          >
            Semi annually
          </button>
          <button
            className={`rounded-full px-4 py-2 ${
              selectedCategory === "Annually"
                ? "bg-[#386A8B] text-white"
                : "border border-[#B1B1B4] text-[#B1B1B4]"
            }`}
            onClick={() => handleCategoryChange("Annually")}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="mb-8 mt-8">
        <p className="text-sm font-medium mb-2 text-[#55656F]">Time frame</p>
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
        Apply settings
      </button>
    </div>
  )
}

export default ServicesRecurringFilterModal
