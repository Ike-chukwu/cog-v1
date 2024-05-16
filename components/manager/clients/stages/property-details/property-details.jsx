import Wrapper from "@/components/manager/wrapper"
import { useState } from "react"

const PropertyDetailsSubStage = ({ register }) => {
  const [isExistingProperty, setIsExistingProperty] = useState(false)
  return (
    <Wrapper
      header="Property Details"
      subHead="Kindly enter the property you are transacting with the client.
"
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <label htmlFor="">Existing Property</label>
          <input
            {...register("existingProperty")}
            value="yes"
            type="radio"
            checked={isExistingProperty}
            onClick={(e) => setIsExistingProperty(!isExistingProperty)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="">New Property</label>
          <input
            type="radio"
            value="no"
            checked={!isExistingProperty}
            onClick={(e) => setIsExistingProperty(!isExistingProperty)}
            {...register("existingProperty")}
          />
        </div>
      </div>

      {isExistingProperty ? (
        <ul className="list-disc ml-6">
          <li>
            <p className="font-semibold opacity-70">Select Property</p>
            <select
              {...register("existingPropertyType")}
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
            >
              <option value="" className="pointer-events-none">
                Select property
              </option>
              <option value="Property rental">Property rental</option>
              <option value="Property purchase">Property purchase</option>
            </select>
          </li>
        </ul>
      ) : null}
    </Wrapper>
  )
}

export default PropertyDetailsSubStage
