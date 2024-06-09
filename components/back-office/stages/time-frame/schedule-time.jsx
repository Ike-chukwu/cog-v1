import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const ScheduleTime = ({ register }) => {
  return (
    <Wrapper
      header="Schedule time"
      subHead="This is where you enter the time schedule of the task."
    >
      <ul className="list-disc ml-6 space-y-10">
        <li>
          <div className="flex gap-4 items-center">
            <div>
              <p className="font-semibold opacity-70">Start date</p>
              <Input
                register={register}
                type="date"
                name="startDateUnderTimeframeInScheduleTime"
                placeholder="DD-MM-YYY"
                className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
              />
            </div>
            <div>
              <p className="font-semibold opacity-70">End date</p>
              <Input
                register={register}
                type="date"
                name="endDateUnderTimeframeInScheduleTime"
                placeholder="DD-MM-YYY"
                className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-6 items-center">
            <div>
              <p className="font-semibold opacity-70">Start time</p>
              <Input
                register={register}
                name="startTimeUnderTimeframe"
                placeholder="00:00 AM"
                className="bg-[#F5F7F9] py-1 px-2 w-40  mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
              />
            </div>
            <div>
              <p className="font-semibold opacity-70">End time</p>
              <Input
                register={register}
                name="endTimeUnderTimeframe"
                placeholder="00:00 AM"
                className="bg-[#F5F7F9] py-1 w-40 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
              />
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

export default ScheduleTime
