const OfferSummary = ({ agreement }) => {
  const {
    applicationType,
    propertyType,
    propertyAddress,
    landlordName,
    landlordContact,
    landlordAddress,
    clientName,
    clientContact,
    clientAddress,
    guarantorName,
    guarantorAddress,
    guarantorContact,
    propertyManagerType,
    propertyManagerName,
    propertyManagerAddress,
    propertyManagerContact,
    premisesChecklist,
    rentalAmount,
    rentalFrequency,
    selectedOptions,
    accessDays,
    terminateDays,
  } = agreement
  return (
    <article className="flex flex-col gap-16">
      <h3 className="text-3xl text-[#2255A0] font-semibold">Offer summary</h3>

      <article className="flex flex-col gap-10 w-full">
        <div>
          <h2 className="text-2xl font-medium">Client information</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Name:</small>
              <span>{clientName}</span>
            </div>

            <div className="flex flex-col">
              <small>Client type:</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Email address:</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Phone number:</small>
              <span>{clientContact}</span>
            </div>
            <div className="flex flex-col">
              <small>Gender</small>
              <span>...</span>
            </div>
            <div className="flex flex-col">
              <small>Religion:</small>
              <span>...</span>
            </div>
            <div className="flex flex-col">
              <small>Tribe</small>
              <span>...</span>
            </div>
            <div className="flex flex-col">
              <small>Ocupation:</small>
              <span>{clientAddress}</span>
            </div>

            <div className="flex flex-col">
              <small>Age</small>
              <span>...</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Property details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>applicationType type:</small>
              <span>{applicationType}</span>
            </div>
            <div className="flex flex-col">
              <small>Property type:</small>
              <span>{propertyType}</span>
            </div>

            <div className="flex flex-col">
              <small>Property Name</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Location</small>
              <span>...</span>
            </div>
            <div className="flex flex-col">
              <small>Unit ID:</small>
              <span>...</span>
            </div>
            <div className="flex flex-col">
              <small>Unit features</small>
              {/* <span>{premisesChecklist}</span> */}
            </div>

            <div className="flex flex-col">
              <small>Potential move in date</small>
              <span>...</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Offer details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Purchase fee</small>
              {/* <span>{purchaseFee}</span> */}
            </div>

            <div className="flex flex-col">
              <small>Service charges</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Issue date</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Due date</small>
              <span>{landlordContact}</span>
            </div>
          </div>
        </div>
      </article>
    </article>
  )
}

export default OfferSummary
