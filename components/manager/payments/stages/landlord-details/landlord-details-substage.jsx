import Wrapper from "@/components/manager/wrapper"
import { useState } from "react"

const ClientDetailsSubStage = ({ register }) => {
  const [isExistingProperty, setIsExistingProperty] = useState(false)
  return (
    <Wrapper
      header="Client Details"
      subHead="Kindly enter the details of the client you are transacting with."
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <label htmlFor="">Existing client</label>
          <input
            {...register("existingClient")}
            value="yes"
            type="radio"
            checked={isExistingProperty}
            onClick={(e) => setIsExistingProperty(!isExistingProperty)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="">New Client</label>
          <input
            type="radio"
            value="no"
            checked={!isExistingProperty}
            onClick={(e) => setIsExistingProperty(!isExistingProperty)}
            {...register("existingClient")}
          />
        </div>
      </div>

      {isExistingProperty ? (
        <ul className="list-disc ml-6">
          <li>
            <p className="font-semibold opacity-70">Select Client</p>
            <select
              {...register("existingClientType")}
              className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
            >
              <option value="" className="pointer-events-none">
                Select Client
              </option>
              <option value="Strict Type">One time Client</option>
              <option value="Easy Going">Retainer Client</option>
            </select>
          </li>
        </ul>
      ) : null}
    </Wrapper>
  )
}

export default ClientDetailsSubStage
