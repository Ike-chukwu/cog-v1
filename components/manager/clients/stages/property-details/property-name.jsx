import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const PropertyName = ({ register }) => {
  return (
    <Wrapper
      header="Property Name"
      subHead="Kindly enter the name of the property."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Property Name</p>

          <Input
            {...register("propertyName")}
            placeholder="Enter Name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default PropertyName
