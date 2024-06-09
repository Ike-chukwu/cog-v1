import React from "react"

const EventCard = () => {
  return (
    <div className="flex w-full flex-col gap-4 border border-[#62909F] px-4 py-2">
      <div className="flex items-start justify-between w-full ">
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-[400]">9:00AM - 9:30AM</p>
          <p className=" font-[600]">Tenant issue</p>
        </div>
        <button className="px-6 py-[0.2rem] text-[14px] border border-[#62909F] text-[#62909F]">
          Edit
        </button>
      </div>
      <p>Take lawyers and mediators to Ikorodu</p>
    </div>
  )
}

export default EventCard
