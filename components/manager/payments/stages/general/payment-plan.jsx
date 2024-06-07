import Input from "@/components/UI/input"
import Wrapper from "../../../wrapper"

const PaymentPlanUnderPaymentDetails = ({ register }) => {
  return (
    <Wrapper
      header="Payment plan"
      subHead="This is where to select the payment structure."
    >
      <div className="grid gap-4">
        <h2>Payment style</h2>

        <Input
          name="paymentPlan"
          register={register}
          type="select"
          options={[
            { label: "Select payment style", value: "" },
            { label: "At once", value: "at once" },
            { label: "Installmentally", value: "installmentally" },
          ]}
        />
      </div>
    </Wrapper>
  )
}

export default PaymentPlanUnderPaymentDetails
