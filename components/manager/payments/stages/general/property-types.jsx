import Wrapper from "../../../wrapper"

const PropertyTypes = ({ register }) => {
  return (
    <Wrapper
      header="General"
      subHead="This is where you enter the details of the type of property you are renting to this client."
    >
      <ul className="grid gap-5 font-bold">
        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                {...register("generalPropertyType")}
                checked
                id="Flat/apartment"
                type="radio"
                value="flat/apartment"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Flat/apartment"
                className="ms-2 text-lg  font-semibold"
              >
                Flat/apartment
              </label>
            </div>
          </div>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                {...register("generalPropertyType")}
                checked
                id="Warehouse/storage facility"
                type="radio"
                value="warehouse/storage facility"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Warehouse/storage facility"
                className="ms-2 text-lg  font-semibold"
              >
                Warehouse/storage facility
              </label>
            </div>
          </div>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                {...register("generalPropertyType")}
                checked
                id="Whole home"
                type="radio"
                value="whole home"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Whole home"
                className="ms-2 text-lg  font-semibold"
              >
                Whole home
              </label>
            </div>
          </div>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                {...register("generalPropertyType")}
                checked
                id="Office Space"
                type="radio"
                value="office space"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Office Space"
                className="ms-2 text-lg  font-semibold"
              >
                Office Space
              </label>
            </div>
          </div>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                {...register("generalPropertyType")}
                checked
                id="Retail shop space"
                type="radio"
                value="retail shop space"
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="Retail shop space"
                className="ms-2 text-lg  font-semibold"
              >
                Retail shop space
              </label>
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

export default PropertyTypes
