"use client"
import Dashboard from "@/components/Layout/Dashboard"
import Options from "@/components/Options"
import CalendarSlider from "@/components/back-office/calendar-slider"
import EventCard from "@/components/back-office/calendar-slider/EventCard"
import Image from "next/image"
import { useState } from "react"
import { generateDate, months } from "@/utils/calendar"
import { cn } from "@/utils"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import dayjs from "dayjs"

const ViewCalendarPage = ({ data }) => {
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
      <span className={className}>{data.hash}</span>
      <span className={className}>{data.date}</span>
      <span className={className}>{data.name}</span>
      <div className="text-right">
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}

export default function Calendar() {
  const [today, setToday] = useState(dayjs())
  const [selectDate, setSelectDate] = useState(dayjs())
  const days = ["S", "M", "T", "W", "T", "F", "S"]

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
          <h1 className="font-bold text-[18px] text-[#b1b1b4]">
            View calendar
          </h1>
        </div>

        <div className="border flex flex-col gap-4 items-start border-[#62909F] py-9 px-7 min-h-[100vh]">
          <button className="flex gap-2 items-center px-6 self-end py-[0.4rem] text-[16px] border bg-[#386a8b] rounded-lg text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_51842)">
                <path
                  d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6V12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 9H12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_51842">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Add task
          </button>
          <div className="grid grid-cols-12 gap-3">
            <div className="flex py-4 flex-col gap-10 grid-col-1 col-span-7 border border-[#62909F] px-4">
              <div className="flex self-start justify-between w-full items-center pt-6">
                <p className="text-[22px] font-500">Upcoming tasks</p>
                <div className="border-2 py-1 px-2 flex items-center gap-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12_5501)">
                      <path
                        d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
                        stroke="#B1B1B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.4992 10.4992L8.32422 8.32422"
                        stroke="#B1B1B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_5501">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <input
                    type="text"
                    placeholder="Search tasks"
                    className="w-[200px] outline-none px-2"
                  />
                </div>
              </div>
              <p className="text-[18px] font-[400]">May 2022</p>
              <CalendarSlider />

              <div className="flex flex-col items-start w-full gap-6">
                <p className="text-[18px] font-[400]">May 2022</p>
                <p className="text-[14px] font-[400]">9:00AM</p>

                <div className="flex flex-col gap-5 items-start w-full h-[400px] overflow-y-scroll">
                  <EventCard />
                  <EventCard />
                  <EventCard />
                  <EventCard />
                  <EventCard />
                  <EventCard />
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start gap-10 grid-col-8 col-span-5 px-6 border border-[#62909F] py-3">
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full pt-4">
                  <div className="flex justify-between items-center py-4">
                    <h1 className="select-none text-[20px] font-bold">
                      {months[today.month()]}, {today.year()}
                    </h1>
                    <div className="flex gap-10 items-center">
                      <GrFormPrevious
                        className="w-5 h-5  cursor-pointer hover:scale-105 transition-all"
                        onClick={() => {
                          setToday(today.month(today.month() - 1))
                        }}
                      />
                      <h1
                        className="cursor-pointer hover:scale-105 transition-all "
                        onClick={() => {
                          setToday(dayjs())
                        }}
                      >
                        Today
                      </h1>
                      <GrFormNext
                        className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                        onClick={() => {
                          setToday(today.month(today.month() + 1))
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-7 pt-4">
                    {days.map((day, index) => (
                      <h1
                        key={index}
                        className="text-sm font-bold text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                      >
                        {day}
                      </h1>
                    ))}
                  </div>

                  <div className="grid grid-cols-7">
                    {generateDate(today.month(), today.year()).map(
                      ({ date, currentMonth, today }, index) => (
                        <div
                          key={index}
                          className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                        >
                          <h1
                            className={cn(
                              currentMonth ? "" : "text-gray-400",
                              today ? "bg-red-600 text-white" : "",
                              selectDate.toDate().toDateString() ===
                                date.toDate().toDateString()
                                ? "bg-[#386a8b] text-white"
                                : "",
                              "h-10 w-10 rounded-full grid place-content-center hover:bg-[#386a8b] hover:text-white transition-all cursor-pointer select-none"
                            )}
                            onClick={() => {
                              setSelectDate(date)
                            }}
                          >
                            {date.date()}
                          </h1>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 py-6 w-full">
                <p className="text-[18px]">Filter</p>
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
                    <p className="text-[18px]">Property</p>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
