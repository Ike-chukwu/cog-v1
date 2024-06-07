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
    <Wrapper
      header="Summary"
      subHead="Review all information related to this budget item"
    >
      <div className="flex flex-col gap-2">
        <p className="self-center font-bold text-[20px]">
          ${employeeData?.salary}
        </p>
        <ul className="list-disc flex flex-col gap-6 mr-6 w-full">
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Employee name</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.employeeName}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Department</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.department}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Property</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.attendance}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Time frame</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.startDateUnderTimeframe}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Start date</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.startDateUnderTimeframe}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Frequency</p>
            </div>
            <p className="font-semibold opacity-70">Monthly</p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Account name</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.accountName}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Account number</p>
            </div>
            <p className="font-semibold opacity-70">
              {employeeData?.accountNumber}
            </p>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-[10px] h-[10px] bg-black"></div>
              <p className="font-semibold opacity-70">Bank name</p>
            </div>
            <p className="font-semibold opacity-70">{employeeData?.bankName}</p>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default EmployeeSummary
