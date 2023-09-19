import { Fragment } from "react"

const LandlordDetails = ({
  subStage,
  newImport,
  setNewImport,
  landlordName,
  setlandLordName,
  landlordAddress,
  landlordContact,
  setlandlordAddress,
  setLandlordContact,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <NewImport newImport={newImport} setNewImport={setNewImport} />
      case 2:
        return (
          <LandlordName
            landlordName={landlordName}
            setlandLordName={setlandLordName}
          />
        )
      case 3:
        return (
          <LandlordAddress
            landlordAddress={landlordAddress}
            setlandLordAddress={setlandlordAddress}
          />
        )
      case 4:
        return (
          <LandlordContact
            landlordContact={landlordContact}
            setLandlordContact={setLandlordContact}
          />
        )
      default:
        return <NewImport newImport={newImport} setNewImport={setNewImport} />
    }
  }
  return getStage()
}

export default LandlordDetails

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

const NewImport = ({ newImport, setNewImport }) => {
  return (
    <Wrapper
      header="Landlord details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing landlord data."
    >
      <div>
        <div className="mb-10">
          <input
            type="radio"
            name="type"
            value="existing"
            className="cursor-pointer mr-2"
            checked={newImport === "existing"}
            onChange={(e) => setNewImport(e.target.value)}
          />
          <span>Choose from existing landlord data</span>
        </div>

        <div className="mb-10">
          <input
            type="radio"
            name="type"
            value="new"
            className="cursor-pointer mr-2"
            checked={newImport === "new"}
            onChange={(e) => setNewImport(e.target.value)}
          />
          <span>New Landlord</span>
        </div>
      </div>
    </Wrapper>
  )
}

const LandlordName = ({ landlordName, setlandlordName }) => {
  return (
    <Wrapper
      header="Landlord details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing landlord data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Landlord's Name</p>
          <input
            type="text"
            name="landLordName"
            value={landlordName}
            placeholder="Enter landlord's name"
            onChange={(e) => setlandlordName(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const LandlordContact = ({ landlordContact, setlandlordContact }) => {
  return (
    <Wrapper
      header="Landlord details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing landlord data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Landlord's Phone number</p>
          <input
            type="text"
            name="landLordContact"
            value={landlordContact}
            placeholder="Enter landlord's phone number"
            onChange={(e) => setlandlordContact(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const LandlordAddress = ({ landlordAddress, setlandlordAddress }) => {
  return (
    <Wrapper
      header="Landlord details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing landlord data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Landlord's Address</p>
          <input
            type="text"
            name="landLordAddress"
            value={landlordAddress}
            placeholder="Enter landlord's address"
            onChange={(e) => setlandlordAddress(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
