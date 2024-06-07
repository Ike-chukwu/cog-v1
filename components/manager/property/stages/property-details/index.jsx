import Wrapper from "@/components/manager/wrapper"
import ApplicationType from "./application-type"
import PaymentStyle from "./payment-style"
import PropertyDetailsSubStage from "./property-details"
import PropertyName from "./property-name"
import UnitDetails from "./unit-details"

const PropertyDetails = ({ activeSubStage, register, setValue, subStages }) => {
  const getStage = () => {
    switch (activeSubStage) {
      case 0:
        return <PropertyDetailsSubStage register={register} />
      case 1:
        return <PropertyName register={register} />
      case 2:
        return <ApplicationType register={register} />
      case 3:
        return <UnitDetails register={register} setValue={setValue} />
      case 4:
        return <PaymentStyle register={register} />
      default:
        return <ApplicationType register={register} />
    }
  }
  return getStage()
}

export default PropertyDetails

const UnitID = ({ unitID, setUnitID }) => {
  return (
    <Wrapper
      header="Unit ID"
      subHead="This is where you enter the identity of the property unit being prospected. A 
      property can have sub-units within it. This is to identify the specific unit the prospect is interested in"
    >
      <ul className="list-disc ml-6 mb-8">
        <li>
          <p className="font-semibold opacity-70">Unit ID</p>
          <input
            type="text"
            value={unitID}
            placeholder="Enter unit ID"
            onChange={(e) => setUnitID(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
