import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"
import { useEffect, useState } from "react"

const ScheduleSummary = () => {
  const [scheduleData, setEmployeeData] = useState({})

  useEffect(() => {
    const data =
      window !== undefined
        ? JSON.parse(localStorage.getItem("schedule-data"))
        : {}

    setEmployeeData(data)
  })

  return (
    <article className="flex flex-col gap-16">
      <h3 className="text-3xl text-[#2255A0] font-semibold">
        Schedule summary
      </h3>
      <article className="flex flex-col gap-10 w-full">
        <div>
          <h2 className="text-2xl font-medium">Task Details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Title of task:</small>
              <span>{scheduleData?.taskTitle}</span>
            </div>
            <div className="flex flex-col">
              <small>Description of Tasks:</small>
              <span>{scheduleData?.taskDescription}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Time frame</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Duration:</small>
              <span>
                {scheduleData?.durationOfMonthPeriod},{" "}
                {scheduleData?.durationOfYearPeriod}
              </span>
            </div>
            <div className="flex flex-col">
              <small>Frequency:</small>
              <span>{scheduleData?.frequency}, </span>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-medium">Attachments</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Employee Type:</small>
              <span>{scheduleData?.selectedEmployee}</span>
            </div>
            <div className="flex flex-col">
              <small>Property Type:</small>
              <span>{scheduleData?.selectedPropertyType}</span>
            </div>
            <div className="flex flex-col">
              <small>Third Party:</small>
              <span>{scheduleData?.thirdParty}</span>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-medium">Integrations</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Send to all involved Gmail:</small>
              <span>{scheduleData?.sendToAllInvolved.toString()}</span>
            </div>
            <div className="flex flex-col">
              <small>Send to all mobile as SMS:</small>
              <span>{scheduleData?.sendToAllMobileAsSms.toString()}</span>
            </div>
            <div className="flex flex-col">
              <small>Add Google Meet Link:</small>
              <span>{scheduleData?.addGoogleMeetLink.toString()}</span>
            </div>
          </div>
        </div>
      </article>
    </article>
  )
}

export default ScheduleSummary
