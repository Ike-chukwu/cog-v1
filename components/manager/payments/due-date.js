import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const Duedate = () => {
  return (
    <Wrapper
      header="Due date"
      subHead="This is where to select the due date of the payment."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Enter due date</p>

          <Input
            name="dueDate"
            placeholder="dd/mm/yy format"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default Duedate
