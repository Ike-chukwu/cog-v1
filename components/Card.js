import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"

import camera from "/public/assets/icons/Vector.svg"
import Home from "/public/assets/icons/picture.png"
import hex from "/public/assets/images/Group.png"
import Bed from "/public/assets/images/image 12.png"
import Toilet from "/public/assets/images/image 16.png"

const Card = () => {
  return (
    <div className="card  border border-black">
      <div className="carde relative">
        <Image src={Home} className="imi" />
        <span className="absolute top-2 left-1">
          {" "}
          <Image src={camera} />
        </span>
        <span className="absolute bottom-0 left-0 bg-[#62909F] text-white text-sm w-32 h-8  text-center pt-1">
          Apartment
        </span>
      </div>

      <div className="flex w-full  justify-between  ">
        <div className="flex flex-col p-2 mt-2 ">
          <span>Avila Homes </span>
          <span>Ikeja</span>
        </div>
        <div className="mt-5">
          {" "}
          <AiOutlineHeart />{" "}
        </div>
      </div>

      <div className="flex justify-between p-2 ml-2 ">
        <div className="flex ">
          {" "}
          <Image src={Bed} /> <span className="ml-3">2</span>{" "}
        </div>
        <div className="flex">
          {" "}
          <Image src={hex} /> <span className="ml-3">2</span>{" "}
        </div>
        <div className="flex">
          {" "}
          <Image src={Toilet} /> <span className="ml-3">2</span>{" "}
        </div>
      </div>
      <div className="bg-[#62909F] text-white flex justify-between p-2">
        <span>10000</span>
        <span className="mr-4"> view property</span>
      </div>
    </div>
  )
}

export default Card
