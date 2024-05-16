import GuarantorAddress from "./guarantor-address"
import GuarantorContact from "./guarantor-contact"
import GuarantorName from "./guarantor-name"
import GuarantorType from "./guarantor-type"

const GuarantorDetails = ({ subStage, register }) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <GuarantorType register={register} />
      case 2:
        return <GuarantorName />
      case 3:
        return <GuarantorAddress />
      case 4:
        return <GuarantorContact />
      default:
        return <GuarantorType register={register} />
    }
  }
  return getStage()
}

export default GuarantorDetails
