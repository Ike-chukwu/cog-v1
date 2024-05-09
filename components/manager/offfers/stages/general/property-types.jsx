import Toggle from "@/components/UI/toggle"
import Image from "next/image"
import Wrapper from "../../../wrapper"

const PropertyTypes = ({ clientType, setClientType }) => {
  return (
    <Wrapper
      header="General"
      subHead="This is where you enter the details of the type of property you are renting to this client."
    >
      <ul className="grid gap-5 font-bold">
        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="/assets/icons/stop-circle.svg"
              width={24}
              height={24}
              alt="sth"
            />
            <span>Warehouse/storage facility</span>
          </div>

          <Toggle />
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="/assets/icons/stop-circle.svg"
              width={24}
              height={24}
              alt="sth"
            />
            <span>Whole home</span>
          </div>

          <Toggle />
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="/assets/icons/stop-circle.svg"
              width={24}
              height={24}
              alt="sth"
            />{" "}
            <span>Office Space</span>
          </div>

          <Toggle />
        </li>

        <li className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="/assets/icons/stop-circle.svg"
              width={24}
              height={24}
              alt="sth"
            />
            <span>Rent shop space</span>
          </div>

          <Toggle />
        </li>
      </ul>
    </Wrapper>
  )
}

export default PropertyTypes
