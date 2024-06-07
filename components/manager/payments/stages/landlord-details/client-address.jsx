import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const ClientAddress = () => {
  return (
    <Wrapper
      header="Client Details"
      subHead="Kindly enter details of  the landlord you want to add to your portfolio."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Client&apos;s address</p>

          <Input
            name="clientAddress"
            placeholder="Enter address"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default ClientAddress
