import { Fragment } from "react"

const Terms = ({
  subStage,
  setRentalAmount,
  rentalAmount,
  rentalFrequency,
  setRentalFrequency,
  selectedOptions,
  setSelectedOptions,
  terminateDays,
  setTerminateDays,
  accessDays,
  setAccessDays,
}) => {

  const toggleOption = (option, category) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = prevSelectedOptions.filter(
        (item) => !item.startsWith(category)
      )

      return [...updatedOptions, option]
    })
  }

  switch (subStage) {
    case 1:
      return (
        <RentalAmount
          setRentalAmount={setRentalAmount}
          setRentalFrequency={setRentalFrequency}
          rentalAmount={rentalAmount}
          rentalFrequency={rentalFrequency}
        />
      )
    case 2:
      return (
        <UseOfProperty
          selectedOptions={selectedOptions}
          toggleOption={toggleOption}
        />
      )
    case 3:
      return (
        <SecurityDeposit
          selectedOptions={selectedOptions}
          toggleOption={toggleOption}
        />
      )
    case 4:
      return (
        <Notice
          setTerminateDays={setTerminateDays}
          terminateDays={terminateDays}
          accessDays={accessDays}
          setAccessDays={setAccessDays}
        />
      )
    case 5:
      return (
        <Service
          selectedOptions={selectedOptions}
          toggleOption={toggleOption}
        />
      )
    case 6:
      return (
        <Improvements
          selectedOptions={selectedOptions}
          toggleOption={toggleOption}
        />
      )
    default:
      return (
        <RentalAmount
          setRentalAmount={setRentalAmount}
          setRentalFrequency={setRentalFrequency}
          rentalAmount={rentalAmount}
          rentalFrequency={rentalFrequency}
        />
      )
  }
}

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

const RentalAmount = ({
  setRentalAmount,
  rentalAmount,
  rentalFrequency,
  setRentalFrequency,
}) => {
  return (
    <Wrapper
      header="Rental amount"
      subHead="This is where you provide the legal, service level and financial terms of the property transaction."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Rental amount</p>
          <input
            type="text"
            name="rentalAmount"
            value={rentalAmount}
            placeholder="Enter rental amount"
            onChange={(e) => setRentalAmount(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">Rental frequency</p>
          <input
            type="text"
            name="rentalFrequency"
            value={rentalFrequency}
            placeholder="Enter rental frequency"
            onChange={(e) => setRentalFrequency(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const UseOfProperty = ({ selectedOptions = [], toggleOption }) => {
  return (
    <Wrapper
      header="Use of property"
      subHead="This is where you provide the legal, service level, and financial terms of the property transaction."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p>Are pets allowed?</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Pets-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Pets-Yes", "Pets")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Pets-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Pets-No", "Pets")}
            >
              No
            </div>
          </div>
        </li>
        <li>
          <p>Is smoking allowed?</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Smoking-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Smoking-Yes", "Smoking")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Smoking-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Smoking-No", "Smoking")}
            >
              No
            </div>
          </div>
        </li>
        <li>
          <p>Are home businesses allowed?</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Business-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Business-Yes", "Business")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Business-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Business-No", "Business")}
            >
              No
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

const SecurityDeposit = ({ selectedOptions = [], toggleOption }) => {
  return (
    <Wrapper
      header="Security deposit"
      subHead="This is where you provide the legal, service level, and financial terms of the property transaction."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p>Are deposits required?</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Deposits-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Deposits-Yes", "Deposits")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Deposits-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Deposits-No", "Deposits")}
            >
              No
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

const Notice = ({
  setTerminateDays,
  terminateDays,
  accessDays,
  setAccessDays,
}) => {
  return (
    <Wrapper
      header="Notices"
      subHead="This is where you provide the legal, service level, and financial terms of the property transaction."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p className="font-semibold opacity-70">
            Days notice to access premises
          </p>
          <input
            type="text"
            name="accessDays"
            value={accessDays}
            placeholder="Number of days"
            onChange={(e) => setAccessDays(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">
            Days notice to terminate entire agreement
          </p>
          <input
            type="text"
            name="terminateDays"
            value={terminateDays}
            placeholder="Number of days"
            onChange={(e) => setTerminateDays(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const Service = ({ selectedOptions = [], toggleOption }) => {
  return (
    <Wrapper
      header="Services"
      subHead="This is where you provide the legal, service level, and financial terms of the property transaction."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p>Responsibility for cost of services</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("CostOfServices-Owner")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("CostOfServices-Owner", "CostOfServices")}
            >
              Property owner/manager
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("CostOfServices-Tenant")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("CostOfServices-Tenant", "CostOfServices")}
            >
              Tenant
            </div>
          </div>
        </li>
        <li>
          <p>Service charges</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("ServiceCharges-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("ServiceCharges-Yes", "ServiceCharges")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("ServiceCharges-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("ServiceCharges-No", "ServiceCharges")}
            >
              No
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

const Improvements = ({ selectedOptions = [], toggleOption }) => {
  return (
    <Wrapper
      header="Improvement, repair and maintenance"
      subHead="This is where you provide the legal, service level, and financial terms of the property transaction."
    >
      <ul className="list-disc ml-6 mb-8 flex flex-col gap-6">
        <li>
          <p>Are improvements allowed on the property?</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Improvement-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Improvement-Yes", "Improvement")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("Improvement-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("Improvement-No", "Improvement")}
            >
              No
            </div>
          </div>
        </li>
        <li>
          <p>With landlord’s consent</p>
          <div className="flex">
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[6px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("LandlordConsent-Yes")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("LandlordConsent-Yes", "LandlordConsent")}
            >
              Yes
            </div>
            <div
              className={`cursor-pointer border border-[#B1B1B4] px-[8px] py-[5px] text-[12px] leading-[16px] ${
                selectedOptions.includes("LandlordConsent-No")
                  ? "bg-[#62909F] text-white"
                  : "bg-white text-[#B1B1B4]"
              }`}
              onClick={() => toggleOption("LandlordConsent-No", "LandlordConsent")}
            >
              No
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Terms
