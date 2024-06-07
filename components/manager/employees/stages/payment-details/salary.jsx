import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const Salary = ({ register }) => {
  return (
    <Wrapper
      header="Salary"
      subHead="Kindly provide or confirm information regarding this budget item."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Salary</p>

          <Input
            {...register("salary")}
            placeholder="Enter Salary"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default Salary
