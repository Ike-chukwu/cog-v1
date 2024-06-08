import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const EmployeeInSchedule = ({ register }) => {
  return (
    <Wrapper header="Employee" subHead="Kindly select your employee.">
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Employee type</p>

          <Input
            name="selectedEmployee"
            className="bg-[#F5F7F9] py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="select"
            options={[
              { label: "Select employee type", value: "Select employee type" },
              { label: "Full time", value: "Full time" },
              { label: "Part time", value: "Part time" },
            ]}
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default EmployeeInSchedule
