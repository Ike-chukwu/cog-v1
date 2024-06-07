import Close from "@/public/assets/icons/Close"
import Exclamation from "@/public/assets/icons/Exclamation"
import LinkIcon from "@/public/assets/icons/LinkIcon"
import Mail from "@/public/assets/icons/Mail"
import WhatsappIcon from "@/public/assets/icons/WhatsappIcon"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

const PaymentModal = ({ toggleFilterModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [selectedCategory, setSelectedCategory] = useState("share")
  const [currentState, setCurrentState] = useState("mail")
  const [selectedProperty, setSelectedProperty] = useState("")
  const [linkSharedStatus, setLinkSharedStatus] = useState(false)
  const [linkCopiedStatus, setLinkCopiedStatus] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [btnState, setBtnState] = useState(false)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const onSubmit = (data) => {
    console.log(data)
    setLinkSharedStatus(true)
  }

  const handleApplyFilter = () => {
    toggleFilterModal()

    // Apply filter logic here
    console.log("Applying filter:", {
      selectedCategory,
      selectedProperty,
      startDate,
      endDate,
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setLinkSharedStatus(false)
    }, 2000)
  }, [linkSharedStatus])

  useEffect(() => {
    setTimeout(() => {
      setLinkCopiedStatus(false)
    }, 2000)
  }, [linkCopiedStatus])

  useEffect(() => {
    if (inputValue == "") {
      setBtnState(false)
    } else {
      setBtnState(true)
    }
  }, [inputValue])

  return (
    <div className="bg-white rounded-lg shadow-lg py-6 px-10 w-[550px] flex flex-col gap-12 items-start">
      <>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-8 text-[#B1B1B4]">
            <span
              onClick={() => handleCategoryChange("copy")}
              className={
                "text-[14px] cursor-pointer  " +
                (selectedCategory == "copy" &&
                  "border-b-4 border-[#62909f] text-[#62909f] text-bold")
              }
            >
              Copy notice link
            </span>
            <span
              onClick={() => handleCategoryChange("share")}
              className={
                "text-[14px] cursor-pointer " +
                (selectedCategory == "share" &&
                  "border-b-4 border-[#62909f] text-[#62909f] text-bold")
              }
            >
              Share payment notice
            </span>
          </div>
          <div className="cursor-pointer" onClick={() => toggleFilterModal()}>
            <Close />
          </div>
        </div>
        {selectedCategory == "share" ? (
          <>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-2 w-full">
                <div
                  className={
                    "p-1 bg-[#d2f4ff] rounded-lg cursor-pointer " +
                    (currentState == "mail" ? "bg-[#386a8b]" : null)
                  }
                  onClick={() => setCurrentState("mail")}
                >
                  <Mail color={currentState == "mail" ? "black" : "white"} />
                </div>
                <div
                  className={
                    "p-1 bg-[#d2f4ff] rounded-lg cursor-pointer " +
                    (currentState == "whatsapp" ? "bg-[#386a8b]" : null)
                  }
                  onClick={() => setCurrentState("whatsapp")}
                >
                  <WhatsappIcon
                    color={currentState == "whatsapp" ? "black" : "white"}
                  />
                </div>
              </div>
              <form
                className=" flex items-center justify-between gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  value={inputValue}
                  // {...register("enteredValue")}
                  className="p-2 border-[2px] w-[60%] border-[#514A9b]"
                  placeholder={
                    currentState == "mail"
                      ? "Email Address"
                      : currentState == "whatsapp"
                      ? "Phone number"
                      : ""
                  }
                />
                <button
                  disabled={!btnState}
                  className={
                    "px-7 py-3 rounded-lg text-white bg-[#4b4b4b] self-end " +
                    (btnState ? "opacity-1" : "opacity-[0.5]")
                  }
                >
                  Send link
                </button>
              </form>
            </div>
            <div className="py-2 px-3 bg-[#d2f4ff] w-full rounded-lg flex gap-2 items-center">
              <Exclamation />
              <span className="text-[12px] text-bold">
                Viewers of this payment link would have access to limited
                information
              </span>
            </div>
            {linkSharedStatus && btnState && (
              <button className="px-7 py-3 rounded-lg text-white bg-[#4b4b4b] self-center">
                Link shared
              </button>
            )}
          </>
        ) : (
          <>
            <div className=" flex w-full items-center justify-between gap-4">
              <div className="p-1 bg-[#f6f5ff] rounded-lg">
                <LinkIcon />
              </div>
              <div className="py-3 px-3 bg-[#9ff1ca] w-[60%] rounded-lg flex gap-2 items-center">
                <span className="text-bold">cog.payme/PamelaAlex</span>
              </div>
              <button
                disabled={!btnState}
                className={
                  "px-4 py-3 rounded-lg text-bold text-white bg-[#4b4b4b] self-end " +
                  (btnState ? "opacity-1" : "opacity-[0.5]")
                }
                onClick={() => setLinkCopiedStatus(true)}
              >
                Copy link
              </button>
            </div>
            <div className="py-2 px-3 bg-[#d2f4ff] w-full rounded-lg flex gap-2 items-center">
              <Exclamation />
              <span className="text-[12px] text-bold">
                Viewers of this payment link would have access to limited
                information
              </span>
            </div>
            {linkCopiedStatus &&
              btnState(
                <button className="px-7 py-3 rounded-lg text-white bg-[#4b4b4b] self-center">
                  Link copied
                </button>
              )}
          </>
        )}
      </>
    </div>
  )
}

export default PaymentModal
