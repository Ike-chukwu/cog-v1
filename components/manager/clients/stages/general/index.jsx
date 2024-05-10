import ApplicationType from "./application-type"
import GeneralStage from "./general"
import PropertyTypes from "./property-types"

const General = ({
  subStage,
  upload,
  checklist,
  clientType,
  clientName,
  clientContact,
  setUpload,
  setChecklist,
  setClientType,
  setClientName,
  setClientContact,
}) => {
  console.log("subStage", subStage)
  const getStage = () => {
    switch (subStage) {
      case 0:
        return (
          <GeneralStage clientType={clientType} setClientType={setClientType} />
        )
      case 1:
        return (
          <PropertyTypes
            clientType={clientType}
            setClientType={setClientType}
          />
        )
      case 2:
        return (
          <ApplicationType
            clientName={clientName}
            setClientName={setClientName}
          />
        )
      default:
        return (
          <PropertyTypes
            clientType={clientType}
            setClientType={setClientType}
          />
        )
    }
  }
  return getStage()
}

export default General
