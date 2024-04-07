import Image from "next/image"
import { useState } from "react"

const FormInput = ({ type, placeholder, styles, svg }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    toggleDropdown()
  }

  return (
    <div className="relative">
      {type === "text" || type === "password" ? (
        <input
          type={type}
          className={`py-4 border-2 text-black placeholder:text-black border-borderGrey px-5 rounded-lg w-full outline-none ${styles}`}
          placeholder={placeholder}
        />
      ) : (
        type.includes("dropdown") && (
          <>
            <div className={`relative w-full`} onClick={toggleDropdown}>
              <div
                className={`relative z-10 bg-white py-4 border-2 text-black placeholder:text-black border-borderGrey px-5 rounded-lg w-full cursor-pointer ${styles}`}
              >
                {selectedOption || placeholder}
              </div>
              <div
                className={`absolute px-2 py-3  top-full left-0 w-full bg-white border-2 border-borderGrey rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className="pointer-events-none mb-3"
                >
                  {placeholder}
                </option>
                <option
                  value="corporate organization"
                  onClick={() => handleOptionSelect("Corporate Organization")}
                >
                  Corporate Organization
                </option>
                {type.includes("client") ? (
                  <option
                    value="individual"
                    onClick={() => handleOptionSelect("Individual")}
                  >
                    Individual
                  </option>
                ) : (
                  <option
                    value="freelance"
                    onClick={() => handleOptionSelect("Freelance")}
                  >
                    Freelance
                  </option>
                )}
              </div>
            </div>
            <div
              className={`absolute bottom-4 right-5 cursor-pointer`}
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </>
        )
      )}
      {svg && <Image src={svg} alt="" className="absolute bottom-4 right-5" />}
    </div>
  )
}

export default FormInput
