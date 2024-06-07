import { useState } from "react"

import Wrapper from "@/components/manager/wrapper"
import Input from "@/components/UI/input"
import UnitDetailsForm from "../property-details/unit-details-form"
import VendorOneForm from "../property-details/vendor-one-details"

const PropertyManagerDetailsInAddANewProperty = ({ register, setValue }) => {
  const [numberOfManagers, setNumberOfManagers] = useState(1)
  const [managerData, setManagerData] = useState([])
  return (
    <Wrapper
      header="Property manager details"
      subHead="Kindly enter details of  the property manager you want to manage this property."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">
            Number of property managers
          </p>

          <Input
            {...register("numberOfManagers")}
            // defaultValue='1'
            onChange={(e) => setNumberOfManagers(parseInt(e.target.value))}
            type="number"
            placeholder="Select number of managers"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>

        {numberOfManagers > 0
          ? Array.from({ length: numberOfManagers }, (v, i) => i).map(
              (_, idx) => (
                <VendorOneForm
                  key={idx}
                  number={idx + 1}
                  numberOfManagers={numberOfManagers}
                  register={register}
                  unitData={managerData}
                  setUnitData={setManagerData}
                  setValue={setValue}
                />
              )
            )
          : null}
      </ul>
    </Wrapper>
  )
}

export default PropertyManagerDetailsInAddANewProperty
