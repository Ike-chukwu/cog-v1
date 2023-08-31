import Dashboard from "@/components/Layout/Dashboard"
import Image from "next/image"
import { useReducer } from "react"

const MakeAgreements = () => {
  const initState = {
    x: 0,
    y: 0,
    stepForm: [
      {
        title: "General",
        complete: false,
        subtitle: [
          { title: "Type of property", complete: true },
          { title: "Agreement type", complete: false },
        ],
      },
      {
        title: "Property details",
        complete: false,
        subtitle: [
          { title: "Property address", complete: false },
          { title: "Premises physical specifics", complete: false },
        ],
      },
      {
        title: "Landlord details",
        complete: false,
        subtitle: [
          { title: "Import/new", complete: false },
          { title: "Name", complete: false },
          { title: "Address", complete: false },
        ],
      },
      {
        title: "Client details",
        complete: false,
        subtitle: [
          { title: "Import/new", complete: false },
          { title: "Name", complete: false },
          { title: "Address", complete: false },
          { title: "Contact", complete: false },
        ],
      },
      {
        title: "Guarantor details",
        complete: false,
        subtitle: [
          { title: "Name", complete: false },
          { title: "Address", complete: false },
          { title: "Contact", complete: false },
        ],
      },
      {
        title: "Property manager details",
        complete: false,
        subtitle: [
          { title: "Type", complete: false },
          { title: "Name", complete: false },
          { title: "Address", complete: false },
          { title: "Contact", complete: false },
        ],
      },
      {
        title: "Terms",
        complete: false,
        subtitle: [
          { title: "Rental amount", complete: false },
          { title: "Use of property", complete: false },
          { title: "Security deposit", complete: false },
          { title: "Notice", complete: false },
          { title: "Services", complete: false },
          { title: "Improvements, repair and maintenance", complete: false },
        ],
      },
      { title: "Summary", complete: false },
    ],
  }

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return {
          ...state,
          x: action.x,
          y: action.y,
          stepForm: [
            ...state.stepForm.slice(0, action.x),
            {
              ...state.stepForm[action.x],
              subtitle:
                state.stepForm[action.x].subtitle !== undefined
                  ? [
                      ...state.stepForm[action.x].subtitle.slice(0, action.y),
                      {
                        ...state.stepForm[action.x].subtitle[action.y],
                        complete: action.complete,
                      },
                      ...state.stepForm[action.x].subtitle.slice(action.y + 1),
                    ]
                  : undefined,
            },
            ...state.stepForm.slice(action.x + 1),
          ],
        }
      }
      case "DECREMENT": {
        return {
          ...state,
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, initState)

  const components = [
    [
      <TypeOfProperty key={dispatch} dispatch={dispatch} />,
      <AgreementType key={dispatch} dispatch={dispatch} />,
    ],
    [
      <PropertyAddress key={dispatch} dispatch={dispatch} />,
      <PremisesPhysicalSpecifics key={dispatch} dispatch={dispatch} />,
    ],
    [
      <LandlordImport key={dispatch} dispatch={dispatch} />,
      <LandlordName key={dispatch} dispatch={dispatch} />,
      <LandlordAddress key={dispatch} dispatch={dispatch} />,
    ],
    [
      <ClientDetailsImport key={dispatch} dispatch={dispatch} />,
      <ClientDetailsName key={dispatch} dispatch={dispatch} />,
      <ClientDetailsAddress key={dispatch} dispatch={dispatch} />,
      <ClientDetailsContact key={dispatch} dispatch={dispatch} />,
    ],
    [
      <GuarantorDetailsName key={dispatch} dispatch={dispatch} />,
      <GuarantorDetailsAddress key={dispatch} dispatch={dispatch} />,
      <GuarantorDetailsContact key={dispatch} dispatch={dispatch} />,
    ],
    [
      <PropertyManagerDetailsType key={dispatch} dispatch={dispatch} />,
      <PropertyManagerDetailsName key={dispatch} dispatch={dispatch} />,
      <PropertyManagerDetailsAddress key={dispatch} dispatch={dispatch} />,
      <PropertyManagerDetailsContact key={dispatch} dispatch={dispatch} />,
    ],
    [
      <TermsRentalAmount key={dispatch} dispatch={dispatch} />,
      <TermsUseOfProperty key={dispatch} dispatch={dispatch} />,
      <TermsSecurityDeposit key={dispatch} dispatch={dispatch} />,
      <TermsSecurityNotices key={dispatch} dispatch={dispatch} />,
      <TermsSecurityServices key={dispatch} dispatch={dispatch} />,
      <TermsSecurityIrm key={dispatch} dispatch={dispatch} />,
    ],
    [<Summary key={dispatch} />],
  ]

  return (
    <Dashboard>
      <main className="p-10 flex-1">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Agreements</h1>
          </div>
          <div>
            <div className="flex items-center gap-x-12 mb-2">
              <figure>
                <Image
                  src="/assets/images/notification.svg"
                  alt="Notification"
                  width={24}
                  height={24}
                />
              </figure>
              <div className="h-[58px] w-[58px] rounded-[50%] bg-[#E0CA04] grid place-items-center">
                <span className="font-bold text-[20px]">PA</span>
              </div>
            </div>
            <p className="text-[#4B4B4B] text-[14px] text-right">
              User ID: 12345678
            </p>
          </div>
        </nav>
        <h2 className="text-[#B1B1B4] text-[22px]">Set terms</h2>

        <section className="border-[1px] border-[#62909F] py-16 px-5 ml-5 mt-10 flex gap-x-20">
          <div>
            {state.stepForm.map((step, i) => (
              <div key={i}>
                <div className="flex gap-x-4">
                  <div className="flex flex-col w-max">
                    <div
                      className={`grid place-items-center h-[25px] w-[25px] rounded-[50%] text-[12px] ${
                        state.x === i ? "border-[2px]" : "border-[1px]"
                      } border-[#049561] ${
                        step.subtitle !== undefined
                          ? step.subtitle
                              .map((e) => e.complete)
                              .every((e) => e === true)
                            ? "bg-[#049561] text-white"
                            : "text-[#049561]"
                          : "text-[#049561]"
                      }`}
                    >
                      {step.subtitle !== undefined
                        ? step.subtitle
                            .map((e) => e.complete)
                            .every((e) => e === true)
                          ? "✔"
                          : i + 1
                        : i + 1}
                    </div>
                    {i === state.stepForm.length - 1 ? null : (
                      <div className="h-[10px] w-[1px] bg-[#049561] mx-auto"></div>
                    )}
                  </div>
                  <h2 className="font-bold text-[18px] text-[#4B4B4B]">
                    {step.title}
                  </h2>
                </div>
                {step.subtitle !== undefined
                  ? i !== state.stepForm.length - 1
                    ? i === state.x
                      ? step.subtitle.map((subStep, index) => (
                          <div className="flex gap-x-4 pl-[8px]" key={index}>
                            <div className="flex flex-col w-max">
                              <div
                                className={`grid place-items-center h-[9px] w-[9px] text-[9px] border-[1px] border-[#049561] ${
                                  state.y === index || subStep.complete
                                    ? "border-[2px]"
                                    : "border-[1px]"
                                }`}
                              ></div>
                              <div className="h-[10px] w-[1px] bg-[#049561] mx-auto"></div>
                            </div>
                            <h2 className="font-bold text-[12px] mt-[-2px] text-[#4B4B4B] pl-[7px]">
                              {subStep.title}
                            </h2>
                          </div>
                        ))
                      : null
                    : null
                  : null}
              </div>
            ))}
          </div>
          {components[state.x][state.y]}
        </section>
      </main>
    </Dashboard>
  )
}

export default MakeAgreements

const TypeOfProperty = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 0, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property type
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you enter the type of property being sold or rented.
              .
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <label
              htmlFor="cog-radio-flat"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-flat"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Flat/apartment</span>
            </label>
            <label
              htmlFor="cog-radio-storage"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-storage"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Warehouse/storage facility</span>
            </label>
            <label
              htmlFor="cog-radio-whole"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-whole"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Whole home</span>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const AgreementType = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 1, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Agreement Type
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you select the type of agreement type you are having
              with this client. Typically, you would have a sale or rental
              agreement.
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Agreement type</h2>
                <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
                  <p className="text-[#B1B1B4]">Select application type</p>
                  <Image
                    src="/assets/icons/dropdown-icon.svg"
                    alt="dropdown-icon"
                    width={11}
                    height={7}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyAddress = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 1, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property address
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property being
              sold/rented. Ypu can select from existing property data.
            </p>
          </header>
          <section className="pt-10 flex flex-col gap-y-16">
            <label
              htmlFor="cog-radio-property"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-property"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <p>Choose from existing property data</p>
            </label>
            <label
              htmlFor="cog-radio-address"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-address"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <div>
                <h2>Enter new address</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter new address"
                />
              </div>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PremisesPhysicalSpecifics = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Premises physical specifics
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you enter the details of the type of property you
              are selling/renting to this client.
            </p>
          </header>
          <section className="pt-10 flex flex-col gap-y-8">
            <label
              htmlFor="cog-checkbox-living-rooms"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-living-rooms"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Living rooms</p>
            </label>
            <label
              htmlFor="cog-checkbox-bed-rooms"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-bed-rooms"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Bed rooms</p>
            </label>
            <label
              htmlFor="cog-checkbox-kitchen"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-kitchen"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Kitchen</p>
            </label>
            <label
              htmlFor="cog-checkbox-office"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-office"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Office space</p>
            </label>
            <label
              htmlFor="cog-checkbox-garden"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-garden"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Garden</p>
            </label>
            <label
              htmlFor="cog-checkbox-store"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-store"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Store</p>
            </label>
            <label
              htmlFor="cog-checkbox-garage"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-garage"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Garage</p>
            </label>
            <label
              htmlFor="cog-checkbox-furnishings"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-furnishings"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Furnishings</p>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const LandlordImport = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Landlord details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property being
              sold/rented. Ypu can select from existing landlord data.
            </p>
          </header>
          <section className="pt-10 flex flex-col gap-y-16">
            <label
              htmlFor="cog-radio-property"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-property"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <p>Choose from existing landlord data</p>
            </label>
            <label
              htmlFor="cog-radio-address"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-address"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <div>
                <h2>New landlord name</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter name"
                />
              </div>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const LandlordName = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Landlord details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property being
              sold/rented. You can select from existing property data.
            </p>
          </header>
          <section className="pt-10">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Landlord&rsquo;s address</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const LandlordAddress = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 3, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Landlord details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property being
              sold/rented. You can select from existing property data.
            </p>
          </header>
          <section className="pt-10 flex flex-col gap-y-16">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Landlord&rsquo;s contact</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter contact info"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ClientDetailsImport = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 3, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Client details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the client being
              sold/rented. You can select from existing client data. .
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <label
              htmlFor="cog-radio-flat"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-flat"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Choose from existing client data</span>
            </label>
            <label
              htmlFor="cog-radio-storage"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-storage"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>New client</span>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ClientDetailsName = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 3, y: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Client details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the client being
              sold/rented. You can select from existing client data. .
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Enter name</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter new name"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ClientDetailsAddress = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 3, y: 3, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Client details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the client being
              sold/rented. You can select from existing client data. .
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Enter address</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter new address"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ClientDetailsContact = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 4, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Client details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the client being
              sold/rented. You can select from existing client data. .
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Contact info</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter contact info"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const GuarantorDetailsName = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 4, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Guarantor details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the guarantor of the
              client and witness to this transaction.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Guarantor&apos;s name</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter name"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const GuarantorDetailsAddress = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 4, y: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Guarantor details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the guarantor of the
              client and witness to this transaction.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Guarantor&apos;s address</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const GuarantorDetailsContact = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 5, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Guarantor details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the guarantor of the
              client and witness to this transaction.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Guarantor&apos;s contact</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter contact"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyManagerDetailsType = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 5, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property manager details{" "}
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property manager of
              the property.
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Type of property manager</h2>
                <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
                  <p className="text-[#B1B1B4]">select management type</p>
                  <Image
                    src="/assets/icons/dropdown-icon.svg"
                    alt="dropdown-icon"
                    width={11}
                    height={7}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyManagerDetailsName = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 5, y: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property manager details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property manager of
              the property.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Property manager&apos;s name</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter name"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyManagerDetailsAddress = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 5, y: 3, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property manager details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property manager of
              the property.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Property manager&apos;s address</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyManagerDetailsContact = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 6, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property manager details
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the details of the property manager of
              the property.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Property manager&apos;s contact info</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter contact"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsRentalAmount = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 6, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Rental amount
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              Thus is where you provide the legal, service level and financial
              terms of the property transactions.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-12 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Rental amount</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter new address"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Renewal frequency</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsUseOfProperty = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 6, y: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Use of property
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              Thus is where you provide the legal, service level and financial
              terms of the property transactions.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-8 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">Are pets allowed?</h2>
                <div className="max-w-max mt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Is smoking allowed?
                </h2>
                <div className="max-w-max mt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Are home businesses allowed?
                </h2>
                <div className="max-w-max mt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsSecurityDeposit = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 6, y: 3, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Security deposit
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              Thus is where you provide the legal, service level and financial
              terms of the property transactions.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-12 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Are deposits required?
                </h2>
                <div className="max-w-max mt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsSecurityNotices = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 6, y: 4, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Notices
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              Thus is where you provide the legal, service level and financial
              terms of the property transactions.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-12 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Days notice to access premises
                </h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2"
                  placeholder="Number of days"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Days notice to terminate entire agreement
                </h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2"
                  placeholder="Number of days"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsSecurityServices = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 6, y: 5, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Services
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              Thus is where you provide the legal, service level and financial
              terms of the property transactions.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-12 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Responsibility for cost of services
                </h2>
                <div className="pt-4 text-[#B1B1B4]">
                  <span className="p-2 border-[#B1B1B4] border-[1px]">
                    Property owner/manager
                  </span>
                  <span className="p-2 border-[#B1B1B4] border-[1px]">
                    Tenant
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">Service charges</h2>
                <div className="max-w-max pt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TermsSecurityIrm = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 7, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Improvement, repair and maintenance
            </h1>
            <p className="text-[#B1B1B4] text-[15px]">
              This is where you provide the legal, service level and financial
              terms of the property transaction.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-12 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  Are improvements allowed on the property?
                </h2>
                <div className="max-w-max pt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2 className="text-[#4B4B4B] font-bold">
                  With landlord&rsquo;s consent
                </h2>
                <div className="max-w-max pt-4 flex">
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    Yes
                  </label>
                  <label className="w-[43px] h-[33px] bg-[#F5F7F9] text-[#B1B1B4] text-[15px] grid place-items-center border-[1px] border-[#B1B1B4] block">
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Summary = ({ show = true }) => {
  return (
    <section className="flex gap-x-4 flex-1 max">
      <article className="flex flex-col gap-16 flex-1">
        <h3 className="text-3xl text-[#2255A0] font-semibold">
          Agreement summary
        </h3>
        <p className={`hidden ${show && "block"}`}>
          This agreement between the seller and buyer for the sale of the
          property under terms and details stated therein:
        </p>

        <div className="flex flex-col gap-10 w-full">
          <div>
            <h2 className="text-2xl font-medium">Buyer Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Client name:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Client type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Email address:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Phone number:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Address:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Agreement date:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Seller Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Seller name:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Landlord type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Property name:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Phone number:</small>
                <div></div>
              </div>

              <div className="flex flex-col">
                <small>Address:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Property Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Property type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Property address:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Agreement type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Premises physical specifics:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Terms</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Purchase amount:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Other fees:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Payment due date:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Security deposit:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Title and Transfer:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Services:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Use of property:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Physical condition:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Default:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Closing:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Property Manager Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Property manager name:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Property manager type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Email address:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Phone number:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Address:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Property Manager Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 gap-6">
              <p></p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Governing Law</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 gap-6">
              <p></p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Witness/Guarantor Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Guarantor name:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Email address:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Phone number:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Address:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Acknowledgement date:</small>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {show && (
        <div className="flex flex-col gap-y-4">
          <button className="bg-[#386A8B] text-[15px] items-center flex w-[170px] text-white rounded-[4px] pl-6 py-2 pr-8">
            <span className="flex-1 text-center">Submit</span>
          </button>
          <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] rounded-[4px] pl-6 py-2 pr-8">
            <span className="flex-1 text-center">Edit</span>
          </button>
        </div>
      )}
    </section>
  )
}
