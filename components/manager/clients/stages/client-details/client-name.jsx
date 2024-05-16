import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const ClientName = () => {
  return (
    <Wrapper
      header="Client Name"
      subHead="Kindly enter the name of the client."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Client Name</p>

          <Input
            name="clientName"
            placeholder="Enter Name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default ClientName
