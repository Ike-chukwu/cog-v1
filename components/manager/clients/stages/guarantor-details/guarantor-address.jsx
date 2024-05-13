import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const GuarantorAddress = () => {
  return (
    <Wrapper
      header="Guarantor Address"
      subHead="Kindly enter the address of the guarantor."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Guarantor Address</p>

          <Input
            placeholder="Enter address"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default GuarantorAddress
