import React, { Fragment, useState } from "react"

const Demography = ({
  subStage,
  clientType,
  tribe,
  gender,
  religion,
  ageRange,
  occupation,
  industryType,
  establishment,
  setTribe,
  setGender,
  setReligion,
  setAgeRange,
  setOccupation,
  setIndustryType,
  setEstablishment,
}) => {
  const getStageOne = () => {
    switch (subStage) {
      case 1:
        return <Gender gender={gender} setGender={setGender} />
      case 2:
        return <Religion religion={religion} setReligion={setReligion} />
      case 3:
        return <Tribe tribe={tribe} setTribe={setTribe} />
      case 4:
        return (
          <Occupation occupation={occupation} setOccupation={setOccupation} />
        )
      case 5:
        return <AgeRange ageRange={ageRange} setAgeRange={setAgeRange} />
      default:
        return <Gender gender={gender} setGender={setGender} />
    }
  }
  const getStageTwo = () => {
    switch (subStage) {
      case 1:
        return (
          <IndustryType
            industryType={industryType}
            setIndustryType={setIndustryType}
          />
        )
      case 2:
        return (
          <YearOfEstablishment
            establishment={establishment}
            setEstablishment={setEstablishment}
          />
        )
      default:
        return (
          <IndustryType
            industryType={industryType}
            setIndustryType={setIndustryType}
          />
        )
    }
  }

  return (
    <div>{clientType === "induvidual" ? getStageOne() : getStageTwo()}</div>
  )
}

export default Demography

const Wrapper = ({ children, subHead }) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-xl font-semibold opacity-70">Demography</h3>
        <p className="opacity-60 mt-4">{subHead}</p>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  )
}

const Gender = ({ gender, setGender }) => {
  const genders = ["Male", "Female"]
  return (
    <Wrapper subHead="Select the client’s gender">
      <div className="grid gap-6 mb-6">
        {genders.map((g, i) => (
          <div key={i}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={gender === g}
              className="cursor-pointer mr-2"
              onChange={(e) => setGender(e.target.value)}
            />
            <span>{g}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Religion = ({ religion, setReligion }) => {
  const religions = [
    "Christianity",
    "Islam",
    "African traditionalist",
    "Prefer not to disclose",
  ]
  return (
    <Wrapper subHead="Kindly select the religious background of the individual prospect. This field is optional">
      <div className="grid gap-6 mb-6">
        {religions.map((r, i) => (
          <div key={i}>
            <input
              type="radio"
              name="religion"
              value={r}
              checked={religion === r}
              className="cursor-pointer mr-2"
              onChange={(e) => setReligion(e.target.value)}
            />
            <span>{r}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Tribe = ({ tribe, setTribe }) => {
  const [checked, setChecked] = useState(false)
  const tribes = ["Yoruba", "Fulani", "Hausa", "Igbo", "Tiv", "Urhobo/Itsekiri"]
  return (
    <Wrapper subHead="Kindly select the ethnic background of the individual prospect. This field is optional">
      <div className="grid gap-6 mb-6">
        {tribes.map((t, i) => (
          <div key={i}>
            <input
              type="radio"
              name="tribe"
              value={t}
              checked={tribe === t}
              className="cursor-pointer mr-2"
              onChange={(e) => setTribe(e.target.value)}
            />
            <span>{t}</span>
          </div>
        ))}

        <div className="flex items-start">
          <input
            value={checked}
            type="radio"
            name="tribe"
            onChange={(e) => setChecked(e.target.checked)}
            className="group cursor-pointer mr-2"
          />

          <div>
            <span>Other</span>
            {checked && (
              <input
                type="text"
                placeholder="Enter other tribe"
                className="block border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-2"
                onChange={(e) => setTribe(e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Occupation = ({ occupation, setOccupation }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setOccupation((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper subHead="Kindly enter the professional background of the individual prospect. This field is optional">
      <ul className="list-disc ml-6 mb-8 grid gap-8">
        <li>
          <p className="font-semibold opacity-70">Occupation</p>
          <input
            type="text"
            name="occupation"
            placeholder="Enter occupation"
            value={occupation.occupation}
            onChange={handleInputChange}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>

        <li>
          <p className="font-semibold opacity-70">Industry type</p>
          <input
            type="text"
            name="industryType"
            onChange={handleInputChange}
            value={occupation.industryType}
            placeholder="Enter industry type"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const AgeRange = ({ ageRange, setAgeRange }) => {
  const ranges = [
    "18-23",
    "24-29",
    "30-35",
    "36-41",
    "42-47",
    "54-59",
    "60-64",
    "65-70",
    "71 and above",
  ]
  return (
    <Wrapper subHead="Select the age range of the prospect">
      <div className="grid gap-6 mb-6">
        {ranges.map((range, i) => (
          <div key={i}>
            <input
              type="radio"
              name="range"
              value={range}
              className="cursor-pointer mr-2"
              checked={ageRange === range}
              onChange={(e) => setAgeRange(e.target.value)}
            />
            <span>{range}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const IndustryType = ({ industryType, setIndustryType }) => {
  const industryTypes = [
    "Financial services",
    "Health, medical and pharmaceutical",
    "Governmental organization",
    "NGO and civic society organization",
    "Construction and mining services",
    "Technology, media and telecommunications",
    "Industrial and manufacturing",
    "Education and training",
    "Retail and physical stores",
    "Logistics, procurement and supply-chain",
    "Agriculture",
    "Automotive services",
  ]
  return (
    <Wrapper subHead="This is where you select the business category of your enterprise client">
      <div className="grid gap-6 mb-6">
        {industryTypes.map((type, i) => (
          <div key={i}>
            <input
              type="radio"
              name="type"
              value={type}
              checked={industryType === type}
              className="cursor-pointer mr-2"
              onChange={(e) => setIndustryType(e.target.value)}
            />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const YearOfEstablishment = ({ establishment, setEstablishment }) => {
  return (
    <Wrapper subHead="This is where you enter the establishment date of your enterprise client">
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">
            Enter year of establishment
          </p>
          <input
            type="date"
            value={establishment}
            placeholder="Enter year of establishment"
            onChange={(e) => setEstablishment(e.target.value)}
            className="uppercase border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
