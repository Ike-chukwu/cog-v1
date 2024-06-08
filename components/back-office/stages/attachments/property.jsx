import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const PropertyInSchedule = ({ register }) => {
  return (
    <Wrapper header="Property" subHead="Kindly select your property type.">
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Property type</p>
          <Input
            name="selectedPropertyType"
            className="bg-[#F5F7F9] py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="select"
            options={[
              { label: "Select property type", value: "Select property type" },
              { label: "Large Property", value: "Large Property" },
              { label: "Small Property", value: "Small Property" },
            ]}
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default PropertyInSchedule
