import { useEffect, useState } from "react"

const UnitDetailsForm = ({
  number,
  register,
  unitData,
  setUnitData,
  setValue,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const [unitId, setUnitId] = useState(unitData[number - 1]?.unitId || "")
  const [amount, setAmount] = useState(unitData[number - 1]?.amount || "")
  const [selectedFeatures, setSelectedFeatures] = useState(
    unitData[number - 1]?.selectedFeatures || []
  )
  const [featureAmounts, setFeatureAmounts] = useState(
    unitData[number - 1]?.featureAmounts || {}
  )
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible)
  }

  const handleFeatureChange = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
      setFeatureAmounts({ ...featureAmounts, [feature]: "" })
      setValue(`unit-${number}.${feature}Amount`, featureAmounts[feature])
    } else {
      setSelectedFeatures([...selectedFeatures, feature])
      setValue(`unit-${number}.${feature}`, "yes")
    }
  }

  const handleFeatureAmountChange = (feature, value) => {
    setFeatureAmounts({ ...featureAmounts, [feature]: value })
    setValue(`unit-${number}.${feature}-Amount`, featureAmounts[feature])
  }

  const handleUnitDataChange = () => {
    setUnitData((prevData) => {
      const updatedData = [...prevData]
      updatedData[number - 1] = {
        unitId,
        amount,
        selectedFeatures,
        featureAmounts,
      }
      return updatedData
    })
  }

  useEffect(() => {
    handleUnitDataChange()
  }, [unitId, amount, selectedFeatures, featureAmounts])

  const features = [
    "WiFi",
    "Electricity",
    "Parking space",
    "Water",
    "Heating system",
    "Cleaning and sanitation",
    "Security services",
    "Access control",
    "Smart homes and IoT",
    "Fitness center",
    "Swimming pool",
    "Recreational center",
    "Lounge and bars",
    "Pets allowed",
    "Kitchen",
    "Garden",
    "Living room",
    "Bedroom",
    "Waste disposal",
    "Rest room",
  ]

  return (
    <div className="bg-gray-100 px-4 py-2 rounded-md my-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Unit {number} details</h2>
        <button onClick={toggleFormVisibility} className="focus:outline-none">
          <svg
            className={`w-6 h-6 text-gray-500 transition-transform ${
              isFormVisible ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isFormVisible && (
        <div>
          <div className="mb-4">
            <label htmlFor="unitId" className="block font-medium mb-1">
              Unit ID
            </label>
            <input
              type="text"
              id={`unit-${number}.unitId`}
              {...register(`unit-${number}.unitId`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name of unit"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-1">
              Amount
            </label>
            <input
              type="text"
              id={`unit-${number}.unitAmount`}
              {...register(`unit-${number}.unitAmount`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Amount"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Features</h3>
            <p className="text-sm text-gray-500 mb-2">
              Select all available features
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{feature}</span>
                  </label>
                  {["Kitchen", "Living room", "Bedroom", "Rest room"].includes(
                    feature
                  ) &&
                    selectedFeatures.includes(feature) && (
                      <input
                        type="text"
                        value={featureAmounts[feature] || ""}
                        onChange={(e) =>
                          handleFeatureAmountChange(feature, e.target.value)
                        }
                        className="ml-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[99px]"
                        placeholder="Amount"
                      />
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UnitDetailsForm
