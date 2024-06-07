import Input from "@/components/UI/input"
import Wrapper from "../../../wrapper"

const MainPropertAddress = ({ register }) => {
  return (
    <Wrapper
      header="General"
      subHead="This is where you enter the name of the address of the property you are adding to your portfolio."
    >
      <div className="grid gap-4">
        <h2>Property address</h2>

        <Input
          name="generalPropertyAddress"
          register={register}
          type="input"
          placeholder="Enter state"
        />
      </div>
    </Wrapper>
  )
}

export default MainPropertAddress
