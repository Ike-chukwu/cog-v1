// import EmployeeAccount from "./account-details"
import RecurringSettingsInSchedule from "./recurring-settings"
// import Salary from "./salary"
import ScheduleTime from "./schedule-time"

const TimeFrameInSchedule = ({ subStage, register }) => {
  const getStageOne = () => {
    switch (subStage) {
      case 1:
        return <ScheduleTime register={register} />
      case 2:
        return <RecurringSettingsInSchedule register={register} />
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

export default TimeFrameInSchedule
