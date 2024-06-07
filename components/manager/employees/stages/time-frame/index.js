import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const Timeframe = ({ register }) => {
  return (
    <Wrapper
      header="Time frame"
      subHead="Kindly provide or confirm information regarding the job timeframe"
    >
      <ul className="list-disc ml-6 space-y-10">
        <li>
          <p className="font-semibold opacity-70">Start date</p>

          <Input
            register={register}
            name="startDateUnderTimeframe"
            placeholder="DD-MM-YYY"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Engagement period</p>

          <div className="flex gap-4 items-center">
            <Input
              name="engagementMonthPeriod"
              className="bg-[#F5F7F9] py-1 px-2 w-[135px] mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
              register={register}
              type="select"
              options={[
                { label: "0 month", value: "0 month" },
                { label: "1 month", value: "1 month" },
                { label: "2 months", value: "2 months" },
                { label: "3 months", value: "3 months" },
                { label: "4 months", value: "4 months" },
                { label: "5 months", value: "5 months" },
                { label: "6 months", value: "6 months" },
                { label: "7 months", value: "7 months" },
                { label: "8 months", value: "8 months" },
                { label: "9 months", value: "9 months" },
                { label: "10 months", value: "10 months" },
                { label: "11 months", value: "11 months" },
                { label: "12 months", value: "12 months" },
              ]}
            />
            <Input
              className="bg-[#F5F7F9] py-1 px-2 w-[135px] mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
              name="engagementYearPeriod"
              register={register}
              type="select"
              options={[
                { label: "0 year", value: "0 year" },
                { label: "1 year", value: "1 year" },
                { label: "2  years", value: "2  years" },
                { label: "3  years", value: "3  years" },
                { label: "4  years", value: "4  years" },
                { label: "5  years", value: "5  years" },
                { label: "6  years", value: "6  years" },
                { label: "7 yearss", value: "7  years" },
                { label: "8  years", value: "8  years" },
                { label: "9  years", value: "9  years" },
                { label: "10  years", value: "10  years" },
                { label: "10+  years", value: "10+  years" },
              ]}
            />
          </div>
        </li>
        <li>
          <p className="font-semibold opacity-70">Attendance</p>
          <Input
            className="bg-[#F5F7F9] py-1 px-2  mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
            name="attendance"
            register={register}
            type="select"
            options={[
              { label: "Daily", value: "Daily" },
              { label: "Weekly", value: "Weekly" },
              { label: "Monthly", value: "Monthly" },
              { label: "Quarterly", value: "Quarterly" },
              { label: "Semi-Annually", value: "Semi-Annually" },
              { label: "Annually", value: "Annually" },
            ]}
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default Timeframe
