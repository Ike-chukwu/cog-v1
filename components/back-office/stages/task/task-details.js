import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const TaskDetailsInSchedule = ({ register }) => {
  return (
    <Wrapper
      header="Task details"
      subHead="This is where you enter the details of the task."
    >
      <ul className="list-disc ml-6 space-y-10">
        <li>
          <p className="font-semibold opacity-70">Title of task</p>

          <Input
            register={register}
            name="taskTitle"
            placeholder="Enter task title"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Description of task</p>

          <Input
            register={register}
            type="textarea"
            name="taskDescription"
            placeholder="Enter details"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default TaskDetailsInSchedule
