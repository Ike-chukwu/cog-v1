import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const ThirdPartyInSchedule = ({ register }) => {
  return (
    <Wrapper
      header="Third party"
      subHead="This is where you input the details of the third party."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Third party</p>

          <Input
            {...register("thirdParty")}
            placeholder="Enter third party"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default ThirdPartyInSchedule
