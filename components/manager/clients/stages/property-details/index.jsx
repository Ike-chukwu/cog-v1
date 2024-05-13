import Wrapper from "@/components/manager/wrapper"
import ApplicationType from "./application-type"
import PropertyDetailsSubStage from "./property-details"
import PropertyName from "./property-name"
import UnitDetails from "./unit-details"

const PropertyDetails = ({
  subStage,
  unitID,
  location,
  propertyType,
  unitFeatures,
  applicationType,
  setUnitID,
  setLocation,
  setPropertyType,
  setUnitFeatures,
  setApplicationType,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <PropertyDetailsSubStage />
      case 2:
        return (
          <PropertyName
            applicationType={applicationType}
            setApplicationType={setApplicationType}
          />
        )
      case 3:
        return (
          <ApplicationType
            applicationType={applicationType}
            setApplicationType={setApplicationType}
          />
        )
      case 4:
        return (
          <UnitDetails
            applicationType={applicationType}
            setApplicationType={setApplicationType}
          />
        )
      case 5:
        return <UnitID unitID={unitID} setUnitID={setUnitID} />
      // case 5:
      //   return (
      //     <UnitFeatures
      //       unitFeatures={unitFeatures}
      //       setUnitFeatures={setUnitFeatures}
      //     />
      //   )
      default:
        return (
          <ApplicationType
            applicationType={applicationType}
            setApplicationType={setApplicationType}
          />
        )
    }
  }
  return getStage()
}

export default PropertyDetails

const PropertyType = ({ propertyType, setPropertyType }) => {
  const inputs = [
    "Flat/appartment",
    "Warehouse/storage facility",
    "Single dwelling",
    "Office space",
    "Retail shop space",
  ]
  return (
    <Wrapper
      header="Property type"
      subHead="This is where you enter the details of the type of property being prospected"
    >
      <div className="flex flex-col gap-4 mb-8">
        {inputs.map((input, i) => (
          <div key={i}>
            <input
              name="type"
              type="radio"
              value={input}
              className="cursor-pointer mr-2"
              checked={propertyType === input}
              onChange={(e) => setPropertyType(e.target.value)}
            />
            <span>{input}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Location = ({ location, setLocation }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setLocation((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper
      header="Location"
      subHead="This is where you enter the location of the property being prospected"
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">State</p>
          <input
            type="text"
            name="state"
            value={location.state}
            placeholder="Enter state"
            onChange={handleInputChange}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Local Governmental Area</p>
          <input
            type="text"
            name="LGA"
            value={location.LGA}
            placeholder="Enter LGA"
            onChange={handleInputChange}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Landmark/ward</p>
          <input
            type="text"
            name="ward"
            value={location.ward}
            onChange={handleInputChange}
            placeholder="Enter landmark/ward"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const UnitID = ({ unitID, setUnitID }) => {
  return (
    <Wrapper
      header="Unit ID"
      subHead="This is where you enter the identity of the property unit being prospected. A 
      property can have sub-units within it. This is to identify the specific unit the prospect is interested in"
    >
      <ul className="list-disc ml-6 mb-8">
        <li>
          <p className="font-semibold opacity-70">Unit ID</p>
          <input
            type="text"
            value={unitID}
            placeholder="Enter unit ID"
            onChange={(e) => setUnitID(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const UnitFeatures = ({ unitFeatures, setUnitFeatures }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUnitFeatures((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  return (
    <Wrapper
      header="Unit features"
      subHead="This is where you enter the details of the property unit being prospected"
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Number of sitting rooms</p>
          <input
            type="text"
            name="sittingRooms"
            value={unitFeatures.sittingRooms}
            onChange={handleInputChange}
            placeholder="Enter number of sitting rooms"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Number of bedrooms</p>
          <input
            type="text"
            name="bedRooms"
            value={unitFeatures.bedRooms}
            onChange={handleInputChange}
            placeholder="Enter number of bedrooms"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Number of rest rooms</p>
          <input
            type="text"
            name="restRooms"
            value={unitFeatures.restRooms}
            onChange={handleInputChange}
            placeholder="Enter number of rest rooms"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
