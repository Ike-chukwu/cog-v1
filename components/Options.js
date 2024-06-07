import React from "react"
import Link from "next/link"
import { IoEllipsisVertical } from "react-icons/io5"

const Options = ({ show, setShow, type }) => {
  return (
    <div className="relative">
      <button>
        <IoEllipsisVertical
          className="inline-block"
          onClick={() => setShow(!show)}
        />
      </button>

      {show && (
        <div className="absolute top-[100%] w-max right-[-100%] bg-white rounded-md py-3 shadow-md z-10">
          <ul>
            {type().map((option, index) => {
              console.log(option)
              const { to, src, value } = option
              return (
                <Link key={index} href={to}>
                  <li className="flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200">
                    <img src={src} alt="" />
                    <span>{value}</span>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Options
