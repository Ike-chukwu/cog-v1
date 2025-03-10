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
