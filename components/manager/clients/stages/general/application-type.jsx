import Input from "@/components/UI/input"
import Wrapper from "../../../wrapper"

const ApplicationType = ({ register }) => {
  return (
    <Wrapper
      header="General"
      subHead="This is where you enter the details of the type of property you are renting to this client."
    >
      <div className="grid gap-4">
        <h2>Application Type</h2>

        <Input
          name="generalApplicationType"
          register={register}
          type="select"
          options={[
            { label: "Select application type", value: "" },
            { label: "Property rental", value: "warehouse" },
            { label: "Property purchase", value: "purchase" },
          ]}
        />
      </div>
    </Wrapper>
  )
}

export default ApplicationType
