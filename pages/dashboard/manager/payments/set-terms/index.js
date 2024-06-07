import Dashboard from "@/components/Layout/Dashboard"
import Header from "@/components/UI/Dashboard/Header"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import Duedate from "@/components/manager/payments/due-date"
import PaymentDetailsInPayments from "@/components/manager/payments/stages/client-details"
import InnerClientDetails from "@/components/manager/payments/stages/landlord-details"
import PropertyDetails from "@/components/manager/payments/stages/property-details"
import NewPropertySummary from "@/components/manager/payments/stages/summary"
import { useRouter } from "next/router"

import { Fragment, useState } from "react"
import { FormProvider, useForm, useWatch } from "react-hook-form"

const SetTermsForm = () => {
  const [activeStage, setActiveStage] = useState(1)
  const [activeSubStage, setActiveSubStage] = useState(0)

  const saveToLocalstorage = (data) => {
    localStorage.setItem("set-terms-payment-data", JSON.stringify(data))
  }
  const router = useRouter()
  const methods = useForm()
  const { register, control, handleSubmit, watch, setValue } = methods

  const propertyDetailsIfPropertyIsNew =
    watch("existingProperty") === "yes"
      ? []
      : ["Property name", "Application type", "Unit details", "Payment style"]

  const landlordDetailsIfPropertyIsNew =
    watch("existingClient") === "yes"
      ? []
      : ["Type", "Name", "Address", "Contact"]

  const stagesData = [
    {
      stage: "Property details",
      //xheck for '-'
      subStages: [...propertyDetailsIfPropertyIsNew],
    },
    {
      stage: "Client details",
      //xheck for '-'
      subStages: [...landlordDetailsIfPropertyIsNew],
    },
    {
      stage: "Payment details",
      subStages: ["Payment title", "Amount", "Payment plan"],
    },
    {
      stage: "Due date",
      subStages: [],
    },
    {
      stage: "Summary",
      subStages: [],
    },
  ]
  const handleNextSubStage = () => {
    if (activeSubStage < stagesData[activeStage - 1].subStages.length) {
      setActiveSubStage((prevSubStage) => prevSubStage + 1)
    } else handleNextStage()
  }

  const handlePreviousSubStage = () => {
    if (activeStage == 3 && activeSubStage == 1) {
      const currentClientStatus = JSON.parse(
        localStorage.getItem("set-terms-payment-data")
      )

      if (currentClientStatus.existingClient == "yes") {
        setActiveSubStage(0)
      } else {
        setActiveSubStage(stagesData[2 - 1].subStages.length)
      }

      setActiveStage(activeStage - 1)
    } else if (activeStage == 4 && activeSubStage == 1) {
      setActiveSubStage(stagesData[3 - 1].subStages.length)
      setActiveStage(activeStage - 1)
    } else {
      if (activeSubStage > 0) {
        setActiveSubStage((prevSubStage) => prevSubStage - 1)
        return
      } else {
        handlePreviousStage()
      }
    }
  }

  const handleNextStage = () => {
    if (activeStage < stagesData.length) {
      setActiveStage((prevStage) => prevStage + 1)
      if (activeStage == 1) {
        setActiveSubStage(0)
      } else {
        setActiveSubStage(1)
      }
    }
  }

  const handlePreviousStage = () => {
    if (activeStage > 0) {
      setActiveStage((prev) => {
        const prevStage = prev - 1
        setActiveSubStage(stagesData[prevStage - 1].subStages.length)
        return prevStage
      })
    }
  }

  const formValues = useWatch({ control })

  const onSubmit = (data) => {
    if (window !== undefined)
      localStorage.setItem("set-terms-payment-data", JSON.stringify(data))
  }

  const renderForms = (activeStage) => {
    switch (activeStage) {
      case 1:
        return (
          <PropertyDetails
            register={register}
            setValue={setValue}
            activeSubStage={activeSubStage}
            subStages={stagesData[1].subStages}
          />
        )
      case 2:
        return (
          <InnerClientDetails
            register={register}
            setValue={setValue}
            activeSubStage={activeSubStage}
            subStages={stagesData[1].subStages}
          />
        )

      case 3:
        return (
          <PaymentDetailsInPayments
            register={register}
            subStage={activeSubStage}
          />
        )

      case 4:
        return <Duedate />
      case 5:
        return <NewPropertySummary />
    }
  }
  const currentForm = renderForms(activeStage)

  return (
    <Dashboard className="p-8 grid min-h-full max-w-full">
      <Header header="Payments" subHeader="Set terms" name="Anna Hunt" />
      {/* Main */}
      <FormProvider {...methods}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`m-8 mb-0 p-8 border border-primary flex justify-between h-[80vh]`}
          >
            <ProgressBar
              stagesData={stagesData}
              activeStage={activeStage}
              activeSubStage={activeSubStage}
            />

            <div className="border flex flex-col border-primary w-3/5 p-6 mx-auto overflow-y-scroll">
              <Fragment>{currentForm}</Fragment>

              {activeStage !== 5 && (
                <div className="flex gap-3 items-end justify-end mt-auto">
                  <button
                    type="button"
                    disabled={activeStage === 1 && activeSubStage === 0}
                    onClick={handlePreviousSubStage}
                    className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-70"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      saveToLocalstorage(formValues)
                      if (activeStage >= 4) {
                        router.push(
                          "/dashboard/manager/payments/create-invoice"
                        )
                      } else {
                        handleNextSubStage()
                      }
                    }}
                    className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>

            {activeStage === 5 && (
              <div className="ml-2 flex flex-col gap-3">
                <button
                  onClick={handleNextSubStage}
                  className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
                >
                  Submit
                </button>
                <button
                  onClick={handlePreviousStage}
                  className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </Dashboard>
  )
}

export default SetTermsForm
