import { Fragment } from "react"
import GuarantorAddress from "./guarantor-address"
import GuarantorContact from "./guarantor-contact"
import GuarantorName from "./guarantor-name"
import GuarantorType from "./guarantor-type"

const GuarantorDetails = ({
  subStage,
  totalAmount,
  renewalAmount,
  agreementPeriod,
  setTotalAmount,
  setRenewalAmount,
  setAgreementPeriod,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <GuarantorType />
      case 2:
        return <GuarantorName />
      case 3:
        return <GuarantorAddress />
      case 4:
        return <GuarantorContact />
      default:
        return (
          <TotalAmount
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
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

const TotalAmount = ({ totalAmount, setTotalAmount }) => {
  return (
    <Wrapper
      header="Total amount for new tenant or buyer"
      subHead="Input property purchase or rental amount for initial rent period (inclusive of onboarding, commission and agreement fees)"
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Enter amount</p>
          <input
            type="text"
            value={totalAmount}
            placeholder="Enter amount"
            onChange={(e) => setTotalAmount(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const RenewalAmount = ({ renewalAmount, setRenewalAmount }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setRenewalAmount((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper
      header="Renewal amount and recurring fees"
      subHead="Input property service charges and rental renewal amount. Recurring fees includes services like maintenance, waste disposal, electricity bills"
    >
      <ul className="list-disc mb-8 grid gap-8 ml-6">
        <li>
          <p className="font-semibold opacity-70">Subsequent rental amount</p>
          <input
            type="text"
            name="subsequent"
            onChange={handleInputChange}
            value={renewalAmount.subsequent}
            placeholder="Enter rental amount"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>

        <li>
          <p className="font-semibold opacity-70">Recurring fees</p>
          <input
            type="text"
            name="recurring"
            onChange={handleInputChange}
            value={renewalAmount.recurring}
            placeholder="Enter recurring fees"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const AgreementPeriod = ({ agreementPeriod, setAgreementPeriod }) => {
  return (
    <Wrapper
      header="Total agreement period"
      subHead="Input property agreement period"
    >
      <ul className="list-disc ml-6 mb-8">
        <li>
          <p className="font-semibold opacity-70">Duration</p>
          <input
            type="text"
            value={agreementPeriod}
            placeholder="Enter duration"
            onChange={(e) => setAgreementPeriod(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
