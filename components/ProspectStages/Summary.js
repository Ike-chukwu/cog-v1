import React from "react"

const ProspectSummary = ({ prospect }) => {
  const {
    clientName,
    clientType,
    clientContact,
    gender,
    religion,
    tribe,
    occupation,
    ageRange,
    applicationType,
    propertyType,
    location,
    unitID,
    unitFeatures,
    signingDate,
  } = prospect
  return (
    <article className="flex flex-col gap-16">
      <h3 className="text-3xl text-[#2255A0] font-semibold">
        Prospect summary
      </h3>

      <article className="flex flex-col gap-10 w-full">
        <div>
          <h2 className="text-2xl font-medium">Client Information</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Name:</small>
              <span>{clientName}</span>
            </div>

            <div className="flex flex-col">
              <small>Client type:</small>
              <span>{clientType}</span>
            </div>

            <div className="flex flex-col">
              <small>Email address:</small>
              <span>{clientContact.email}</span>
            </div>

            <div className="flex flex-col">
              <small>Phone number:</small>
              <span>{clientContact.number}</span>
            </div>

            <div className="flex flex-col">
              <small>Gender:</small>
              <span>{gender}</span>
            </div>

            <div className="flex flex-col">
              <small>Religion:</small>
              <span>{religion}</span>
            </div>

            <div className="flex flex-col">
              <small>Tribe:</small>
              <span>{tribe}</span>
            </div>

            <div className="flex flex-col">
              <small>Age:</small>
              <span>{ageRange}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Property details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Application type:</small>
              <span>{applicationType}</span>
            </div>

            <div className="flex flex-col">
              <small>Property type:</small>
              <span>{propertyType}</span>
            </div>

            <div className="flex flex-col">
              <small>Property name:</small>
              <span></span>
            </div>

            <div className="flex flex-col">
              <small>Location:</small>
              <div>
                {Object.values(location).map((l, i) => (
                  <span key={i}>{l}, </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <small>Unit ID:</small>
              <span>{unitID}</span>
            </div>

            <div className="flex flex-col">
              <small>Unit features:</small>
              <div className="grid gap-2">
                {Object.values(unitFeatures).map((feature, i) => (
                  <span key={i}>{feature}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <small>Potential move in date:</small>
              <span>{signingDate}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Financial details</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <small>Rental fee at inception:</small>
              <span></span>
            </div>

            <div className="flex flex-col">
              <small>Subsequent rental fee:</small>
              <span></span>
            </div>

            <div className="flex flex-col">
              <small>Service charges:</small>
              <span></span>
            </div>

            <div className="flex flex-col">
              <small>Agreement period:</small>
              <span></span>
            </div>
          </div>
        </div>
      </article>
    </article>
  )
}

export default ProspectSummary
