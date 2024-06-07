import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const AmountUnderPaymentDetails = () => {
  return (
    <Wrapper
      header="Amount"
      subHead="This is where you enter the amount to be received."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Amount</p>

          <Input
            name="amount"
            placeholder="Enter Amount"
            className="bg-[#F5F7F9] py-1 px-2 mt-4 placeholder:text-[#B1B1B4] border border-primary rounded-none"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default AmountUnderPaymentDetails
