import Image from "next/image"

export const Button = ({ text, variant = "withBg", img, styles }) => {
  return (
    <button
      className={`${
        variant === "withBg"
          ? "bg-primary text-white"
          : "text-primary border-2 border-primary"
      } relative flex items-center justify-center gap-2 py-3 px-6 rounded-lg w-full outline-none  transition-all duration-150 ease-in ${styles}`}
    >
      <Image src={img} alt="" />
      <h1>{text}</h1>
    </button>
  )
}
