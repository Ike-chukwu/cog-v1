import Dashboard from "@/components/Layout/Dashboard"
import Appearance from "@/components/MarketplaceStages/Appearance"
import EntityDetails from "@/components/MarketplaceStages/EntityDetails"
import FeaturedProduct from "@/components/MarketplaceStages/FeaturedProduct"
import { Button, ButtonOutline } from "@/components/UI/Dashboard/Button"
import Header from "@/components/UI/Dashboard/Header"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import { Fragment, useState } from "react"

const AddMarketplace = () => {
  let stagesData = [
    {
      stage: "Entity details",
      subStages: ["Business description/tagline", "Web link", "Social media"],
    },
    {
      stage: "Apperance",
      subStages: ["Background image", "Logo", "Color set"],
    },
    {
      stage: "Featured property",
      subStages: [
        "Name of portfolio property",
        "Background image of property",
        "Additional images",
        "Property type",
        "Address",
        "Location",
        "Amount",
        "Features",
        "Description",
        "Additional information",
      ],
    },
    {
      stage: "Avaliable listings",
      subStages: [],
    },
    {
      stage: "Summary",
      subStages: [],
    },
  ]

  const [activeStage, setActiveStage] = useState(3)
  const [activeSubStage, setActiveSubStage] = useState(10)

  setActiveStage((data) => {
    activeStage = data
  })
  setActiveStage((data) => {
    activeSubStage = data
  })

  // Entity details
  const [tagline, setTagline] = useState("")
  const [weblink, setWeblink] = useState("")
  const [socials, setSocials] = useState({
    twitter: "",
    facebook: "",
    instagram: "",
  })

  // Apperance
  const [logo, setLogo] = useState("")
  const [bgImage, setBgImage] = useState("")
  const [colorSet, setColorSet] = useState({
    color: "",
    hexCode: "",
  })

  // Featured property
  const [propertyName, setPropertyName] = useState("")
  const [propertyBg, setPropertyBg] = useState("")
  const [additionalImages, setAdditionalImages] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState({
    LGA: "",
    state: "",
    landmark: "",
  })
  const [amount, setAmout] = useState({
    totalFee: "",
    otherAmounts: "",
    serviceCharges: "",
  })
  const [features, setFeatures] = useState({
    wifi: false,
    utilities: false,
    parking: false,
    security: false,
    cleaning: false,
    pool: false,
    pets: false,
    fitness: false,
  })
  const [description, setDescription] = useState("")
  const [additionalInformation, setAdditionalInformation] = useState({
    bedRooms: "",
    restRooms: "",
    sittingRooms: "",
  })

  return (
    <Dashboard className="p-8 grid min-h-full">
      <Header
        header="Marketplace"
        subHeader="Set listings page"
        name="Anna Hunt"
      />

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
              <EntityDetails
                subStage={activeSubStage}
                tagline={tagline}
                weblink={weblink}
                socials={socials}
                setTagline={setTagline}
                setWeblink={setWeblink}
                setSocials={setSocials}
              />
            )}
            {activeStage === 2 && (
              <Appearance
                subStage={activeSubStage}
                logo={logo}
                bgImage={bgImage}
                colorSet={colorSet}
                setLogo={setLogo}
                setBgImage={setBgImage}
                setColorSet={setColorSet}
              />
            )}
            {activeStage === 3 && (
              <FeaturedProduct
                subStage={activeSubStage}
                amount={amount}
                address={address}
                location={location}
                features={features}
                propertyBg={propertyBg}
                description={description}
                propertyName={propertyName}
                propertyType={propertyType}
                additionalImages={additionalImages}
                additionalInformation={additionalInformation}
                setAmout={setAmout}
                setAddress={setAddress}
                setLocation={setLocation}
                setFeatures={setFeatures}
                setPropertyBg={setPropertyBg}
                setDescription={setDescription}
                setPropertyType={setPropertyType}
                setPropertyName={setPropertyName}
                setAdditionalImages={setAdditionalImages}
                setAdditionalInformation={setAdditionalInformation}
              />
            )}
          </Fragment>

          <div className="flex gap-3 items-end justify-end mt-auto">
            <ButtonOutline>Back</ButtonOutline>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default AddMarketplace
