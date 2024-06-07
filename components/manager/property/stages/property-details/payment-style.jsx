import Wrapper from "@/components/manager/wrapper"

const PaymentStyle = ({ register }) => {
  return (
    <Wrapper
      header="Payment style"
      subHead="This is where you select the payment style for the property."
    >
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Payment style</p>
          <select
            {...register("propertyPaymentStyle")}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          >
            <option value="" className="pointer-events-none">
              Select Payment style
            </option>
            <option value="installmental">Installmental</option>
            <option value="full">Full Payment</option>
          </select>
        </li>
      </ul>
    </Wrapper>
  )
}

export default PaymentStyle
