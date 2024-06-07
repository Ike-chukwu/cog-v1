import Wrapper from "@/components/manager/wrapper"
import { useState } from "react"

const LandloardDetailsSubStage = ({ register }) => {
  const [isExistingProperty, setIsExistingProperty] = useState(false)
  return (
    <Wrapper
      header="Landlord Details"
      subHead="Kindly enter details of  the landlord you want to add to your portfolio."
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <label htmlFor="">Existing landlord</label>
          <input
            {...register("existingLandlord")}
            value="yes"
            type="radio"
            checked={isExistingProperty}
            onClick={(e) => setIsExistingProperty(!isExistingProperty)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="">New Landlord</label>
          <input
            type="radio"
            value="no"
            checked={!isExistingProperty}
            onClick={(e) => setIsExistingProperty(!isExistingProperty)}
            {...register("existingLandlord")}
          />
        </div>
      </div>

      {isExistingProperty ? (
        <ul className="list-disc ml-6">
          <li>
            <p className="font-semibold opacity-70">Select Landlord</p>
            <select
              {...register("existingLandlordType")}
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
            >
              <option value="" className="pointer-events-none">
                Select Landlord
              </option>
              <option value="Strict Type">Strict Type</option>
              <option value="Easy Going">Easy Going</option>
            </select>
          </li>
        </ul>
      ) : null}
    </Wrapper>
  )
}

export default LandloardDetailsSubStage
