import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const EmployeeAccount = ({ register }) => {
  return (
    <Wrapper
      header="Account details"
      subHead="Kindly provide or confirm information regarding this budget item"
    >
      <ul className="list-disc ml-6 space-y-10">
        <li>
          <p className="font-semibold opacity-70">Account number</p>

          <Input
            register={register}
            name="accountNumber"
            placeholder="Enter account number"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Account name</p>

          <Input
            register={register}
            name="accountName"
            placeholder="Enter account name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
        <li>
          <p className="font-semibold opacity-70">Bank name</p>
          <Input
            register={register}
            name="bankName"
            placeholder="Enter bank name"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default EmployeeAccount
