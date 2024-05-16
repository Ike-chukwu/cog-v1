import { cn } from "@/utils"
import { useRouter } from "next/router"
import { useState } from "react"
import Button from "../UI/button"

const DropdownButton = ({
  label,
  options,
  className,
  popoverClassName,
  onClick = () => null,
}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <Button
        className={cn(
          "flex items-center justify-center w-fit rounded-md border",
          className
        )}
        onClick={toggleDropdown}
      >
        {label}
        {/* <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
      </Button>

      {isOpen && (
        <div
          className={cn(
            "origin-top-right absolute right-0 mt-2  shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30 text-[15px]",
            popoverClassName
          )}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <Button
                key={index}
                className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] 
                cursor-pointer whitespace-no-wrap bg-transparent 
                text-black"
                onClick={() => {
                  if (option.link) return router.push(option.link)
                  onClick()
                }}
              >
                {option.icon ? option.icon : null}
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownButton
