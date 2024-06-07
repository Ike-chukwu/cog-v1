import ClientContact from "./client-contact"
import PaymentName from "./payment-title"
import ClientType from "./client-type"
import Amount from "@/components/ProspectStages/Amount"
import AmountUnderPaymentDetails from "./amount"
import PaymentPlanUnderPaymentDetails from "@/components/manager/payments/stages/general/payment-plan"

const PaymentDetailsInPayments = ({ subStage, register }) => {
  const getStageOne = () => {
    switch (subStage) {
      case 1:
        return <PaymentName />
      case 2:
        return <AmountUnderPaymentDetails />
      case 3:
        return <PaymentPlanUnderPaymentDetails register={register} />

      case 4:
        return <ClientContact />

      default:
        return <PaymentName />
    }
  }

  return <div>{getStageOne()}</div>
}

export default PaymentDetailsInPayments
