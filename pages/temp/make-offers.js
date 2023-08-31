import Image from "next/image"
import React, { useReducer, useState } from "react"
import Dashboard from "../../components/Layout/Dashboard"
import {
  FiDownload,
  FiStar,
  FiSend,
  FiArrowLeftCircle,
  FiXCircle,
  FiMail,
  FiLink2,
  FiAlertOctagon,
} from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

const MakeOffers = () => {
  const initState = {
    pagination: 0,
    stepForm: [
      { title: "Property details", complete: false },
      { title: "Client details", complete: false },
      { title: "Amount", complete: false },
      { title: "Due date", complete: false },
      { title: "Summary", complete: false },
    ],
  }

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return {
          ...state,
          pagination: action.pagination,
          stepForm: [
            ...state.stepForm.slice(0, action.pagination - 1),
            {
              ...state.stepForm[action.pagination - 1],
              complete: action.complete,
            },
            ...state.stepForm.slice(action.pagination),
          ],
        }
      }
      case "DECREMENT": {
        return {
          ...state,
          pagination: action.pagination,
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, initState)

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", pagination: state.pagination - 1 })
  }

  const components = [
    <PropertyDetails key={dispatch} dispatch={dispatch} />,
    <ClientDetails
      key={dispatch}
      dispatch={dispatch}
      decrementHandler={decrementHandler}
    />,
    <Amount
      key={dispatch}
      dispatch={dispatch}
      decrementHandler={decrementHandler}
    />,
    <DueDate
      key={dispatch}
      dispatch={dispatch}
      decrementHandler={decrementHandler}
    />,
    <Summary
      key={dispatch}
      dispatch={dispatch}
      decrementHandler={decrementHandler}
    />,
  ]

  return (
    <Dashboard>
      <main className="p-10 flex-1">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Offers</h1>
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
              <div className="flex gap-x-4" key={i}>
                <div className="flex flex-col w-max">
                  <div
                    className={`grid place-items-center h-[25px] w-[25px] rounded-[50%] text-[12px] ${
                      state.pagination === i
                        ? "border-[2px] text-[#049561]"
                        : step.complete
                        ? "bg-[#049561] text-white"
                        : "border-[1px] text-[#049561]"
                    } border-[#049561]`}
                  >
                    {state.pagination === i || step.complete === false
                      ? i + 1
                      : "✔"}
                  </div>
                  {i === state.stepForm.length - 1 ? null : (
                    <div className="h-[15px] w-[1px] bg-[#049561] mx-auto"></div>
                  )}
                </div>
                <h2 className="font-bold text-[18px] text-[#4B4B4B]">
                  {step.title}
                </h2>
              </div>
            ))}
          </div>
          {components[state.pagination]}
        </section>
      </main>
    </Dashboard>
  )
}

export default MakeOffers

const PropertyDetails = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
          Property details
        </h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly select the property that you want to send an offer for.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Choose from existing property data</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
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

const ClientDetails = ({ dispatch, decrementHandler }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
          Client details
        </h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly select the prospect that you want to send an offer to.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Choose from existing prospect data</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name type</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
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

const Amount = ({ dispatch, decrementHandler }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 3, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">Amount</h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly enter the property purchase/rental amount that you want to send
          an offer for.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Enter amount</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name type</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
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

const DueDate = ({ dispatch, decrementHandler }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 4, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">DueDate</h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly enter the payment date for your offer.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Enter due date</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name type</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
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

// const Summary = ({decrementHandler}) => {

//     return (
//         <section className="flex gap-x-4 flex-1">
//             <div className="border-[1px] border-[#62909F] p-6 flex-1">
//                 <div>
//                     <header>
//                         <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-5">Offer Summary</h1>
//                         <div className="grid grid-cols-2 gap-x-4 gap-y-4">
//                             <p>Manager name:</p>
//                             <p>Issue date:</p>
//                             <p>Reference number:</p>
//                             <p>Due date:</p>
//                             <p>Issue date:</p>
//                         </div>
//                     </header>
//                     <ul className="pt-20 flex flex-col gap-y-8">
//                         <li className="relative pl-5">
//                             <div className="bg-[#19191A] h-[6px] w-[6px] top-2 absolute left-0"></div>
//                             <div>
//                                 <h2 className="text-[#19191A] font-bold mb-3">Property details</h2>
//                                 <div className="grid grid-cols-2">
//                                     <p>Name</p>
//                                     <p>Ikorodu property</p>
//                                 </div>
//                                 <div className="grid grid-cols-2">
//                                     <p>Property type</p>
//                                     <p>Warehouse</p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="relative pl-5">
//                             <div className="bg-[#19191A] h-[6px] w-[6px] top-2 absolute left-0"></div>
//                             <div>
//                                 <h2 className="text-[#19191A] font-bold mb-3">Client name</h2>
//                                 <p>Ajibola Quadri</p>
//                             </div>
//                         </li>
//                         <li className="relative pl-5">
//                             <div className="bg-[#19191A] h-[6px] w-[6px] top-2 absolute left-0"></div>
//                             <div>
//                                 <h2 className="text-[#19191A] font-bold mb-3">Amount</h2>
//                                 <div className="grid grid-cols-2">
//                                     <p>Price</p>
//                                     <p className="font-bold text-[#19191A]">&#x20A6;350,000.00</p>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex flex-col gap-y-4">
//                 <button className="bg-[#386A8B] text-[15px] items-center flex w-[170px] text-white rounded-[4px] pl-6 py-2 pr-8"><Image
//                     src="/assets/icons/send-icon.svg"
//                     alt="send-icon"
//                     width={15}
//                     height={15}
//                 /><span className="flex-1 text-center">Send</span></button>
//                 <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] rounded-[4px] pl-6 py-2 pr-8"><Image
//                     src="/assets/icons/download-icon.svg"
//                     alt="download-icon"
//                     width={15}
//                     height={15}
//                 /><span className="flex-1 text-center">Download</span></button>
//                 <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] rounded-[4px] pl-6 pr-8 py-2 text-center"><Image
//                     src="/assets/icons/star-icon.svg"
//                     alt="star-icon"
//                     width={15}
//                     height={15}
//                 /><span className="flex-1 text-center">Bookmark</span></button>
//                 <button className="border-[#386A8B] border-[1px] text-[15px] items-center flex w-[170px] rounded-[4px] pl-6 py-2 pr-8" onClick={decrementHandler}><Image
//                     src="/assets/icons/back-icon.svg"
//                     alt="back-icon"
//                     width={15}
//                     height={15}
//                 /><span className="flex-1 text-center">Back</span></button>
//             </div>
//         </section>
//     )
// }
export const Summary = ({ decrementHandler, showOpts = true }) => {
  const [show, setShow] = useState(false)

  return (
    <section className="flex gap-x-4 flex-1">
      <article className="flex flex-col gap-16 flex-1">
        <h3 className="text-3xl text-[#2255A0] font-semibold">Offer summary</h3>

        <div className="flex flex-col gap-10 w-full">
          <div>
            <h2 className="text-2xl font-medium">Client Information</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Name:</small>
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
                <small>Gender:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Religion:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Tribe:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Occupation:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Age:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Property Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Application type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Property type:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Property name:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Location:</small>
                <div></div>
              </div>

              <div className="flex flex-col">
                <small>Unit ID:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Unit features:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Potential move in date:</small>
                <span></span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Offer Details</h2>

            <div className="border border-borderGrey rounded-lg p-4 mt-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <small>Purchase fee:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Service charges:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Issue date:</small>
                <span></span>
              </div>

              <div className="flex flex-col">
                <small>Due date:</small>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {showOpts && (
        <div className="flex flex-col gap-y-4">
          <button
            className="bg-[#386A8B] text-[15px] items-center flex w-[170px] text-white rounded-[4px] pl-6 py-2 pr-8"
            onClick={() => setShow(true)}
          >
            <FiSend />
            <span className="flex-1 text-center">Send</span>
          </button>
          <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] text-primary rounded-[4px] pl-6 py-2 pr-8">
            <FiDownload />
            <span className="flex-1 text-center">Download</span>
          </button>
          <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] text-primary rounded-[4px] pl-6 py-2 pr-8">
            <FiStar />
            <span className="flex-1 text-center">Bookmark</span>
          </button>
          <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] text-primary rounded-[4px] pl-6 py-2 pr-8">
            <FiArrowLeftCircle />
            <span className="flex-1 text-center">Back</span>
          </button>
        </div>
      )}
      {show && <Modal setShow={setShow} />}
    </section>
  )
}

const Modal = ({ setShow }) => {
  const [tab, setTab] = useState(1)
  const [share, setShare] = useState(undefined)

  const tabs = ["Copy offer link", "Share offer notice"]
  const shares = [<FiMail key="mail" />, <FaWhatsapp key="whatsapp" />]

  return (
    <div className="absolute inset-0 bg-[#B1B1B478] grid place-items-center">
      <div className="h-[45%] w-2/5 p-4 bg-white">
        <div className="flex justify-between">
          <div className="flex gap-3">
            {tabs.map((tb, i) => (
              <button
                key={i}
                className={`${i === tab && "text-primary underline"}`}
                onClick={() => setTab(i)}
              >
                {tb}
              </button>
            ))}
          </div>

          <button
            className="text-2xl text-primary"
            onClick={() => setShow(false)}
          >
            <FiXCircle />
          </button>
        </div>

        <div className="py-6 px-12">
          {tab === 0 && (
            <div className="flex items-center gap-3">
              <FiLink2 className="text-2xl" />
              <span className="bg-[#9FF1CA] rounded-md p-3 w-3/5">
                arc.payme/PamelaAlex
              </span>
              <button className="p-3 bg-primary text-white rounded-md">
                Copy link
              </button>
            </div>
          )}
          {tab === 1 && (
            <div className="grid gap-4">
              <div className="flex gap-4 text-2xl">
                {shares.map((shr, i) => (
                  <button
                    key={i}
                    className={`p-2 rounded-md ${
                      i === share ? "text-white bg-primary" : "bg-[#D2F4FF]"
                    }`}
                    onClick={() => setShare(i)}
                  >
                    {shr}
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                {share === 0 && (
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="py-2 px-4 border border-primary outline-none grow"
                  />
                )}
                {share === 1 && (
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter phone number"
                    className="py-2 px-4 border border-primary outline-none grow"
                  />
                )}

                {share !== undefined && (
                  <button className="py-2 px-4 bg-primary text-white rounded-md">
                    Send link
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-2 items-center justify-end py-3 px-2 bg-[#D2F4FF] rounded-md w-fit mx-auto mt-4">
          <FiAlertOctagon className="text-lg" />
          <span className="text-sm">
            Viewers of this payment link would have access to limited
            information
          </span>
        </div>
      </div>
    </div>
  )
}
