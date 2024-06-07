const NewPropertySummary = () => {
  const data =
    window !== undefined
      ? JSON.parse(localStorage.getItem("manager-new-property-data"))
      : {}

  const length = Object.keys(data).length

  return (
    <article className="flex flex-col gap-16">
      <h3 className="text-3xl text-[#2255A0] font-semibold">
        Property summary
      </h3>
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
                <small>General Property Geolocation:</small>
                <span>{data.generalPropertyAddress}</span>
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
              {data.existingProperty == "yes" && (
                <div className="flex flex-col">
                  <small>Existing Property Type:</small>
                  <span>{data.existingPropertyType}</span>
                </div>
              )}

              {data.existingProperty == "yes" && (
                <div className="flex flex-col">
                  <small>Property name:</small>
                  <span>{data.propertyName}</span>
                </div>
              )}

              {data.existingProperty == "yes" && (
                <div className="flex flex-col">
                  <small>Property Detail Application Type:</small>
                  <span>{data.propertyDetailsApplicationType}</span>
                </div>
              )}

              {data.existingProperty === "no" ? null : (
                <>
                  {/* <div className="flex flex-col">
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
                  </div> */}

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
                          <p className="text-lg font-medium underline">{`Unit ${
                            idx + 1
                          } Details`}</p>
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
                              <small>WiFi:{data[`unit-${idx + 1}`].WiFi}</small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Parking space"] && (
                            <div className="flex flex-col">
                              <small>
                                Parking Space:{" "}
                                {data[`unit-${idx + 1}`]["Parking space"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Heating system"] && (
                            <div className="flex flex-col">
                              <small>
                                Heating System:{" "}
                                {data[`unit-${idx + 1}`]["Heating system"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Security services"] && (
                            <div className="flex flex-col">
                              <small>
                                Security Services:{" "}
                                {data[`unit-${idx + 1}`]["Security services"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Smart homes and IoT"] && (
                            <div className="flex flex-col">
                              <small>
                                Smart Homes and IoT:{" "}
                                {data[`unit-${idx + 1}`]["Smart homes and IoT"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Swimming pool"] && (
                            <div className="flex flex-col">
                              <small>
                                Swimming Pool:{" "}
                                {data[`unit-${idx + 1}`]["Swimming pool"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Lounge and bars"] && (
                            <div className="flex flex-col">
                              <small>
                                Lounge and Bars:{" "}
                                {data[`unit-${idx + 1}`]["Lounge and bars"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Kitchen && (
                            <div className="flex flex-col">
                              <small>
                                Kitchen: {data[`unit-${idx + 1}`].Kitchen}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Kitchen-Amount"] && (
                            <div className="flex flex-col">
                              <small>
                                Kitchen Amount:{" "}
                                {data[`unit-${idx + 1}`]["Kitchen-Amount"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Living room"] && (
                            <div className="flex flex-col">
                              <small>
                                Living Room:{" "}
                                {data[`unit-${idx + 1}`]["Living room"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Living room-Amount"] && (
                            <div className="flex flex-col">
                              <small>
                                Living Room Amount:{" "}
                                {data[`unit-${idx + 1}`]["Living room-Amount"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Waste disposal"] && (
                            <div className="flex flex-col">
                              <small>
                                Waste Disposal:{" "}
                                {data[`unit-${idx + 1}`]["Waste disposal"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Rest room"] && (
                            <div className="flex flex-col">
                              <small>
                                Rest Room:{" "}
                                {data[`unit-${idx + 1}`]["Rest room"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Bedroom && (
                            <div className="flex flex-col">
                              <small>
                                Bedroom: {data[`unit-${idx + 1}`].Bedroom}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Bedroom-Amount"] && (
                            <div className="flex flex-col">
                              <small>
                                Bedroom Amount:{" "}
                                {data[`unit-${idx + 1}`]["Bedroom-Amount"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Garden && (
                            <div className="flex flex-col">
                              <small>
                                Garden: {data[`unit-${idx + 1}`].Garden}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Pets allowed"] && (
                            <div className="flex flex-col">
                              <small>
                                Pets Allowed:{" "}
                                {data[`unit-${idx + 1}`]["Pets allowed"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Recreational center"] && (
                            <div className="flex flex-col">
                              <small>
                                Recreational Center:{" "}
                                {data[`unit-${idx + 1}`]["Recreational center"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Fitness center"] && (
                            <div className="flex flex-col">
                              <small>
                                Fitness Center:{" "}
                                {data[`unit-${idx + 1}`]["Fitness center"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.["Access control"] && (
                            <div className="flex flex-col">
                              <small>
                                Access Control:
                                {data[`unit-${idx + 1}`]["Access control"]}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.[
                            "Cleaning and sanitation"
                          ] && (
                            <div className="flex flex-col">
                              <small>
                                Cleaning and Sanitation:{" "}
                                {
                                  data[`unit-${idx + 1}`][
                                    "Cleaning and sanitation"
                                  ]
                                }
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Water && (
                            <div className="flex flex-col">
                              <small>
                                Water: {data[`unit-${idx + 1}`].Water}
                              </small>
                            </div>
                          )}
                          {data[`unit-${idx + 1}`]?.Electricity && (
                            <div className="flex flex-col">
                              <small>
                                Electricity:{" "}
                                {data[`unit-${idx + 1}`].Electricity}
                              </small>
                            </div>
                          )}
                        </div>
                      ))
                    : null}
                </>
              )}

              {data.existingProperty == "yes" && (
                <div className="flex flex-col">
                  <small>Payment style:</small>
                  <span>{data.propertyPaymentStyle}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Landlord Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              {data.existingLandlord == "yes" && (
                <div className="flex flex-col">
                  <small>Landlords type:</small>
                  <span>{data.existingLandlordType}</span>
                </div>
              )}
              {data.existingLandlord == "yes" && (
                <div className="flex flex-col">
                  <small>Landlords name:</small>
                  <span>{data.landlordName}</span>
                </div>
              )}
              {data.existingLandlord == "yes" && (
                <div className="flex flex-col">
                  <small>Landlords Address:</small>
                  <span>{data.landlordAddress}</span>
                </div>
              )}
              {data.existingLandlord == "yes" && (
                <div className="flex flex-col">
                  <small>Landlords Contact:</small>
                  <span>{data.landlordContact}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Property Manager Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>
                  Number of Property Managers:{data.numberOfManagers}
                </small>
              </div>
              {Number(data.numberOfManagers) > 0
                ? Array.from(
                    { length: Number(data.numberOfManagers) },
                    (v, i) => i
                  ).map((_, idx) => (
                    <div key={idx}>
                      <p className="text-lg font-medium underline">{`Property Manager ${
                        idx + 1
                      } Details`}</p>
                      {data[`unit-${idx + 1}`]?.unitName && (
                        <div className="flex flex-col">
                          <small>Property managers name:</small>
                          <span>{data[`unit-${idx + 1}`].unitName}</span>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.unitAddress && (
                        <div className="flex flex-col">
                          <small>Property managers addres:</small>
                          <span>{data[`unit-${idx + 1}`].unitAddress}</span>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.unitContact && (
                        <div className="flex flex-col">
                          <small>Property managers contact:</small>
                          <span>{data[`unit-${idx + 1}`].unitContact}</span>
                        </div>
                      )}
                      <div className="flex flex-col">
                        <small>Property managers function:</small>
                      </div>
                      {data[`unit-${idx + 1}`]?.WiFi && (
                        <div className="flex flex-col">
                          <small>
                            Repair and maintenance:
                            {data[`unit-${idx + 1}`]["Repair and maintenance"]}
                          </small>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.["Electricity and power"] && (
                        <div className="flex flex-col">
                          <small>
                            Electricity and power:{" "}
                            {data[`unit-${idx + 1}`]["Electricity and power"]}
                          </small>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.["Cleaning and sanitation"] && (
                        <div className="flex flex-col">
                          <small>
                            Cleaning and sanitation:
                            {data[`unit-${idx + 1}`]["Cleaning and sanitation"]}
                          </small>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.["Security services"] && (
                        <div className="flex flex-col">
                          <small>
                            Security Services:
                            {data[`unit-${idx + 1}`]["Security services"]}
                          </small>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.[
                        "Reception and front desk"
                      ] && (
                        <div className="flex flex-col">
                          <small>
                            Reception and front desk:{" "}
                            {
                              data[`unit-${idx + 1}`][
                                "Reception and front desk"
                              ]
                            }
                          </small>
                        </div>
                      )}
                      {data[`unit-${idx + 1}`]?.["Water"] && (
                        <div className="flex flex-col">
                          <small>
                            Water: {data[`unit-${idx + 1}`]["Water"]}
                          </small>
                        </div>
                      )}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </article>
      ) : null}
    </article>
  )
}

export default NewPropertySummary
