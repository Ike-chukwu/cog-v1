import { Fragment } from "react"

const General = ({
  subStage,
  propertyType,
  setPropertyType,
  applicationType,
  setApplicationType,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
            <PropertyType
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        )
      case 2:
        return (
          <ApplicationType
            applicationType={applicationType}
            setApplicationType={setApplicationType}
          />
        )
      default:
        return (
            <PropertyType
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        )
    }
  }
  return getStage()
}

export default General

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

const PropertyType = ({ propertyType, setPropertyType }) => {
  return (
    <Wrapper
      header="Property type"
      subHead="This is where you enter the type of property being sold or rented."
    >
      <div>
        <div className="mb-10">
          <input
            type="radio"
            name="type"
            value="flat"
            className="cursor-pointer mr-2"
            checked={propertyType === "flat"}
            onChange={(e) => setPropertyType(e.target.value)}
          />
          <span>Flat/apartment</span>
        </div>

        <div className="mb-10">
          <input
            type="radio"
            name="type"
            value="warehouse"
            className="cursor-pointer mr-2"
            checked={propertyType === "warehouse"}
            onChange={(e) => setPropertyType(e.target.value)}
          />
          <span>Warehouse/storage facility</span>
        </div>

        <div>
          <input
            type="radio"
            name="type"
            value="home"
            className="cursor-pointer mr-2"
            checked={propertyType === "home"}
            onChange={(e) => setPropertyType(e.target.value)}
          />
          <span>Whole home</span>
        </div>
      </div>
    </Wrapper>
  )
}

const ApplicationType = ({ applicationType, setApplicationType }) => {
  return (
    <Wrapper
      header="Application Type"
      subHead="This is where you select the type of agreement type you are having with this client. Typically, you would have a sale or rental agreement."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Application type</p>
          <select
            value={applicationType}
            onChange={(e) => setApplicationType(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          >
            <option value="" className="pointer-events-none">
              Select application type
            </option>
            <option value="Property rental">Property rental</option>
            <option value="Property purchase">Property purchase</option>
          </select>
        </li>
      </ul>
    </Wrapper>
  )
}
