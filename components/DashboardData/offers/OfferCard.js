import Image from "next/image"

const OfferCard = ({ text1, text2, text3, cardClass, src, textColor }) => {
  return (
    <div
      className={`flex justify-between items-start max-w-[367px] max-h-[227px] bg-primary p-6 ${cardClass}`}
    >
      <div className="flex flex-col gap-6 ">
        <p className="text-sm font-bold font-inter">{text1}</p>
        <p className="text-4xl font-bold font-inter">{text2}</p>
        <p className={`text-sm font-bold font-inter ${textColor}`}>{text3}</p>
      </div>
      <Image src={src} width={15} height={19} alt="bell icon" />
    </div>
  )
}

export default OfferCard
