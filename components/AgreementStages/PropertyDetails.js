import { Fragment } from "react";

const PropertyDetails = ({
  subStage,
  propertyAddress,
  setPropertyAddress,
  setPremisesChecklist,
  premisesChecklist,
  unitID,
  setUnitID,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <PropertyAddress
            propertyAddress={propertyAddress}
            setPropertyAddress={setPropertyAddress}
          />
        );
      case 2:
        return (
          <PremisesChecklist
            premisesChecklist={premisesChecklist}
            setPremisesChecklist={setPremisesChecklist}
          />
        );
      case 3:
        return <UnitID unitID={unitID} setUnitID={setUnitID} />;
      default:
        return (
          <PropertyAddress
            propertyAddress={propertyAddress}
            setPropertyAddress={setPropertyAddress}
          />
        );
    }
  };
  return getStage();
};

export default PropertyDetails;

const Wrapper = ({ children, header, subHead }) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-xl font-semibold opacity-70">{header}</h3>
        <p className="opacity-60 mt-4">{subHead}</p>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  );
};

const PropertyAddress = ({ propertyAddress, setPropertyAddress }) => {
  return (
    <Wrapper
      header="Property address"
      subHead="This is where you provide the details of the property being sold/rented. You can select from existing property data."
    >
      <div>
        <div className="mb-10">
          <input
            type="radio"
            name="type"
            value="existing"
            className="cursor-pointer mr-2"
            checked={propertyAddress === "existing"}
            onChange={(e) => setPropertyAddress(e.target.value)}
          />
          <span>Choose from existing property data</span>
        </div>

        <div>
          <ul className="list-disc ml-6">
            <li>
              <span>Enter new address</span>
            </li>
          </ul>
          <br />
          <input
            type="text"
            name="propertyAddress"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            placeholder="Enter new address"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 ml-6"
          />
        </div>
      </div>
    </Wrapper>
  );
};

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
  );
};

const PremisesChecklist = ({ premisesChecklist, setPremisesChecklist }) => {
  const handleInputChange = (event) => {
    const { name, checked } = event.target;

    setPremisesChecklist((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const checkboxData = [
    { name: "livingRoom", label: "Living rooms" },
    { name: "bedroom", label: "Bed room" },
    { name: "kitchen", label: "Kitchen" },
    { name: "officeSpace", label: "Office space" },
    { name: "garden", label: "Garden" },
    { name: "store", label: "Store" },
    { name: "garage", label: "Garage" },
    { name: "furnishing", label: "Furnishing" },
    { name: "parkingSpace", label: "Parking Space" },
    { name: "restrooms", label: "Rest rooms" },
  ];

  return (
    <Wrapper
      header="Premises physical specifics"
      subHead="This is where you enter the details of the type of property you are selling/renting to this client."
    >
      <div className="grid gap-4">
        {checkboxData.map((item) => (
          <div key={item.name} className="mb-2.5">
            <input
              name={item.name}
              type="checkbox"
              checked={premisesChecklist[item.name]}
              onChange={handleInputChange}
              className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2 "
            />
            <span className="mt-[-3px]">{item.label}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
