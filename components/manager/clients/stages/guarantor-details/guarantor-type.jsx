import Wrapper from "@/components/manager/wrapper"

const GuarantorType = () => {
  return (
    <Wrapper header="Guarantor type" subHead="Select guarantor type.">
      <ul className="grid gap-5 font-bold">
        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                checked
                id="Company/Organization"
                type="radio"
                value=""
                name="default-radio"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                for="Company/Organization"
                className="ms-2 text-lg  font-semibold"
              >
                Company/Organization
              </label>
            </div>
          </div>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                checked
                id="Individual"
                type="radio"
                value=""
                name="default-radio"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label for="Individual" className="ms-2 text-lg  font-semibold ">
                Individual
              </label>
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

export default GuarantorType
