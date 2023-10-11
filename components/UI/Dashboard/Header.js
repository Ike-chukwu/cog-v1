import { FiBell } from "react-icons/fi"

const Header = ({
  header,
  subHeader,
  name = "Anna John",
  userId = "7239912",
}) => {
  const getInitials = (username) => {
    const eachNames = username.split(" ")
    const initials = eachNames.map((word) => word.charAt(0))
    return initials.join("")
  }

  return (
    <header className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-semibold">{header}</h2>
        <h3 className="text-xl font-semibold opacity-50 mt-4">{subHeader}</h3>
      </div>

      <div className="flex items-start gap-6">
        <button className="p-3 rounded-full hover:bg-zinc-300">
          <FiBell className="text-3xl" />
        </button>

        <div>
          <div className="bg-[#E0CA04] ml-auto h-12 w-12 mb-2 rounded-full grid place-items-center font-semibold">
            {getInitials(name)}
          </div>
          <small className="opacity-50">User ID: {userId}</small>
        </div>
      </div>
    </header>
  )
}

export default Header
