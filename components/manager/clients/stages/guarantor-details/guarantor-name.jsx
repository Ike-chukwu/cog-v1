import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const GuarantorName = () => {
  return (
    <Wrapper
      header="Guarantor Name"
      subHead="Kindly enter the name of the guarantor."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Guarantor Name</p>

          <Input
            placeholder="Enter Name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default GuarantorName
