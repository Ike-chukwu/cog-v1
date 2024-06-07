import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const EmployeePersonalDetails = ({ register }) => {
  return (
    <Wrapper
      header="Employee name"
      subHead="This is where you enter the personal details of the employee."
    >
      <ul className="list-disc ml-6 space-y-10">
        <li>
          <p className="font-semibold opacity-70">Name of employee</p>

          <Input
            register={register}
            name="employeeName"
            placeholder="Enter name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Phone number</p>

          <Input
            register={register}
            name="phoneNumber"
            placeholder="Enter phone number"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Email address</p>

          <Input
            register={register}
            name="emailAddress"
            placeholder="Enter address"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default EmployeePersonalDetails
