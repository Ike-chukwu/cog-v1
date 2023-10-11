import { Fragment } from "react"

const PropertyDetails = ({
  subStage,
  propertyAddress,
  setPropertyAddress,
  setPremisesChecklist,
  premisesChecklist,
  unitID,
  setUnitID,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <PropertyAddress
            propertyAddress={propertyAddress}
            setPropertyAddress={setPropertyAddress}
          />
        )
    }
  }
  return getStage()
}

export default PropertyDetails

const Wrapper = ({ children, header, subHead }) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-xl font-semibold opacity-70">{header}</h3>
        <p className="opacity-60 mt-4">{subHead}</p>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  )
}

const PropertyAddress = ({ propertyAddress, setPropertyAddress }) => {
  return (
    <Wrapper
      header="Property details"
      subHead="Kindly select the property that you want to send an offer for.
      "
    >
      <div>
        <div>
          <ul className="list-disc ml-6">
            <li>
              <span>Choose from existing property data</span>
            </li>
          </ul>

          <select
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 ml-7 mt-4"
          >
            <option value="" className="pointer-events-none">
            Select property name 
            </option>
            
          </select>
        </div>
      </div>
    </Wrapper>
  )
}
