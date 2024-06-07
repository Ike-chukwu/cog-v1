import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const LandlordContact = ({ register }) => {
  return (
    <Wrapper
      header="Landlord Details"
      subHead="Kindly enter the contact of the landlord."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Landlord Contact</p>

          <Input
            name="landlordContact"
            placeholder="Enter contact"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default LandlordContact
