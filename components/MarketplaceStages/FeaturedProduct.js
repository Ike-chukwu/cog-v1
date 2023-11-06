import { Fragment } from "react"
import Checkbox from "../UI/Checkbox"
import FileInput from "../UI/Dashboard/File"
import Input from "../UI/Dashboard/Input"

const FeaturedProduct = ({
  subStage,
  amount,
  address,
  location,
  features,
  setAmout,
  setAddress,
  propertyBg,
  description,
  setLocation,
  setFeatures,
  propertyType,
  propertyName,
  setPropertyBg,
  setDescription,
  setPropertyName,
  setPropertyType,
  additionalImages,
  setAdditionalImages,
  additionalInformation,
  setAdditionalInformation,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <PropertyName
            propertyName={propertyName}
            setPropertyName={setPropertyName}
          />
        )
      case 2:
        return (
          <PropertyBg propertyBg={propertyBg} setPropertyBg={setPropertyBg} />
        )
      case 3:
        return (
          <AdditionalImages
            additionalImages={additionalImages}
            setAdditionalImages={setAdditionalImages}
          />
        )
      case 4:
        return (
          <PropertyType
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        )
      case 5:
        return <Address address={address} setAddress={setAddress} />
      case 6:
        return <Location location={location} setLocation={setLocation} />
      case 7:
        return <Amount amount={amount} setAmout={setAmout} />
      case 8:
        return <Features features={features} setFeatures={setFeatures} />
      case 9:
        return (
          <Description
            description={description}
            setDescription={setDescription}
          />
        )
      case 10:
        return (
          <AdditionalInformation
            additionalInformation={additionalInformation}
            setAdditionalInformation={setAdditionalInformation}
          />
        )
      default:
        return (
          <AdditionalInformation
            additionalInformation={additionalInformation}
            setAdditionalInformation={setAdditionalInformation}
          />
        )
    }
  }
  return getStage()
}

export default FeaturedProduct

const Wrapper = ({ children, header, text, show = true }) => {
  const name = "Biodun Odeleye & Co!"
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-xl font-semibold opacity-70">{header}</h3>
        <div className="grid gap-3 text-zinc-400 mt-3">
          <h4 className="text-lg font-medium text-black">Hello, {name} </h4>
          {show && (
            <p>
              Let’s set up your property listing page - Your property listing
              page is where clients view your listings.
            </p>
          )}

          <p>{text}</p>
        </div>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  )
}

const handleInputChange = (event, setData) => {
  const { name, value } = event.target

  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }))
}

const PropertyName = ({ propertyName, setPropertyName }) => {
  return (
    <Wrapper
      header="Name of portfolio property"
      text="Enter the name of a property you currently manage"
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Name of property</p>
          <Input
            type="text"
            className="w-4/5"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            placeholder="Enter name of property"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const PropertyBg = ({ propertyBg, setPropertyBg }) => {
  return (
    <Wrapper
      header="Background image of property"
      text="Upload the main image of the property to be listed"
    >
      <FileInput setFile={setPropertyBg} />
    </Wrapper>
  )
}

const AdditionalImages = ({ additionalImages, setAdditionalImages }) => {
  return (
    <Wrapper header="Additional images" text="Upload an image(s) to be listed">
      <FileInput setFile={setAdditionalImages} />
    </Wrapper>
  )
}

const PropertyType = ({ propertyType, setPropertyType }) => {
  const types = [
    "Warehouse/storage facility",
    "Whole home",
    "Office space",
    "Retail shop space",
    "Flat/apartment",
  ]
  return (
    <Wrapper
      show={false}
      header="Property Type"
      text="Select the type of property to be listed"
    >
      <div className="grid gap-8 mb-8">
        {types.map((type, i) => (
          <div key={i}>
            <input
              type="radio"
              name="type"
              value={type}
              className="cursor-pointer mr-2 accent-primary"
              checked={propertyType === type}
              onChange={(e) => setPropertyType(e.target.value)}
            />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Address = ({ address, setAddress }) => {
  return (
    <Wrapper header="Address" text="Enter the address of the property">
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Enter address</p>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            className="w-4/5"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const Location = ({ location, setLocation }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setLocation((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  return (
    <Wrapper
      show={false}
      header="Location"
      text="This is where you enter the location of the property being listed"
    >
      <ul className="grid gap-8 mb-12 list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">State</p>
          <Input
            type="text"
            name="state"
            className="w-4/5"
            value={location.state}
            placeholder="Enter state"
            onChange={handleInputChange}
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Local Government Area</p>
          <Input
            type="text"
            name="LGA"
            className="w-4/5"
            value={location.LGA}
            placeholder="Enter L.G.A"
            onChange={handleInputChange}
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Landmark/ward</p>
          <Input
            type="text"
            name="landmark"
            className="w-4/5"
            value={location.landmark}
            placeholder="Enter state"
            onChange={handleInputChange}
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const Amount = ({ amount, setAmout }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setAmout((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper
      show={false}
      header="Rental amount"
      text="This is where you enter the pricing of the property being listed"
    >
      <ul className="grid gap-8 mb-12 list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Total rental/purchase fee</p>
          <Input
            type="text"
            name="totalFee"
            className="w-4/5"
            value={amount.totalFee}
            placeholder="Enter state"
            onChange={handleInputChange}
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Service charges</p>
          <Input
            name="LGA"
            className="w-4/5"
            type="otherAmounts"
            value={amount.otherAmounts}
            placeholder="Enter L.G.A"
            onChange={handleInputChange}
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Other amounts</p>
          <Input
            type="text"
            className="w-4/5"
            name="serviceCharges"
            placeholder="Enter state"
            value={amount.serviceCharges}
            onChange={handleInputChange}
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const Features = ({ features, setFeatures }) => {
  return (
    <Wrapper
      show={false}
      header="Features"
      text="This is where you enter the features of the property being listed"
    >
      <div className="grid gap-8 mb-12">
        <div className="flex items-center">
          <Checkbox
            name="wifi"
            isChecked={features.wifi}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>WiFi</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="utilities"
            isChecked={features.utilities}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Utilities</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="parking"
            isChecked={features.parking}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Parking</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="security"
            isChecked={features.security}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Security</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="cleaning"
            isChecked={features.cleaning}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Cleaning</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="pool"
            isChecked={features.pool}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Swimming pool</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="pets"
            isChecked={features.pets}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Pets allowed</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="fitness"
            isChecked={features.fitness}
            onChange={(e) => handleInputChange(e, setFeatures)}
          />
          <span>Fitness centres</span>
        </div>
      </div>
    </Wrapper>
  )
}

const Description = ({ description, setDescription }) => {
  return (
    <Wrapper
      show={false}
      header="Description"
      text="Enter your property listing page overview"
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">
            Enter property tagline, description, mission
          </p>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter property tagline, description, mission"
            className="w-4/5 border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const AdditionalInformation = ({
  additionalInformation,
  setAdditionalInformation,
}) => {
  return (
    <Wrapper
      show={false}
      header="Additional information"
      text="Provide additional details about the property listing"
    >
      <ul className="grid gap-8 mb-12 list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Number of bedrooms</p>
          <Input
            type="text"
            name="bedRooms"
            className="w-4/5"
            value={additionalInformation.bedRooms}
            placeholder="Enter number of bedrooms"
            onChange={(e) => handleInputChange(e, setAdditionalInformation)}
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Number of restrooms</p>
          <Input
            type="text"
            name="restRooms"
            className="w-4/5"
            value={additionalInformation.restRooms}
            placeholder="Enter number of restrooms"
            onChange={(e) => handleInputChange(e, setAdditionalInformation)}
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Number of sitting rooms</p>
          <Input
            type="text"
            className="w-4/5"
            name="sittingRooms"
            placeholder="Enter number of sitting rooms"
            value={additionalInformation.sittingRooms}
            onChange={(e) => handleInputChange(e, setAdditionalInformation)}
          />
        </li>
      </ul>
    </Wrapper>
  )
}
