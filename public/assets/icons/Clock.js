import React from "react"

const Clock = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.9168C17.5228 22.9168 22 18.2531 22 12.5002C22 6.7472 17.5228 2.0835 12 2.0835C6.47715 2.0835 2 6.7472 2 12.5002C2 18.2531 6.47715 22.9168 12 22.9168Z"
        stroke="#B1B1B4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 6.25V12.5L16 14.5833"
        stroke="#B1B1B4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Clock
