import Wrapper from "@/components/manager/wrapper"

const ApplicationType = ({ applicationType, setApplicationType }) => {
  return (
    <Wrapper
      header="Application Type"
      subHead="This is where you select the type of application for the property."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Application type</p>
          <select
            value={applicationType}
            onChange={(e) => setApplicationType(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          >
            <option value="" className="pointer-events-none">
              Select application type
            </option>
            <option value="Property rental">Property rental</option>
            <option value="Property purchase">Property purchase</option>
          </select>
        </li>
      </ul>
    </Wrapper>
  )
}

export default ApplicationType
