import Dashboard from "@/components/Layout/Dashboard"
import Amount from "@/components/ProspectStages/Amount"
import Demography from "@/components/ProspectStages/Demography"
import SigningDate from "@/components/ProspectStages/SigningDate"
import ProspectSummary from "@/components/ProspectStages/Summary"
import Header from "@/components/UI/Dashboard/Header"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import General from "@/components/manager/offfers/stages/general"
import PropertyDetails from "@/components/manager/offfers/stages/property-details"
import { Fragment, useState } from "react"

const AddNewClient = () => {
  const [activeStage, setActiveStage] = useState(1)
  const [activeSubStage, setActiveSubStage] = useState(1)

  // Client Details
  const [clientType, setClientType] = useState("company")
  const [clientName, setClientName] = useState("")
  const [clientContact, setClientContact] = useState({
    email: "",
    number: "",
  })
  const [checklist, setChecklist] = useState({
    CAC: false,
    tax: false,
    creditReport: false,
    identity: false,
    creditReportTwo: false,
    confirmation: false,
    policeReport: false,
  })
  const [upload, setUpload] = useState("")

  // Property Details
  const [applicationType, setApplicationType] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState({
    state: "",
    LGA: "",
    ward: "",
  })
  const [unitID, setUnitID] = useState("")
  const [unitFeatures, setUnitFeatures] = useState({
    sittingRooms: "",
    bedRooms: "",
    restRooms: "",
  })

  // Demography
  const [gender, setGender] = useState("")
  const [religion, setReligion] = useState("")
  const [tribe, setTribe] = useState("")
  const [occupation, setOccupation] = useState({
    occupation: "",
    industryType: "",
  })
  const [ageRange, setAgeRange] = useState("")
  const [industryType, setIndustryType] = useState("")
  const [establishment, setEstablishment] = useState("")

  // Amount
  const [totalAmount, setTotalAmount] = useState("")
  const [renewalAmount, setRenewalAmount] = useState({
    subsequent: "",
    recurring: "",
  })
  const [agreementPeriod, setAgreementPeriod] = useState("")

  // Signing Date
  const [signingDate, setSigningDate] = useState("")

  const prospect = {
    clientName,
    clientType,
    clientContact,
    gender,
    religion,
    tribe,
    occupation,
    ageRange,
    applicationType,
    propertyType,
    location,
    unitID,
    unitFeatures,
    signingDate,
  }

  const stagesData = [
    {
      stage: "General",
      subStages: ["Types of property", "Application type"],
    },
    {
      stage: "Property Details",
      subStages: [
        "Property name",
        "Application type",
        "Unit details",
        "Payment style",
      ],
    },
    {
      stage: "Tenant details",
      subStages: [
        "Type",
        "Name",
        "Address",
        "Contact",
        "Verification Checklist",
        "Verification Upload",
      ],
    },
    {
      stage: "Guaranter details",
      subStages: ["Type", "Name", "Address", "Contact"],
    },
    {
      stage: "Summary",
      subStages: [],
    },
    {},
  ]

  // console.log({
  //   activeStage,
  //   activeSubStage,
  //   cjeck: stagesData[activeStage - 1].subStages,
  // })

  const handleNextSubStage = () => {
    if (activeSubStage < stagesData[activeStage - 1].subStages.length) {
      setActiveSubStage((prevSubStage) => prevSubStage + 1)
    } else handleNextStage()
  }

  const handlePreviousSubStage = () => {
    if (activeSubStage > 0) {
      setActiveSubStage((prevSubStage) => prevSubStage - 1)
    } else handlePreviousStage()
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
      setActiveSubStage(stagesData[activeStage - 1].subStages.length - 1)
    }
  }

  // const handleProspect = () => {}

  return (
    <Dashboard className="p-8 grid min-h-full max-w-full">
      <Header header="Clients" subHeader="Set terms" name="Anna Hunt" />
      {/* Main */}
      <div
        className={`m-8 mb-0 p-8 border border-primary flex justify-between h-[80vh]`}
      >
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
                upload={upload}
                checklist={checklist}
                clientType={clientType}
                clientName={clientName}
                clientContact={clientContact}
                setUpload={setUpload}
                setChecklist={setChecklist}
                setClientType={setClientType}
                setClientName={setClientName}
                setClientContact={setClientContact}
              />
            )}
            {activeStage === 2 && (
              <PropertyDetails
                subStage={activeSubStage}
                unitID={unitID}
                location={location}
                propertyType={propertyType}
                unitFeatures={unitFeatures}
                applicationType={applicationType}
                setUnitID={setUnitID}
                setLocation={setLocation}
                setPropertyType={setPropertyType}
                setUnitFeatures={setUnitFeatures}
                setApplicationType={setApplicationType}
              />
            )}
            {activeStage === 3 && (
              <Demography
                clientType={clientType}
                subStage={activeSubStage}
                tribe={tribe}
                gender={gender}
                religion={religion}
                ageRange={ageRange}
                occupation={occupation}
                industryType={industryType}
                establishment={establishment}
                setTribe={setTribe}
                setGender={setGender}
                setReligion={setReligion}
                setAgeRange={setAgeRange}
                setOccupation={setOccupation}
                setIndustryType={setIndustryType}
                setEstablishment={setEstablishment}
              />
            )}
            {activeStage === 4 && (
              <Amount
                subStage={activeSubStage}
                totalAmount={totalAmount}
                renewalAmount={renewalAmount}
                agreementPeriod={agreementPeriod}
                setTotalAmount={setTotalAmount}
                setRenewalAmount={setRenewalAmount}
                setAgreementPeriod={setAgreementPeriod}
              />
            )}
            {activeStage === 5 && (
              <SigningDate
                signingDate={signingDate}
                setSigningDate={setSigningDate}
              />
            )}
            {activeStage === 6 && <ProspectSummary prospect={prospect} />}
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
          <div className="ml-2 flex flex-col gap-3">
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
    </Dashboard>
  )
}

export default AddNewClient
