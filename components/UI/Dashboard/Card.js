import { useEffect, useState } from "react"
import { FaSimCard } from "react-icons/fa"

const Card = ({ content }) => {
  const { invert = false, topic, value, percent, color } = content

  const [textColor, setTextColor] = useState("")

  const getColor = () => {
    if (color.toLowerCase() === "red") {
      setTextColor("text-red-500")
    } else if (color.toLowerCase() === "green") {
      setTextColor("text-green-500")
    } else {
      if (invert) {
        setTextColor("text-white")
      } else {
        setTextColor("text-black")
      }
    }
  }

  useEffect(() => {
    getColor()
  }, [])

  const genColor = invert ? "text-white" : "text-black"

  return (
    <div
      className={`py-4 px-6 border border-primary w-fit ${
        invert ? "bg-primary" : "bg-white"
      }`}
    >
      <FaSimCard
        className={`ml-auto mb-2 text-2xl ${
          invert ? "text-white" : "text-primary"
        }`}
      />

      <div className="grid gap-4">
        <p className={`${genColor}`}>{topic}</p>

        <p className={`text-4xl font-semibold ${genColor}`}>{value}</p>

        <p className={`font-medium ${textColor}`}>{percent}</p>
      </div>
    </div>
  )
}

export default Card
