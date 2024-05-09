import Wrapper from "@/components/manager/wrapper"

const UnitDetails = ({ applicationType, setApplicationType }) => {
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
            onChange={(e) => setApplicationType(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          >
            <option value="" className="pointer-events-none">
              Select number of units
            </option>
            <option value="Property rental">Property rental</option>
            <option value="Property purchase">Property purchase</option>
          </select>
        </li>
      </ul>
    </Wrapper>
  )
}

export default UnitDetails
