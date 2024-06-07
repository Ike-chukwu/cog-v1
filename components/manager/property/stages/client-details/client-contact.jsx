import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const ClientContact = () => {
  return (
    <Wrapper
      header="Client Contact"
      subHead="Kindly enter the contact of the client."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Client Contact</p>

          <Input
            name="clientContact"
            placeholder="Enter contact"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default ClientContact
