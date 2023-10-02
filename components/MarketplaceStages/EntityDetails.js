import { Fragment } from "react"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import Input from "../UI/Dashboard/Input"

const EntityDetails = ({
  subStage,
  tagline,
  weblink,
  socials,
  setTagline,
  setWeblink,
  setSocials,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <Tagline tagline={tagline} setTagline={setTagline} />
      case 2:
        return <Weblink weblink={weblink} setWeblink={setWeblink} />
      case 3:
        return <Socials socials={socials} setSocials={setSocials} />
      default:
        return <Socials socials={socials} setSocials={setSocials} />
    }
  }
  return getStage()
}

export default EntityDetails

const Wrapper = ({ children, header, text }) => {
  const name = "Biodun Odeleye & Co!"
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-xl font-semibold opacity-70">{header}</h3>
        <div className="grid gap-3 text-zinc-400 mt-3">
          <h4 className="text-lg font-medium text-black">Hello, {name} </h4>
          <p>
            Let’s set up your property listing page - Your property listing page
            is where clients view your listings.
          </p>

          <p>{text}</p>
        </div>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  )
}

const Tagline = ({ tagline, setTagline }) => {
  return (
    <Wrapper
      header="Business description/tagline"
      text="First, enter your business description/tagline:"
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Tagline</p>
          <Input
            type="email"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Enter business description/tagline"
            className="w-4/5"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const Weblink = ({ weblink, setWeblink }) => {
  return (
    <Wrapper header="Web link" text="Enter your online web link">
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Web link</p>
          <Input
            type="link"
            value={weblink}
            onChange={(e) => setWeblink(e.target.value)}
            placeholder="cog.properties/"
            className="w-4/5"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const Socials = ({ socials, setSocials }) => {
  const inputs = [
    {
      Icon: FiTwitter,
      value: socials.twitter,
      placeholder: "Twitter URL",
    },
    {
      Icon: FiInstagram,
      value: socials.instagram,
      placeholder: "Instagram URL",
    },
    {
      Icon: FiFacebook,
      value: socials.facebook,
      placeholder: "Facebook URL",
    },
  ]

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setSocials((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper
      header="Social media"
      text="Enter your company/brand social media details"
    >
      <ul className="grid gap-8 list-disc ml-6 mb-10">
        {inputs.map(({ Icon, placeholder, value }, i) => (
          <li key={i} className="flex items-center">
            <div className="p-2 h-full border border-r-0 border-primary grid place-items-center">
              <Icon className="text-primary" />
            </div>
            <Input
              type="text"
              className="w-4/5 mt-0"
              value={value}
              placeholder={placeholder}
              onChange={handleInputChange}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
