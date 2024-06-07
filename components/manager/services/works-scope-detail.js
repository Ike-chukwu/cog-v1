"use client"
import React, { useState } from "react"
import Options from "@/components/Options"

const WorkScopeDetail = (props) => {
  const propertyType = () => {
    return [
      {
        to: "",
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

  const [show, setShow] = useState(false)
  return (
    <div className="flex items-center">
      <div className="px-3 py-2 flex justify-between w-full  border border-[#62909F] text-[#62909F]">
        <p className="w-[100px]">{props.workScope}</p>
        <p className="ml-[6rem]">
          {props.currentCurrency}
          {props.money}
        </p>
        <Options type={propertyType} show={show} setShow={setShow} />
      </div>
    </div>
  )
}

export default WorkScopeDetail
