// import EmployeeAccount from "./account-details"
import EmployeeInSchedule from "./employee"
import PropertyInSchedule from "./property"
import RecurringSettingsInSchedule from "./recurring-settings"
// import Salary from "./salary"
import ScheduleTime from "./schedule-time"
import ThirdPartyInSchedule from "./third-party"

const TimeFrameInSchedule = ({ subStage, register }) => {
  const getStageOne = () => {
    switch (subStage) {
      case 1:
        return <EmployeeInSchedule register={register} />
      case 2:
        return <PropertyInSchedule  register={register} />
      case 3:
        return <ThirdPartyInSchedule register={register} />

      //   case 4:
      //     return <ClientContact />

      //   default:
      //     return <PaymentName />
    }
  }

  return <div>{getStageOne()}</div>
}

export default TimeFrameInSchedule
