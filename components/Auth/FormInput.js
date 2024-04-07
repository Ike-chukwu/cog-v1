import Image from "next/image"
import { useState } from "react"
import view from '@/public/assets/images/view.png';


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
        <>
        <input
          type={type}
          className={`py-4 border-2 text-black placeholder:text-black border-borderGrey px-5 rounded-lg w-full outline-none ${styles}`}
          placeholder={placeholder}
        />
        {type ==="password" && <Image src={view} alt="" className="absolute z-20 bottom-4 right-5" />}
        </>
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
                className={`absolute px-2 py-3 z-10  top-full left-0 w-full bg-white border-2 border-borderGrey rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className="pointer-events-none"
                >
                  {placeholder}
                </option>
                <option
                className="mb-3 cursor-pointer"
                  value="corporate organization"
                  onClick={() => handleOptionSelect("Corporate Organization")}
                >
                  Corporate Organization
                </option>
                {type.includes("client") ? (
                  <option
                    value="individual"
                    className="cursor-pointer"
                    onClick={() => handleOptionSelect("Individual")}
                  >
                    Individual
                  </option>
                ) : (
                  <option
                    value="freelance"
                    className="cursor-pointer"
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
            </div>
          </>
        )
      )}
      {svg && <Image src={svg} alt="" className="absolute z-20 bottom-4 right-5" />}
    </div>
  )
}

export default FormInput
