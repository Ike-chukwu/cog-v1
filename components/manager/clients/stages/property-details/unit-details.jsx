import Wrapper from "@/components/manager/wrapper"
import { useState } from "react"
import UnitDetailsForm from "./unit-details-form"

const UnitDetails = ({ applicationType, setApplicationType }) => {
  const [numberOfUnits, setNumberOfUnits] = useState(1)
  return (
    <Wrapper
      header="Unit details"
      subHead="This is where you enter the amount of units in the property."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Number of units</p>
          <select
            value={applicationType}
            onChange={(e) => setNumberOfUnits(parseInt(e.target.value))}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          >
            <option value="0" className="pointer-events-none">
              Select number of units
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </li>

        {numberOfUnits > 0
          ? Array.from({ length: numberOfUnits }, (v, i) => i).map((_, idx) => (
              <UnitDetailsForm key={idx} number={idx + 1} />
            ))
          : null}
      </ul>
    </Wrapper>
  )
}

export default UnitDetails
