import Image from "next/image"
import bell from "../../../public/assets/icons/bell.png"

const OfferHeading = () => {
  return (
    <div className="">
      <div className="flex justify-between items-start">
        <h2 className="font-bold font-inter text-2xl md:text-4xl text-minor-text">
          Offers
        </h2>
        <div className="flex flex-col items-end">
          <div className="flex justify-center items-center mb-4">
            <Image src={bell} width={24} height={24} alt="bell icon" />
            <div className="ml-8 font-inter rounded-[50%] text-center w-12 h-12 p-2 bg-default-yellow text-[22px]">
              PA
            </div>
          </div>
          <p className="text-sm text-minor-text">User ID: 12345678</p>
        </div>
      </div>
    </div>
  )
}

export default OfferHeading
