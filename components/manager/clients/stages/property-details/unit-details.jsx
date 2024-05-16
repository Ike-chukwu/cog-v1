import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"
import { useState } from "react"
import UnitDetailsForm from "./unit-details-form"

const UnitDetails = ({ register, setValue }) => {
  const [numberOfUnits, setNumberOfUnits] = useState(1)
  const [unitData, setUnitData] = useState([])
  return (
    <Wrapper
      header="Unit details"
      subHead="This is where you enter the amount of units in the property."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Number of units</p>

          <Input
            {...register("propertyName")}
            placeholder="Enter Name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />

          <Input
            {...register("numberOfUnits")}
            onChange={(e) => setNumberOfUnits(parseInt(e.target.value))}
            type="number"
            placeholder="Enter number of units"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>

        {numberOfUnits > 0
          ? Array.from({ length: numberOfUnits }, (v, i) => i).map((_, idx) => (
              <UnitDetailsForm
                key={idx}
                number={idx + 1}
                register={register}
                unitData={unitData}
                setUnitData={setUnitData}
                setValue={setValue}
              />
            ))
          : null}
      </ul>
    </Wrapper>
  )
}

export default UnitDetails
