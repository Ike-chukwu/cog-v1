import ApplicationType from "./application-type"
import GeneralStage from "./general"
import PropertyTypes from "./property-types"

const General = ({ subStage, register }) => {
  const getStage = () => {
    switch (subStage) {
      case 0:
        return <GeneralStage register={register} />
      case 1:
        return <PropertyTypes register={register} />
      case 2:
        return <ApplicationType register={register} />
      default:
        return <PropertyTypes register={register} />
    }
  }
  return getStage()
}

export default General
