import Link from "next/link"
import { useState } from "react"
import { MdOutlineAddCircle, MdOutlineRemoveRedEye } from "react-icons/md"

const placeholderOpts = [
  {
    link: "",
    content: "Listing website",
  },
  {
    link: "",
    content: "Listing manager",
  },
]

const ManagerOptions = ({
  buttonContent = "Marketplace manager",
  options = placeholderOpts,
  className,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative ml-auto">
      <button
        className={`bg-primary border border-primary text-white p-2 rounded-md hover:text-primary hover:bg-white ${className}`}
        onClick={() => setOpen(!open)}
      >
        {buttonContent}
      </button>

      {open && (
        <div className="absolute top-full py-2 w-full bg-white shadow-md">
          {options.map(({ link, content }, i) => (
            <Link key={i} href={link}>
              <p className="flex items-center gap-2 p-2 hover:bg-primary hover:text-white">
                {i === 0 ? <MdOutlineAddCircle /> : <MdOutlineRemoveRedEye />}{" "}
                {content}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ManagerOptions
