import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const ClientNameEntry = ({ register }) => {
  return (
    <Wrapper
      header="Client details"
      subHead="Kindly enter details of  the client you want to add to your portfolio."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Cllent&apos;s name</p>

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

export default ClientNameEntry
