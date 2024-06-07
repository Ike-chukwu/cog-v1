import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const CompensationDetails = ({ register }) => {
  return (
    <Wrapper
      header="Responsibility"
      subHead="This is where you enter the job responsibility of the employee."
    >
      <ul className="list-disc ml-6 space-y-10">
        <li>
          <p className="font-semibold opacity-70">Role name</p>

          <Input
            register={register}
            name="roleName"
            placeholder="Enter role name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Role responsibility</p>

          <Input
            register={register}
            type="textarea"
            name="roleResponsibility"
            placeholder="Enter responsibility"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default CompensationDetails
