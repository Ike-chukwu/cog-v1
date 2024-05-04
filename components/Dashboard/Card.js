import Image from "next/image"

export const Card = ({ header, val, metric }) => {
  return (
    <div className="w-full max-w-[367px] border-2 rounded-2xl border-[#386A8B] p-5">
      <div className="flex justify-end pb-1">
        <Image
          src="/assets/images/file-icon-blue.svg"
          alt="file-icon-white"
          width={15}
          height={19}
        />
      </div>
      <h1 className="font-semibold">{header}</h1>
      <h1 className="font-bold text-[32px] mt-6 mb-8">{val}</h1>
      <p className="text-[#049561] font-semibold">{metric.includes('increased') ? '+ ' : "- "}{metric}</p>
    </div>
  )
}
