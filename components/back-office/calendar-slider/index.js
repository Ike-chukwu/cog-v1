import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { NextArrow, PrevArrow } from "./Arrow"

const CalendarSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesTOScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const [active, setActive] = useState(1)

  return (
    <div className="overflow-x-scroll">
      <div className="">
        {/* <Slider {...settings}> */}
        <div className="flex">
          {days.map(({ day, date }, index) =>
            active == index + 1 ? (
              <div
                key={index}
                onClick={() => setActive(index + 1)}
                className="!w-[40px] cursor-pointer bg-[#62909f] py-2 px-4 flex flex-col text-center items-center rounded-xl gap-[1rem] justify-center text-white"
              >
                <p className="text-[13px]">{day}</p>
                <p className="text-[18px]">{date}</p>
              </div>
            ) : (
              <div
                key={index}
                onClick={() => setActive(index + 1)}
                className="!w-[40px] cursor-pointer flex py-2 px-4 flex-col text-center items-center justify-center rounded-xl gap-[1rem] text-[#62909f]"
              >
                <p className="text-[13px]">{day}</p>
                <p className="text-[18px]">{date}</p>
              </div>
            )
          )}
        </div>
        {/* </Slider> */}
      </div>
    </div>
  )
}

export default CalendarSlider

const days = [
  { day: "Sun", date: 1 },
  { day: "Mon", date: 2 },
  { day: "Tues", date: 3 },
  { day: "Wed", date: 4 },
  { day: "Thu", date: 5 },
  { day: "Fri", date: 6 },
  { day: "Sat", date: 7 },
  { day: "Sun", date: 8 },
  { day: "Mon", date: 9 },
  { day: "Tue", date: 10 },
  { day: "Wed", date: 11 },
  { day: "Thu", date: 12 },
  { day: "Fri", date: 13 },
  { day: "Sat", date: 14 },
  { day: "Sun", date: 15 },
  { day: "Mon", date: 16 },
  { day: "Tues", date: 17 },
  { day: "Wed", date: 18 },
  { day: "Thu", date: 19 },
  { day: "Fri", date: 20 },
  { day: "Sat", date: 21 },
  { day: "Sun", date: 22 },
  { day: "Mon", date: 23 },
  { day: "Tues", date: 24 },
  { day: "Wed", date: 25 },
  { day: "Thu", date: 26 },
  { day: "Fri", date: 27 },
  { day: "Sat", date: 28 },
  { day: "Sun", date: 29 },
  { day: "Mon", date: 30 },
  { day: "Tues", date: 31 },
]
