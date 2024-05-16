import ClientAddress from "./client-address"
import ClientContact from "./client-contact"
import ClientName from "./client-name"
import ClientType from "./client-type"

const ClientDetails = ({ subStage, register }) => {
  const getStageOne = () => {
    switch (subStage) {
      case 1:
        return <ClientType register={register} />
      case 2:
        return <ClientName />
      case 3:
        return <ClientAddress />
      case 4:
        return <ClientContact />

      default:
        return <ClientType register={register} />
    }
  }

  return <div>{getStageOne()}</div>
}

export default ClientDetails
