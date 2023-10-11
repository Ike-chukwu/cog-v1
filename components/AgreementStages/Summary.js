const AgreementSummary = ({ agreement }) => {
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
      <h3 className="text-3xl text-[#2255A0] font-semibold">
        Agreement summary
      </h3>

      <article className="flex flex-col gap-10 w-full">
        <div>
          <h2 className="text-2xl font-medium">Buyer Details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Buyer Name:</small>
              <span>{clientName}</span>
            </div>

            <div className="flex flex-col">
              <small>Buyer type:</small>
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
              <small>Address:</small>
              <span>{clientAddress}</span>
            </div>

            <div className="flex flex-col">
              <small>Agreement date</small>
              <span>...</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Seller details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Seller name</small>
              <span>{landlordName}</span>
            </div>

            <div className="flex flex-col">
              <small>Landlord type</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Email address</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Phone number</small>
              <span>{landlordContact}</span>
            </div>
            <div className="flex flex-col">
              <small>Address</small>
              <span>{landlordAddress}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Property details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Property type:</small>
              <span>{propertyType}</span>
            </div>

            <div className="flex flex-col">
              <small>Property Address</small>
              <span>{propertyAddress}</span>
            </div>

            <div className="flex flex-col">
              <small>Agreement type</small>
              <span>{applicationType}</span>
            </div>

            <div className="flex flex-col">
              <small>Premises physical specification</small>
              {/* <span>{premisesChecklist}</span> */}
            </div>

            <div className="flex flex-col">
              <small>Potential move in date</small>
              <span>...</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Property Manager Details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Property manager name</small>
              <span>{propertyManagerName}</span>
            </div>

            <div className="flex flex-col">
              <small>Property manager type</small>
              <span>{propertyManagerType}</span>
            </div>

            <div className="flex flex-col">
              <small>Email address</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Phone number</small>
              <span>{propertyManagerContact}</span>
            </div>
            <div className="flex flex-col">
              <small>Address</small>
              <span>{propertyManagerAddress}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Entire Agreement</h2>
          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <p>
                This agreement constitutes the entire agreement between the
                parties and supersedes all prior negotiations, understandings,
                and agreements between the parties.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Governing Law</h2>
          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <p>
                This agreement shall be governed by and construed in accordance
                with the laws of The Federal Republic of Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Withness/Guarantor Details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Guarantor name</small>
              <span>{guarantorName}</span>
            </div>

            <div className="flex flex-col">
              <small>Email address</small>
              <span>...</span>
            </div>

            <div className="flex flex-col">
              <small>Phone number</small>
              <span>{guarantorContact}</span>
            </div>
            <div className="flex flex-col">
              <small>Address</small>
              <span>{guarantorAddress}</span>
            </div>
          </div>
        </div>
      </article>
    </article>
  )
}

export default AgreementSummary
