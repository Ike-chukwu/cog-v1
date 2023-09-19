import { Fragment } from "react"

const GuarantorDetails = ({
  subStage,
  guarantorName,
  setGuarantorName,
  guarantorAddress,
  guarantorContact,
  setGuarantorAddress,
  setGuarantorContact,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <GuarantorName
            guarantorName={guarantorName}
            setGuarantorName={setGuarantorName}
          />
        )
      case 2:
        return (
          <GuarantorAddress
            guarantorAddress={guarantorAddress}
            setGuarantorAddress={setGuarantorAddress}
          />
        )
      case 3:
        return (
          <GuarantorContact
            guarantorContact={guarantorContact}
            setGuarantorContact={setGuarantorContact}
          />
        )
      default:
        return (
          <GuarantorName
            guarantorName={guarantorName}
            setGuarantorName={setGuarantorName}
          />
        )
    }
  }
  return getStage()
}

export default GuarantorDetails

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


const GuarantorName = ({ guarantorName, setGuarantorName }) => {
  return (
    <Wrapper
      header="Guarantor details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing guarantor data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Guarantorapos;s Name</p>
          <input
            type="text"
            name="guarantorName"
            value={guarantorName}
            placeholder="Enter guarantorapos;s name"
            onChange={(e) => setGuarantorName(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const GuarantorContact = ({ guarantorContact, setGuarantorContact }) => {
  return (
    <Wrapper
      header="Guarantor details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing guarantor data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Guarantorapos;s Phone number</p>
          <input
            type="text"
            name="guarantorContact"
            value={guarantorContact}
            placeholder="Enter guarantorapos;s phone number"
            onChange={(e) => setGuarantorContact(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const GuarantorAddress = ({ guarantorAddress, setGuarantorAddress }) => {
  return (
    <Wrapper
      header="Guarantor details"
      subHead="This is where you enter the type of property being sold or rented. You can select from existing guarantor data."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Guarantorapos;s Address</p>
          <input
            type="text"
            name="guarantorAddress"
            value={guarantorAddress}
            placeholder="Enter guarantorapos;s address"
            onChange={(e) => setGuarantorAddress(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
