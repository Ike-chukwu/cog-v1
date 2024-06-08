"use client"
import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import { employeesList } from "@/data/properties"
import Image from "next/image"
import { useState } from "react"

const ServicesTable = ({ data }) => {
  const className = `w-full overflow-hidden text-ellipsis whitespace-nowrap`
  const [show, setShow] = useState(false)

  const propertyType = () => {
    return [
      {
        to: "/dashboard/manager/property/rentals/1",
        value: "View details",
        src: "/assets/icons/viewicon.svg",
      },
      {
        to: "",
        value: "Edit details",
        src: "/assets/icons/editicon.svg",
      },
      {
        to: "",
        value: "Delete detail",
        src: "/assets/icons/deleteicon.svg",
      },
    ]
  }
  return (
    <div className="grid grid-cols-5 items-center justify-between py-2 px-4 ">
      <div className="flex items-center text-primary">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-black rounded-sm mr-2"
        />
      </div>

      {/* <span className={className}>{date}</span> */}

      <span className={className}>{data.hash}</span>

      <span className={className}>{data.date}</span>

      <span className={className}>{data.name}</span>

      <div className="text-right">
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}

export default function index() {
  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">
              Back-office
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-x-12 mb-2">
              <figure>
                <Image
                  src="/assets/images/notification.svg"
                  alt="Notification"
                  width={24}
                  height={24}
                />
              </figure>
              <div className="h-[58px] w-[58px] rounded-[50%] bg-[#E0CA04] grid place-items-center">
                <span className="font-bold text-[20px]">PA</span>
              </div>
            </div>
            <p className="text-[#4B4B4B] text-[14px] text-right">
              User ID: 12345678
            </p>
          </div>
        </nav>

        <div className="flex gap-6 mb-9">
          <h1 className="font-medium text-[#4B4B4B]">Set terms</h1>
        </div>

        <div className="border border-[#62909F] py-9 px-7 min-h-[100vh]">
          <div className="grid grid-cols-12  gap-3">
            <div className="grid grid-col-1 col-span-7 h-[700px] border border-[#62909F] px-4">
              <div className="flex justify-between w-full items-center pt-6">
                <p className="text-[22px] font-500">Employees list</p>
                <div className="flex items-center gap-3">
                  <svg
                    width="54"
                    height="48"
                    viewBox="0 0 54 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.4941 1.49402L52.9474 47.4908L0.951042 46.8727L1.49777 0.875986L53.4941 1.49402Z"
                      fill="white"
                      stroke="#62909F"
                    />
                    <path
                      d="M33.0132 34.8691L21.1441 24.0889L33.2661 13.5939L33.0132 34.8691Z"
                      fill="#B1B1B4"
                      stroke="#62909F"
                    />
                  </svg>
                  <svg
                    width="54"
                    height="48"
                    viewBox="0 0 54 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6_37790)">
                      <rect
                        width="47"
                        height="53"
                        transform="matrix(0.0086416 0.999963 0.999963 -0.0086416 0 1)"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M32.5346 24.1937L19.1836 12.5586L19.3867 36.0577L32.5346 24.1937Z"
                        fill="#B1B1B4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_37790">
                        <rect
                          width="47"
                          height="53"
                          fill="white"
                          transform="matrix(0.0086416 0.999963 0.999963 -0.0086416 0 1)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <>
                <div className="grid grid-cols-5 mt-10 items-center px-4 font-bold py-[0] bg-[#62909f] text-white">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-white rounded-sm mr-2"
                    />
                  </div>
                  <span>#</span>
                  <span>Date created</span>
                  <span>Employee name</span>
                  <span className="text-right">Action</span>
                </div>

                <div className="grid text-left mt-6">
                  {employeesList.map((property, i) => (
                    <ServicesTable index={i} key={i} data={property} />
                  ))}
                </div>
              </>
            </div>

            <div className="rounded-[10px] grid-col-8 col-span-5 px-6 border border-[#62909F] py-3">
              <p className="text-[20px] font-bold">Customize report</p>
              <div className="flex flex-col gap-4 py-6">
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Report period</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <input
                      type="text"
                      className="p-1 border bg-[#f5f7f9] border-[#62909F] w-[45%]"
                      placeholder="DD/MM/YYYY"
                    />
                    <p>-</p>
                    <input
                      type="text"
                      className="p-1 border bg-[#f5f7f9] border-[#62909F] w-[45%]"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Employee name</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-full border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Schedule status</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-full border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Department</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-full border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Property</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <input
                      type="text"
                      className="p-1 border border-[#62909F] w-[45%]"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Payroll status</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-[45%] border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <button className="px-10 py-3 rounded-lg text-white bg-[#386A8B] self-end">
                  Run report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
