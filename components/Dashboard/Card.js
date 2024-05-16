import Image from "next/image"

export const Card = ({ header, val, metric }) => {
  return (
    <div className="w-full max-w-[367px] border-2 border-[#386A8B] px-5 py-3 cursor-pointer group transition duration-300 hover:bg-[#386A8B] hover:text-white">
      <div className="flex justify-end">
        <Image
          src="/assets/images/file-icon-blue.svg"
          alt="file-icon-white"
          width={15}
          height={19}
        />
      </div>
      <h1 className="font-semibold">{header}</h1>
      <h1 className="font-bold text-[32px] mt-6 mb-8">{val}</h1>
      <p
        className={`${val[0] === "-" ? "text-red-600 group-hover:text-white" : "text-[#049561] group-hover:text-white"} font-semibold`}
      >
        {metric.includes("Increased") ? "+ " : "- "} {metric}
      </p>
    </div>
  )
}
