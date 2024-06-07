// import ApplicationType from "./application-type"
// import PaymentStyle from "./payment-style"
// import PropertyDetailsSubStage from "./property-details"
// import PropertyName from "./property-name"
// import UnitDetails from "./unit-details"
import EmployeePersonalDetails from "./personal-details"
import JobInfoDetails from "./job-info"
import CompensationDetails from "./compensation-details"

const EmployeeDetails = ({ activeSubStage, register, setValue, subStages }) => {
  const getStage = () => {
    switch (activeSubStage) {
      case 1:
        return <EmployeePersonalDetails register={register} />
      case 2:
        return <JobInfoDetails register={register} />
      case 3:
        return <CompensationDetails register={register} />
      default:
        return
    }
  }
  return getStage()
}

export default EmployeeDetails
