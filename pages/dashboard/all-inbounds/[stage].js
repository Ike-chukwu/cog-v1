import Dashboard from "@/components/Layout/Dashboard"
import ProspectSummary from "@/components/ProspectStages/Summary"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FiBell } from "react-icons/fi"
import { Summary as AgreementSummary } from "../../temp/make-agreements"
import { Summary as OfferSummary } from "../../temp/make-offers"

const Index = () => {
  const router = useRouter()
  // use stage slice context to get the stage
  const { stage } = router.query

  return (
    <>
      {
        <Dashboard>
          {stage === "prospect" && <ProspectStage />}
          {stage === "offer" && <OfferStage />}
          {stage === "agreement" && <AgreementStage />}
          {stage === "payment" && <PaymentStage />}
        </Dashboard>
      }
    </>
  )
}

export default Index

const Wrapper = ({ header, subHead, children }) => {
  const router = useRouter()
  const { stage } = router.query

  const stagesData = [
    { stage: "Prospect stage", subStages: [] },
    { stage: "Offer stage", subStages: [] },
    { stage: "Agreement stage", subStages: [] },
    { stage: "Payment stage", subStages: [] },
  ]
  const contents = [
    {
      href: "offer",
      text: "Make offer",
      edit: "",
    },
    {
      href: "agreement",
      text: "Issue agreement",
      edit: "",
    },
    {
      href: "payment",
      text: "Request payment",
    },
    {
      href: "/dashboard/all-prospects",
      text: "pay",
    },
  ]
  const [activeStage, setActiveStage] = useState(1)
  const [content, setContent] = useState(contents[activeStage - 1])

  const getStage = () => {
    switch (stage) {
      case "prospect":
        setContent(contents[0])
        break
      case "offer":
        setActiveStage(2)
        setContent(contents[1])
        break
      case "agreement":
        setActiveStage(3)
        setContent(contents[2])
        break
      case "payment":
        setActiveStage(4)
        setContent(contents[3])
        break
      default:
        setActiveStage(1)
        setContent(contents[0])
        break
    }
  }

  useEffect(() => {
    getStage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  return (
    <div className="p-8">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold">{header}</h2>
          <h3 className="text-lg font-semibold opacity-50 mt-4">{subHead}</h3>
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

      <div className="flex gap-8 border border-primary py-8 px-4 mt-12 w-full">
        <ProgressBar stagesData={stagesData} activeStage={activeStage} />

        <div className="border grow p-6 max-h-[80vh] overflow-y-scroll">
          {children}
        </div>

        <div className="flex flex-col gap-4 w-1/6 ml-auto">
          <Link
            href={content.href}
            className="w-full p-2 bg-primary text-white border border-primary rounded-md text-center hover:bg-white hover:text-primary"
          >
            <button>{content.text}</button>
          </Link>
          <button className="p-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white">
            Edit
          </button>

          <button
            onClick={() => {
              router.push("/dashboard/prospects/all-prospects")
            }}
            className="p-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

const ProspectStage = () => {
  // Placeholder
  const prospect = {
    clientName: "",
    clientType: "",
    clientContact: "",
    gender: "",
    religion: "",
    tribe: "",
    occupation: "",
    ageRange: "",
    applicationType: "",
    propertyType: "",
    location: "",
    unitID: "",
    unitFeatures: "",
    signingDate: "",
  }
  return (
    <Wrapper header="Prospect" subHead="View offline application">
      <ProspectSummary prospect={prospect} />
    </Wrapper>
  )
}

const OfferStage = () => {
  return (
    <Wrapper header="Offer" subHead="View application">
      <OfferSummary showOpts={false} />
    </Wrapper>
  )
}

const AgreementStage = () => {
  return (
    <Wrapper header="Agreement" subHead="View application progress">
      <AgreementSummary show={false} />
    </Wrapper>
  )
}

const PaymentStage = () => {
  return <Wrapper header="Payment" subHead=""></Wrapper>
}
