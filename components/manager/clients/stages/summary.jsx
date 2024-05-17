const NewClientSummary = () => {
  const data =
    window !== undefined
      ? JSON.parse(localStorage.getItem("manager-new-client-data"))
      : {}

  const length = Object.keys(data).length

  return (
    <article className="flex flex-col gap-16">
      <h3 className="text-3xl text-[#2255A0] font-semibold">Client summary</h3>
      {length > 0 ? (
        <article className="flex flex-col gap-10 w-full">
          <div>
            <h2 className="text-2xl font-medium">General</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>General Property Type:</small>
                <span>{data.generalPropertyType}</span>
              </div>
              <div className="flex flex-col">
                <small>General Application Type:</small>
                <span>{data.generalApplicationType}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Property Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Existing Property:</small>
                <span>{data.existingProperty}</span>
              </div>

              {data.existingProperty === "no" ? null : (
                <>
                  <div className="flex flex-col">
                    <small>Property Name:</small>
                    <span>{data.propertyName}</span>
                  </div>
                  <div className="flex flex-col">
                    <small>Property Details Application Type:</small>
                    <span>{data.propertyDetailsApplicationType}</span>
                  </div>
                  <div className="flex flex-col">
                    <small>Property Payment Style:</small>
                    <span>{data.propertyPaymentStyle}</span>
                  </div>

                  <div className="flex flex-col">
                    <small>Number of Units:</small>
                    <span>{data.numberOfUnits}</span>
                  </div>
                  {Number(data.numberOfUnits) > 0
                    ? Array.from(
                        { length: Number(data.numberOfUnits) },
                        (v, i) => i
                      ).map((_, idx) => (
                        <div key={idx}>
                          <p className="text-lg font-medium underline">{`Unit ${idx + 1} Details`}</p>
                          {data[`unit-${idx + 1}`]?.unitId && (
                            <div className="flex flex-col">
                              <small>{`Unit ${idx + 1} ID:`}</small>
                              <span>{data[`unit-${idx + 1}`].unitId}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.unitAmount && (
                            <div className="flex flex-col">
                              <small>{`Unit ${idx + 1} Amount:`}</small>
                              <span>{data[`unit-${idx + 1}`].unitAmount}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.WiFi && (
                            <div className="flex flex-col">
                              <small>WiFi:</small>
                              <span>{data[`unit-${idx + 1}`].WiFi}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Parking space"] && (
                            <div className="flex flex-col">
                              <small>Parking Space:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Parking space"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Heating system"] && (
                            <div className="flex flex-col">
                              <small>Heating System:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Heating system"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Security services"] && (
                            <div className="flex flex-col">
                              <small>Security Services:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Security services"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Smart homes and IoT"] && (
                            <div className="flex flex-col">
                              <small>Smart Homes and IoT:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Smart homes and IoT"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Swimming pool"] && (
                            <div className="flex flex-col">
                              <small>Swimming Pool:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Swimming pool"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Lounge and bars"] && (
                            <div className="flex flex-col">
                              <small>Lounge and Bars:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Lounge and bars"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Kitchen && (
                            <div className="flex flex-col">
                              <small>Kitchen:</small>
                              <span>{data[`unit-${idx + 1}`].Kitchen}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Kitchen-Amount"] && (
                            <div className="flex flex-col">
                              <small>Kitchen Amount:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Kitchen-Amount"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Living room"] && (
                            <div className="flex flex-col">
                              <small>Living Room:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Living room"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Living room-Amount"] && (
                            <div className="flex flex-col">
                              <small>Living Room Amount:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Living room-Amount"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Waste disposal"] && (
                            <div className="flex flex-col">
                              <small>Waste Disposal:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Waste disposal"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Rest room"] && (
                            <div className="flex flex-col">
                              <small>Rest Room:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Rest room"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Bedroom && (
                            <div className="flex flex-col">
                              <small>Bedroom:</small>
                              <span>{data[`unit-${idx + 1}`].Bedroom}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Bedroom-Amount"] && (
                            <div className="flex flex-col">
                              <small>Bedroom Amount:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Bedroom-Amount"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Garden && (
                            <div className="flex flex-col">
                              <small>Garden:</small>
                              <span>{data[`unit-${idx + 1}`].Garden}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Pets allowed"] && (
                            <div className="flex flex-col">
                              <small>Pets Allowed:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Pets allowed"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Recreational center"] && (
                            <div className="flex flex-col">
                              <small>Recreational Center:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Recreational center"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Fitness center"] && (
                            <div className="flex flex-col">
                              <small>Fitness Center:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Fitness center"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Access control"] && (
                            <div className="flex flex-col">
                              <small>Access Control:</small>
                              <span>
                                {data[`unit-${idx + 1}`]["Access control"]}
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.[
                            "Cleaning and sanitation"
                          ] && (
                            <div className="flex flex-col">
                              <small>Cleaning and Sanitation:</small>
                              <span>
                                {
                                  data[`unit-${idx + 1}`][
                                    "Cleaning and sanitation"
                                  ]
                                }
                              </span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Water && (
                            <div className="flex flex-col">
                              <small>Water:</small>
                              <span>{data[`unit-${idx + 1}`].Water}</span>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Electricity && (
                            <div className="flex flex-col">
                              <small>Electricity:</small>
                              <span>{data[`unit-${idx + 1}`].Electricity}</span>
                            </div>
                          )}
                        </div>
                      ))
                    : null}
                </>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Client Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Client Type:</small>
                <span>{data.clientType}</span>
              </div>
              <div className="flex flex-col">
                <small>Client Name:</small>
                <span>{data.clientName}</span>
              </div>
              <div className="flex flex-col">
                <small>Client Address:</small>
                <span>{data.clientAddress}</span>
              </div>
              <div className="flex flex-col">
                <small>Client Contact:</small>
                <span>{data.clientContact}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Guarantor Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Guarantor Type:</small>
                <span>{data.guarantorType}</span>
              </div>
              <div className="flex flex-col">
                <small>Guarantor Name:</small>
                <span>{data.guarantorName}</span>
              </div>
              <div className="flex flex-col">
                <small>Guarantor Address:</small>
                <span>{data.guarantorAddress}</span>
              </div>
              <div className="flex flex-col">
                <small>Guarantor Contact:</small>
                <span>{data.guarantorContact}</span>
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </article>
  )
}

export default NewClientSummary
