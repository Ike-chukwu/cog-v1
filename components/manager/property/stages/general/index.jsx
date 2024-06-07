import MainPropertAddress from "./application-type"
import PropertyTypes from "./property-types"

const General = ({ subStage, register }) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <PropertyTypes register={register} />
      case 2:
        return <MainPropertAddress register={register} />
    }
  }
  return getStage()
}

export default General
