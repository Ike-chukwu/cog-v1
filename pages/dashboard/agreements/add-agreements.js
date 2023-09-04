import General from "@/components/AgreementStages/General"
import PropertyDetails from "@/components/AgreementStages/PropertyDetails"
import AgreementSummary from "@/components/AgreementStages/Summary"
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
  const [location, setLocation] = useState({
    state: "",
    LGA: "",
    ward: "",
  })
  const [premisesChecklist, setPremisesChecklist] = useState({
    livingRoom: "",
    kitchen: "",
    bedroom: "",
    officeSpace: "",
    garden: "",
    store: "",
    garage: "",
  })
  const [unitID, setUnitID] = useState("")
  const [unitFeatures, setUnitFeatures] = useState({
    sittingRooms: "",
    bedRooms: "",
    restRooms: "",
  })

  // Client Details
  const [clientType, setClientType] = useState("old")
  const [clientName, setClientName] = useState("")
  const [clientContact, setClientContact] = useState({
    address: "",
    number: "",
  })

  // Landlord Details
  const [landlordType, setLandlordType] = useState("old")
  const [landlordName, setLandlordName] = useState("")
  const [landlordContact, setLandlordContact] = useState({
    address: "",
    number: "",
  })

  // Guarantor Details
  const [guarantorName, setGuarantorName] = useState("")
  const [guarantorContact, setGuarantorContact] = useState({
    address: "",
    number: "",
  })

  // Property Manager Details
  const [propertyManagerType, setPropertyManagerType] = useState("")
  const [propertyManagerName, setPropertyManagerName] = useState("")
  const [propertyManagerContact, setPropertyManagerContact] = useState({
    address: "",
    number: "",
  })
  // Terms
  const [totalAmount, setTotalAmount] = useState("")
  const [RenewalFrequency, setRenewalFrequency] = useState("")
  const [isPet, setIsPet] = useState("")
  const [isSmoking, setIsSmoking] = useState("")
  const [isBusiness, setIsBusiness] = useState("")
  const [isSecurity, setIsSecurity] = useState("")
  const [noticeDays, setNoticeDays] = useState({
    acess: "",
    terminate: "",
  })
  const [isServiceCharge, setIsServiceCharge] = useState("")
  const [isResponsibeForService, setIsResponsibeForService] = useState("")

  const agreement = {
    clientName,
    clientType,
    clientContact,
    applicationType,
    propertyType,
    location,
    unitID,
    unitFeatures,
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
      subStages: ["Import/New", "Name", "Address"],
    },

    {
      stage: "Client Details",
      subStages: ["Import/New", "Name", "Address", "Contact"],
    },

    {
      stage: "Guarantor Details",
      subStages: ["Contact", "Name", "Address"],
    },

    {
      stage: "Property Manager Details",
      subStages: ["Type", "Contact", "Name", "Address"],
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
  const handleSubStageChange = (newSubStage) => {
    setSubStage(newSubStage);
  };
  
  const handleNextSubStage = () => {
    if (activeSubStage < stagesData[activeStage - 1].subStages.length) {
      setActiveSubStage((prevSubStage) => prevSubStage + 1);
    } else handleNextStage();
  };

  const handlePreviousSubStage = () => {
    if (activeSubStage > 1) {
      setActiveSubStage((prevSubStage) => prevSubStage - 1);
    } else handlePreviousStage();
  };

  const handleNextStage = () => {
    if (activeStage < stagesData.length - 1) {
      setActiveStage((prevStage) => prevStage + 1)
      setActiveSubStage(1)
    }
  }

  const handlePreviousStage = () => {
    if (activeStage > 0) {
      setActiveStage((prevStage) => prevStage - 1)
      setActiveSubStage(stagesData[activeStage - 1].subStages.length - 1)
    }
  }
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
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  applicationType={applicationType}
                  setApplicationType={setApplicationType}
                />
              )}
              {activeStage === 2 && (
                <PropertyDetails
                  subStage={activeSubStage}
                  unitID={unitID}
                  activeStage={activeStage} // Pass activeStage as a prop
                  activeSubStage={activeSubStage} // Pass activeSubStage as a prop
                  location={location}
                  propertyType={propertyType}
                  unitFeatures={unitFeatures}
                  setUnitID={setUnitID}
                  setLocation={setLocation}
                  setPropertyType={setPropertyType}
                  setUnitFeatures={setUnitFeatures}
                  setApplicationType={setApplicationType}
                  premisesChecklist={premisesChecklist}
                  setPremisesChecklist={setPremisesChecklist}
                  onSubStageChange={handleSubStageChange}
                />
              )}
              {activeStage === 3 && <></>}
              {activeStage === 4 && <></>}
              {activeStage === 5 && <></>}
              {activeStage === 6 && <AgreementSummary agreement={agreement} />}
            </Fragment>

            {activeStage !== 6 && (
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

          {activeStage === 6 && (
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
