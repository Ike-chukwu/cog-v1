import { Fragment } from "react"

const ClientDetails = ({
  subStage,
  clientAddress,
  setClientAddress,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <ClientAddress
            clientAddress={clientAddress}
            setClientAddress={setClientAddress}
          />
        )
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

const ClientAddress = ({ clientAddress, setClientAddress }) => {
  return (
    <Wrapper
      header="Client details"
      subHead="Kindly select the client that you want to send an offer for.
      "
    >
      <div>
        <div>
          <ul className="list-disc ml-6">
            <li>
              <span>Choose from existing client data</span>
            </li>
          </ul>

          <select
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 ml-7 mt-4"
          >
            <option value="" className="pointer-events-none">
            Select client name 
            </option>
            
          </select>
        </div>
      </div>
    </Wrapper>
  )
}
