import Dashboard from "@/components/Layout/Dashboard"
import Amount from "@/components/OfferStages/Amount"
import ClientDetails from "@/components/OfferStages/ClientDetails"
import DueDate from "@/components/OfferStages/DueDate"
import PropertyDetails from "@/components/OfferStages/PropertyDetails"
import OfferSummary from "@/components/OfferStages/Summary"
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
  const [clientType, setClientType] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [clientContact, setClientContact] = useState("")

  // Landlord Details
  const [newImport, setNewImport] = useState("")
  const [landlordName, setLandlordName] = useState("")
  const [landlordAddress, setLandlordAddress] = useState("")
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
      stage: "Property details",
    },
    {
      stage: "Client Details",
    },
    {
      stage: "Amount",
    },
    {
      stage: "Due date",
    },
    {
      stage: "Summary",
    },
  ]

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

  console.log("active stage:", activeStage, "active substage:", activeSubStage)
  return (
    <Dashboard>
      <section className="p-8 pt-10 grid min-h-full">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Offers</h2>
            <h3 className="text-xl font-semibold opacity-50 mt-4">
              Make offers
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
                <PropertyDetails
                  subStage={activeSubStage}
                  propertyAddress={propertyAddress}
                  setPropertyAddress={setPropertyAddress}
                />
              )}
              {activeStage === 2 && (
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
              {activeStage === 3 && <Amount subStage={activeSubStage} />}
              {activeStage === 4 && <DueDate subStage={activeSubStage} />}

              {activeStage === 5 && <OfferSummary agreement={agreement} />}
            </Fragment>

            {activeStage !== 5 && (
              <div className="flex gap-3 items-end justify-end mt-auto">
                <button
                  disabled={activeStage === 1 && activeSubStage === 1}
                  onClick={handlePreviousStage}
                  className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-70"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStage}
                  className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
                >
                  Continue
                </button>
              </div>
            )}
          </div>

          {activeStage === 5 && (
            <div className="flex flex-col gap-3">
              <button
                onClick={handleNextStage}
                className="bg-primary flex justify-center text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[14px] h-[14px] mr-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    className=""
                  />
                </svg>
                Send
              </button>
              <button
                onClick={handlePreviousStage}
                className="text-primary flex justify-center border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[14px] h-[14px] mr-2 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download
              </button>
              <button
                onClick={handlePreviousStage}
                className="text-primary flex justify-center border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[14px] h-[14px] mr-2 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
                Bookmark
              </button>
              <button
                onClick={handlePreviousStage}
                className="text-primary border flex justify-center border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[14px] h-[14px] mr-2 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                Back
              </button>
            </div>
          )}
        </div>
      </section>
    </Dashboard>
  )
}

export default AddAgreement
