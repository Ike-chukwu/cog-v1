import ClientDetails from "@/components/AgreementStages/ClientDetails"
import General from "@/components/AgreementStages/General"
import GuarantorDetails from "@/components/AgreementStages/GuarantorDetails"
import LandlordDetails from "@/components/AgreementStages/LandlordDetails"
import PropertyDetails from "@/components/AgreementStages/PropertyDetails"
import PropertyManagerDetails from "@/components/AgreementStages/PropertyManagerDetails"
import AgreementSummary from "@/components/AgreementStages/Summary"
import Terms from "@/components/AgreementStages/Terms"
import Dashboard from "@/components/Layout/Dashboard"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import { Fragment, useState } from "react"
import { FiBell } from "react-icons/fi"

const AddAgreement = () => {
  const [activeStage, setActiveStage] = useState(1)
  const [activeSubStage, setActiveSubStage] = useState(1)

  // General
  const [applicationType, setApplicationType] = useState("")
  const [propertyType, setPropertyType] = useState("")

  // Property Details
  const [propertyAddress, setPropertyAddress] = useState("")
  const [premisesChecklist, setPremisesChecklist] = useState({
    livingRoom: false,
    kitchen: false,
    bedroom: false,
    officeSpace: false,
    garden: false,
    store: false,
    garage: false,
  })
  const [unitID, setUnitID] = useState("")

  // Client Details
  // const [clientType, setClientType] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [clientContact, setClientContact] = useState("")

  // Landlord Details
  const [newImport, setNewImport] = useState("")
  const [landlordName, setLandlordName] = useState("")
  // const [landlordAddress, setLandlordAddress] = useState("")
  const [landlordContact, setLandlordContact] = useState("")

  // State for GuarantorDetails
  const [guarantorName, setGuarantorName] = useState("")
  const [guarantorAddress, setGuarantorAddress] = useState("")
  const [guarantorContact, setGuarantorContact] = useState("")

  // State for PropertyManagerDetails
  const [propertyManagerType, setPropertyManagerType] = useState("")
  const [propertyManagerName, setPropertyManagerName] = useState("")
  const [propertyManagerAddress, setPropertyManagerAddress] = useState("")
  const [propertyManagerContact, setPropertyManagerContact] = useState("")

  // State for Terms
  const [rentalAmount, setRentalAmount] = useState("")
  const [rentalFrequency, setRentalFrequency] = useState("")
  const [selectedOptions, setSelectedOptions] = useState([])
  const [terminateDays, setTerminateDays] = useState("")
  const [accessDays, setAccessDays] = useState("")

  const agreement = {
    applicationType,
    propertyType,
    propertyAddress,
    landlordName,
    landlordContact,
    landlordAddress,
    clientName,
    clientContact,
    clientAddress,
    guarantorName,
    guarantorAddress,
    guarantorContact,
    propertyManagerType,
    propertyManagerName,
    propertyManagerAddress,
    propertyManagerContact,
    premisesChecklist,
    rentalAmount,
    rentalFrequency,
    selectedOptions,
    accessDays,
    terminateDays,
  }

  const stagesData = [
    {
      stage: "General",
      subStages: ["Type of property", "Agreement Type"],
    },
    {
      stage: "Property Details",
      subStages: ["Property Address", "Premises physical specifics", "Unit ID"],
    },
    {
      stage: "Landlord Details",
      subStages: ["Import/New", "Name", "Address", "Contact"],
    },

    {
      stage: "Client Details",
      subStages: ["Import/New", "Name", "Address", "Contact"],
    },

    {
      stage: "Guarantor Details",
      subStages: ["Name", "Address", "Contact"],
    },

    {
      stage: "Property Manager Details",
      subStages: ["Type", "Name", "Address", "Contact"],
    },

    {
      stage: "Terms",
      subStages: [
        "Rental Amount",
        "Use of property",
        "Security Deposit",
        "Notices",
        "Services",
        "Improvements, repairs and maintenance",
      ],
    },

    {
      stage: "Summary",
      subStages: [],
    },
  ]

  const handleNextSubStage = () => {
    const totalSubStages = stagesData[activeStage - 1].subStages.length
    if (activeSubStage < totalSubStages) {
      setActiveSubStage((prevSubStage) => prevSubStage + 1)
    } else {
      handleNextStage()
    }
  }

  const handlePreviousSubStage = () => {
    if (activeSubStage > 1) {
      setActiveSubStage((prevSubStage) => prevSubStage - 1)
    } else {
      handlePreviousStage()
    }
  }

  const handleNextStage = () => {
    if (activeStage < stagesData.length) {
      setActiveStage((prevStage) => prevStage + 1)
      setActiveSubStage(1)
    }
  }

  const handlePreviousStage = () => {
    if (activeStage > 0) {
      setActiveStage((prevStage) => prevStage - 1)
      setActiveSubStage(1)
    }
  }

  // console.log("active stage:", activeStage, "active substage:", activeSubStage)
  return (
    <Dashboard>
      <section className="p-8 pt-10 grid min-h-full">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Agreements</h2>
            <h3 className="text-xl font-semibold opacity-50 mt-4">
              Add Agreement
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <FiBell className="text-2xl" />
            </button>

            <div>
              <div className="bg-[#E0CA04] ml-auto h-10 w-10 mb-2 rounded-full grid place-items-center font-semibold">
                PA
              </div>
              <small className="opacity-50">User ID: 12345678</small>
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="m-8 mb-0 p-8 border border-primary flex justify-between h-[80vh]">
          <ProgressBar
            stagesData={stagesData}
            activeStage={activeStage}
            activeSubStage={activeSubStage}
          />

          <div className="border flex flex-col border-primary w-3/5 p-6 mx-auto overflow-y-scroll">
            <Fragment>
              {activeStage === 1 && (
                <General
                  subStage={activeSubStage}
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  applicationType={applicationType}
                  setApplicationType={setApplicationType}
                />
              )}
              {activeStage === 2 && (
                <PropertyDetails
                  subStage={activeSubStage}
                  propertyAddress={propertyAddress}
                  setPropertyAddress={setPropertyAddress}
                  premisesChecklist={premisesChecklist}
                  setPremisesChecklist={setPremisesChecklist}
                  unitID={unitID}
                  setUnitID={setUnitID}
                />
              )}
              {activeStage === 3 && (
                <LandlordDetails
                  subStage={activeSubStage}
                  newImport={newImport}
                  setNewImport={setNewImport}
                  landlordName={landlordName}
                  setLandLordName={setLandlordName}
                  landlordContact={landlordContact}
                  setLandlordContact={setLandlordContact}
                />
              )}
              {activeStage === 4 && (
                <ClientDetails
                  subStage={activeSubStage}
                  newImport={newImport}
                  setNewImport={setNewImport}
                  clientName={clientName}
                  setClientName={setClientName}
                  clientAddress={clientAddress}
                  setClientAddress={setClientAddress}
                  clientContact={clientContact}
                  setClientContact={setClientContact}
                />
              )}
              {activeStage === 5 && (
                <GuarantorDetails
                  subStage={activeSubStage}
                  guarantorName={guarantorName}
                  setGuarantorName={setGuarantorName}
                  guarantorAddress={guarantorAddress}
                  guarantorContact={guarantorContact}
                  setGuarantorAddress={setGuarantorAddress}
                  setGuarantorContact={setGuarantorContact}
                />
              )}
              {activeStage === 6 && (
                <PropertyManagerDetails
                  subStage={activeSubStage}
                  propertyManagerType={propertyManagerType}
                  setPropertyManagerType={setPropertyManagerType}
                  propertyManagerName={propertyManagerName}
                  setPropertyManagerName={setPropertyManagerName}
                  propertyManagerAddress={propertyManagerAddress}
                  propertyManagerContact={propertyManagerContact}
                  setPropertyManagerAddress={setPropertyManagerAddress}
                  setPropertyManagerContact={setPropertyManagerContact}
                />
              )}
              {activeStage === 7 && (
                <Terms
                  subStage={activeSubStage}
                  setRentalAmount={setRentalAmount}
                  rentalAmount={rentalAmount}
                  rentalFrequency={rentalFrequency}
                  setRentalFrequency={setRentalFrequency}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  setTerminateDays={setTerminateDays}
                  terminateDays={terminateDays}
                  accessDays={accessDays}
                  setAccessDays={setAccessDays}
                />
              )}
              {activeStage === 8 && <AgreementSummary agreement={agreement} />}
            </Fragment>

            {activeStage !== 8 && (
              <div className="flex gap-3 items-end justify-end mt-auto">
                <button
                  disabled={activeStage === 1 && activeSubStage === 1}
                  onClick={handlePreviousSubStage}
                  className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-70"
                >
                  Back
                </button>
                <button
                  onClick={handleNextSubStage}
                  className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
                >
                  Continue
                </button>
              </div>
            )}
          </div>

          {activeStage === 8 && (
            <div className="flex flex-col gap-3">
              <button
                onClick={handleNextSubStage}
                className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
              >
                Submit
              </button>
              <button
                onClick={handlePreviousStage}
                className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </section>
    </Dashboard>
  )
}

export default AddAgreement
