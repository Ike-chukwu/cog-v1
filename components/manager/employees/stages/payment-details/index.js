import EmployeeAccount from "./account-details"
import Salary from "./salary"

const PaymentDetailsInEmployees = ({ subStage, register }) => {
  const getStageOne = () => {
    switch (subStage) {
      case 1:
        return <EmployeeAccount />
      case 2:
        return <Salary register={register} />
      //   case 3:
      //     return <PaymentPlanUnderPaymentDetails register={register} />

      //   case 4:
      //     return <ClientContact />

      //   default:
      //     return <PaymentName />
    }
  }

  return <div>{getStageOne()}</div>
}

export default PaymentDetailsInEmployees
