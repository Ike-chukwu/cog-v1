import Image from "next/image"
import arrowdown from "../../../public/assets/images/arrowdown.svg"
import norecentact from "../../../public/assets/images/norecentact.svg"
import { data } from "../../../data/data"

const OfferActivities = () => {
  return (
    <div className="border-2 p-8">
      <div className="font-inter font-bold p-4 border-b-2 flex justify-between">
        <p className="text-minor-text text-xl lg:text-[22px] ">
          Recent Activities
        </p>
        <p className="text-text-green text-lg lg:text-xl underline cursor-pointer">
          View All
        </p>
      </div>
      <div>
        {" "}
        {data ? (
          <ul>
            {data?.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-center gap-10 p-4 border-t-2"
              >
                <Image
                  src={arrowdown}
                  width={4}
                  height={4}
                  alt="bell icon"
                  className="rounded-[50%] border-light-green border-2 p-4"
                />
                <div>
                  <p className=" font-bold text-base md:text-lg">
                    {item.descriptionn}
                  </p>
                  <p className="text-grey-text font-bold text-[15px] mt-2">
                    {item.availableDate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col lg:flex-row justify-start items-center gap-40 p-8">
            <div className="font-inter font-semibold text-xs text-minor-text text-center">
              <p className="mb-6">You have no previous offers</p>
              <p>
                Create a new offers by through the Offers manager dropdown{" "}
                <br />
                Go to Offers manager Add new offer.{" "}
              </p>
            </div>
            <Image
              src={norecentact}
              width={299}
              height={316}
              alt="no recent act"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default OfferActivities
