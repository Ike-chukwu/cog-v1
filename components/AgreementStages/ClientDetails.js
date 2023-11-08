import { Fragment } from "react"

const ClientDetails = ({
  subStage,
  newImport,
  setNewImport,
  clientName,
  setClientName,
  clientAddress,
  clientContact,
  setClientAddress,
  setClientContact,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <NewImport newImport={newImport} setNewImport={setNewImport} />
      case 2:
        return (
          <ClientName clientName={clientName} setClientName={setClientName} />
        )
      case 3:
        return (
          <ClientAddress
            clientAddress={clientAddress}
            setClientAddress={setClientAddress}
          />
        )
      case 4:
        return (
          <ClientContact
            clientContact={clientContact}
            setClientContact={setClientContact}
          />
        )
      default:
        return <NewImport newImport={newImport} setNewImport={setNewImport} />
    }
  }
  return getStage()
}

export default ClientDetails

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
      header="Client details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing client data."
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
          <span>Choose from existing client data</span>
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
          <span>New client</span>
        </div>
      </div>
    </Wrapper>
  )
}

const ClientName = ({ clientName, setClientName }) => {
  return (
    <Wrapper
      header="Client details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing client data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Client{"'"}s Name</p>
          <input
            type="text"
            name="clientName"
            value={clientName}
            placeholder="Enter client's name"
            onChange={(e) => setClientName(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const ClientContact = ({ clientContact, setClientContact }) => {
  return (
    <Wrapper
      header="Client details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing client data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Client{"'"}s Phone number</p>
          <input
            type="text"
            name="clientContact"
            value={clientContact}
            placeholder="Enter client's phone number"
            onChange={(e) => setClientContact(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const ClientAddress = ({ clientAddress, setClientAddress }) => {
  return (
    <Wrapper
      header="Client details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing client data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Client{"'"}s Address</p>
          <input
            type="text"
            name="clientAddress"
            value={clientAddress}
            placeholder="Enter client's address"
            onChange={(e) => setClientAddress(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
