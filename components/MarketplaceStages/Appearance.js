import { Fragment, useRef } from "react"
import FileInput from "../UI/Dashboard/File"

const Appearance = ({
  subStage,
  logo,
  bgImage,
  colorSet,
  setLogo,
  setBgImage,
  setColorSet,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <BackgroundImage bgImage={bgImage} setBgImage={setBgImage} />
      case 2:
        return <Logo logo={logo} setLogo={setLogo} />
      case 3:
        return <ColorSet colorSet={colorSet} setColorSet={setColorSet} />
      default:
        return <ColorSet colorSet={colorSet} setColorSet={setColorSet} />
    }
  }
  return getStage()
}

export default Appearance

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

const BackgroundImage = ({ bgImage, setBgImage }) => {
  return (
    <Wrapper
      header="Background image"
      text="Enter your comapany background image"
    >
      <FileInput setFile={setBgImage} />
    </Wrapper>
  )
}

const Logo = ({ logo, setLogo }) => {
  return (
    <Wrapper header="Logo" text="Enter your comapany/brand logo">
      <FileInput setFile={setLogo} />
    </Wrapper>
  )
}

const ColorSet = ({ colorSet, setColorSet }) => {
  const hexRef = useRef(null)
  const colorRef = useRef(null)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setColorSet((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper header="Color set" text="Enter your brand color">
      <div className="grid gap-6 mb-10">
        <div>
          <div className="flex gap-3">
            <input type="radio" name="color" id="color" />
            <label htmlFor="color">Select color</label>
          </div>

          <Input
            type="color"
            value={colorSet.color}
            onChange={handleInputChange}
            className="w-1/2 h-8 ml-4 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex gap-3">
            <input type="radio" name="color" id="hex" />
            <label htmlFor="hex">Hex code</label>
          </div>

          <Input
            type="text"
            className="w-1/2 ml-4"
            value={colorSet.hexCode}
            onChange={handleInputChange}
            placeholder="Enter hex code"
          />
        </div>
      </div>
    </Wrapper>
  )
}
