import { useEffect, useState } from "react"

const VendorOneForm = ({
  number,
  register,
  unitData,
  setUnitData,
  setValue,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const [unitName, setUnitId] = useState(unitData[number - 1]?.unitName || "")
  const [unitAddress, setUnitAddress] = useState(
    unitData[number - 1]?.unitAdress || ""
  )
  const [unitContact, setUnitContact] = useState(
    unitData[number - 1]?.unitContact || ""
  )
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

  const handleUnitDataChange = () => {
    setUnitData((prevData) => {
      const updatedData = [...prevData]
      updatedData[number - 1] = {
        unitName,
        unitAddress,
        unitContact,
        selectedFeatures,
        featureAmounts,
      }
      return updatedData
    })
    // console.log(updatedData)
  }

  useEffect(() => {
    handleUnitDataChange()
  }, [unitName, unitAddress, unitContact, selectedFeatures, featureAmounts])

  const features = [
    "Repair and maintenance",
    "Electricity and power",
    "Cleaning and sanitation",
    "Security services",
    "Reception and front desk",
    "Water",
  ]

  return (
    <div className="bg-gray-100 px-4 py-2 rounded-md my-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Property manager/vendor details</h2>
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
            <label htmlFor="unitName" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id={`unit-${number}.unitName`}
              {...register(`unit-${number}.unitName`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="unitAddress" className="block font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id={`unit-${number}.unitAdress`}
              {...register(`unit-${number}.unitAddress`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="unitContact" className="block font-medium mb-1">
              Contact
            </label>
            <input
              type="text"
              id={`unit-${number}.unitContact`}
              {...register(`unit-${number}.unitContact`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Contact"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Function</h3>
            <p className="text-sm text-gray-500 mb-2">
              Select all property manager/vendor functions
            </p>
            <div className="grid grid-cols-1 gap-4">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VendorOneForm
