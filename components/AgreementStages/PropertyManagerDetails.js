import { Fragment } from "react"

const PropertyManagerDetails = ({
  subStage,
  propertyManagerType,
  setPropertyManagerType,
  propertyManagerName,
  setPropertyManagerName,
  propertyManagerAddress,
  propertyManagerContact,
  setPropertyManagerAddress,
  setPropertyManagerContact,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <PropertyManagerType
            propertyManagerType={propertyManagerType}
            setPropertyManagerType={setPropertyManagerType}
          />
        )
      case 2:
        return (
          <PropertyManagerName
            propertyManagerName={propertyManagerName}
            setPropertyManagerName={setPropertyManagerName}
          />
        )
      case 3:
        return (
          <PropertyManagerAddress
            propertyManagerAddress={propertyManagerAddress}
            setPropertyManagerAddress={setPropertyManagerAddress}
          />
        )
      case 4:
        return (
          <PropertyManagerContact
            propertyManagerContact={propertyManagerContact}
            setPropertyManagerContact={setPropertyManagerContact}
          />
        )
      default:
        return (
          <PropertyManagerType
            propertyManagerType={propertyManagerType}
            setPropertyManagerType={setPropertyManagerType}
          />
        )
    }
  }
  return getStage()
}

export default PropertyManagerDetails

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

const PropertyManagerType = ({
  propertyManagerType,
  setPropertyManagerType,
}) => {
  return (
    <Wrapper
      header="Property Manager Type"
      subHead="This is where you select the type of agreement type you are having with this client. Typically, you would have a sale or rental agreement."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Property manager type</p>
          <select
            value={propertyManagerType}
            onChange={(e) => setPropertyManagerType(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          >
            <option value="" className="pointer-events-none">
              Select property manager type
            </option>
            <option value="Property rental">General management</option>
            <option value="Property purchase">
              Facility management and repairs
            </option>
            <option value="Property rental">Cleaning and sanitation</option>
            <option value="Property purchase">Security</option>
          </select>
        </li>
      </ul>
    </Wrapper>
  )
}

const PropertyManagerName = ({
  propertyManagerName,
  setPropertyManagerName,
}) => {
  return (
    <Wrapper
      header="Property manager details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing propertyManager data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Property managerapos;s name</p>
          <input
            type="text"
            name="propertyManagerName"
            value={propertyManagerName}
            placeholder="Enter property managerapos;s name"
            onChange={(e) => setPropertyManagerName(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const PropertyManagerContact = ({
  propertyManagerContact,
  setPropertyManagerContact,
}) => {
  return (
    <Wrapper
      header="Property manager details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing propertyManager data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">
            Property managerapos;s phone number
          </p>
          <input
            type="text"
            name="propertyManagerContact"
            value={propertyManagerContact}
            placeholder="Enter property managerapos;s phone number"
            onChange={(e) => setPropertyManagerContact(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const PropertyManagerAddress = ({
  propertyManagerAddress,
  setPropertyManagerAddress,
}) => {
  return (
    <Wrapper
      header="Property manager details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing propertyManager data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Property managerapos;s address</p>
          <input
            type="text"
            name="propertyManagerAddress"
            value={propertyManagerAddress}
            placeholder="Enter propertyManagerapos;s address"
            onChange={(e) => setPropertyManagerAddress(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
