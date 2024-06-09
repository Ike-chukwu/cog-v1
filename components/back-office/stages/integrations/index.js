import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const Integrations = ({ register }) => {
  return (
    <Wrapper
      header="Integrations"
      subHead="Select all third party integrations into the task."
    >
      <ul className="list-disc space-y-12 mt-10">
        <li className="flex w-full justify-between items-center">
          <p className="text-[16px] font-bold">Send to all involved Gmail</p>
          <Input
            name="sendToAllInvolved"
            className="bg-[#F5F7F9] mt-4 py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="checkbox"
          />
        </li>
        <li className="flex w-full justify-between items-center">
          <p className="text-[16px] font-bold">Send to all mobile as SMS</p>
          <Input
            name="sendToAllMobileAsSms"
            className="bg-[#F5F7F9] mt-4 py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="checkbox"
          />
        </li>
        <li className="flex w-full justify-between items-center">
          <p className="text-[16px] font-bold">Add Google Meet Link</p>
          <Input
            name="addGoogleMeetLink"
            className="bg-[#F5F7F9] mt-4 py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="checkbox"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default Integrations
