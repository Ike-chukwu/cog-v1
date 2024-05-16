import Wrapper from "@/components/manager/wrapper"

const ClientType = ({ register }) => {
  return (
    <Wrapper header="Client type" subHead="Select client type.">
      <ul className="grid gap-5 font-bold">
        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                {...register("clientType")}
                checked
                id="Company/Organization"
                type="radio"
                value="company/organisation"
                name="default-radio"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Company/Organization"
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
                {...register("clientType")}
                checked
                id="Individual"
                type="radio"
                value="individual"
                name="default-radio"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Individual"
                className="ms-2 text-lg  font-semibold "
              >
                Individual
              </label>
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

export default ClientType
