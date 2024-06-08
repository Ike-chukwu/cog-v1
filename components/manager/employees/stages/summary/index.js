import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"
import { useEffect, useState } from "react"

const EmployeeSummary = () => {
  const [employeeData, setEmployeeData] = useState({})

  useEffect(() => {
    const data =
      window !== undefined
        ? JSON.parse(localStorage.getItem("employees-data"))
        : {}

    setEmployeeData(data)
  })

  return (
    <article className="flex flex-col gap-16">
      <h3 className="text-3xl text-[#2255A0] font-semibold">
        Employees summary
      </h3>
        <article className="flex flex-col gap-10 w-full">
          <div>
            <h2 className="text-2xl font-medium">Employee Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Employee name:</small>
                <span>{employeeData?.employeeName}</span>
              </div>
              <div className="flex flex-col">
                <small>Phone number:</small>
                <span>{employeeData?.phoneNumber}</span>
              </div>
              <div className="flex flex-col">
                <small>Email Address:</small>
                <span>{employeeData?.emailAddress}</span>
              </div>
              <div className="flex flex-col">
                <small>Availability Type:</small>
                <span>{employeeData?.availabilityType}</span>
              </div>
              <div className="flex flex-col">
                <small>Attach to Property:</small>
                <span>{employeeData?.attachToProperty}</span>
              </div>
              <div className="flex flex-col">
                <small>Department:</small>
                <span>{employeeData?.department}</span>
              </div>
              <div className="flex flex-col">
                <small>Role name:</small>
                <span>{employeeData?.roleName}</span>
              </div>
              <div className="flex flex-col">
                <small>Role Responsibilty:</small>
                <span>{employeeData?.roleResponsibility}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Time frame</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Start date:</small>
                <span>{employeeData?.startDateUnderTimeframe}</span>
              </div>
              <div className="flex flex-col">
                <small>Engagement period in months and years:</small>
                <span>
                  {employeeData?.engagementMonthPeriod},{" "}
                  {employeeData?.engagementYearPeriod}
                </span>
              </div>
              <div className="flex flex-col">
                <small>Attendance:</small>
                <span>{employeeData?.attendance}</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-medium">Account Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Account number:</small>
                <span>{employeeData?.accountNumber}</span>
              </div>
              <div className="flex flex-col">
                <small>Account name:</small>
                <span>{employeeData?.accountName}</span>
              </div>
              <div className="flex flex-col">
                <small>Bank name:</small>
                <span>{employeeData?.bankName}</span>
              </div>
            </div>
          </div>
        </article>
    </article>
  )
}

export default EmployeeSummary
