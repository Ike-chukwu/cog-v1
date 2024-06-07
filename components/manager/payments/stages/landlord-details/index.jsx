import LandloardDetailsSubStage from "./landlord-details-substage"
import LandlordNameEntry from "./client-name-entry.js.jsx"
import LandlordAddress from "./client-address"
import LandlordContact from "./client-under-payments-contact"
import ClientDetailsSubStage from "./landlord-details-substage"
import ClientDetailType from "./client-under-payments-detail-type"
import ClientNameEntry from "./client-name-entry.js.jsx"
import ClientAddress from "./client-address"
import ClientContact from "./client-under-payments-contact"

const InnerClientDetails = ({
  activeSubStage,
  register,
  setValue,
  subStages,
}) => {
  const getStage = () => {
    switch (activeSubStage) {
      case 0:
        return <ClientDetailsSubStage register={register} />
      case 1:
        return <ClientDetailType register={register} />
      case 2:
        return <ClientNameEntry register={register} />
      case 3:
        return <ClientAddress register={register} setValue={setValue} />
      case 4:
        return <ClientContact register={register} />
      // (issue below)
      default:
        return <LandlordNameEntry register={register} />
    }
  }
  return getStage()
}

export default InnerClientDetails
