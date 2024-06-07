import LandloardDetailsSubStage from "./landlord-details-substage"
import LandlordDetailType from "./landlord-detail-type"
import LandlordNameEntry from "./landlord-name-entry.js"
import LandlordAddress from "./landlord-address"
import LandlordContact from "./landlord-contact"

const InnerLandlordDetails = ({
  activeSubStage,
  register,
  setValue,
  subStages,
}) => {
  const getStage = () => {
    switch (activeSubStage) {
      case 0:
        return <LandloardDetailsSubStage register={register} />
      case 1:
        return <LandlordDetailType register={register} />
      case 2:
        return <LandlordNameEntry register={register} />
      case 3:
        return <LandlordAddress register={register} setValue={setValue} />
      case 4:
        return <LandlordContact register={register} />
      // (issue below)
      default:
        return <LandlordNameEntry register={register} />
    }
  }
  return getStage()
}

export default InnerLandlordDetails
