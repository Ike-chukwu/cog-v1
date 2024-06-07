import Dashboard from "@/components/Layout/Dashboard"
import Header from "@/components/UI/Dashboard/Header"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import General from "@/components/manager/property/stages/general"
import PropertyManagerDetailsInAddANewProperty from "@/components/manager/property/stages/guarantor-details"
import InnerLandlordDetails from "@/components/manager/property/stages/landlord-details"
import PropertyDetails from "@/components/manager/property/stages/property-details"
import NewPropertySummary from "@/components/manager/property/stages/summary"

import { Fragment, useState } from "react"
import { FormProvider, useForm, useWatch } from "react-hook-form"

const AddNewClient = () => {
  const [activeStage, setActiveStage] = useState(1)
  const [activeSubStage, setActiveSubStage] = useState(1)

  const saveToLocalstorage = (data) => {
    localStorage.setItem("manager-new-property-data", JSON.stringify(data))
  }

  const methods = useForm()
  const { register, control, handleSubmit, watch, setValue } = methods

  const propertyDetailsIfPropertyIsNew =
    watch("existingProperty") === "yes"
      ? ["Property name", "Application type", "Unit details", "Payment style"]
      : []

  const landlordDetailsIfPropertyIsNew =
    watch("existingLandlord") === "yes"
      ? ["Type", "Name", "Address", "Contact"]
      : []

  const stagesData = [
    {
      stage: "General",
      subStages: ["Types of property", "Property geolocation"],
    },
    {
      stage: "Property details",
      //xheck for '-'
      subStages: [...propertyDetailsIfPropertyIsNew],
    },
    {
      stage: "Landlord details",
      //xheck for '-'
      subStages: [...landlordDetailsIfPropertyIsNew],
    },
    {
      stage: "Property mananger details",
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
    if (activeSubStage > 0) {
      setActiveSubStage((prevSubStage) => prevSubStage - 1)
    } else {
      // if (activeSubStage == 0) {
      handlePreviousStage()
    }
  }

  const handleNextStage = () => {
    if (activeStage < stagesData.length) {
      setActiveStage((prevStage) => prevStage + 1)
      if ((activeStage == 1) | (activeStage == 2)) {
        setActiveSubStage(0)
      } else {
        setActiveSubStage(1)
      }
    }
  }

  const handlePreviousStage = () => {
    if (activeStage > 0) {
      setActiveStage((prev) => {
        // this is the previous stage
        const prevStage = prev - 1

        /**
         * remember stagesData is zero indexed so you have to go back one step further to match.
         * prevStage to it's corresponding index in the array
         */
        setActiveSubStage(stagesData[prevStage - 1].subStages.length)
        return prevStage
      })
    }
  }

  const formValues = useWatch({ control })

  const onSubmit = (data) => {
    if (window !== undefined)
      localStorage.setItem("manager-new-property-data", JSON.stringify(data))
  }

  const renderForms = (activeStage) => {
    switch (activeStage) {
      case 1:
        return <General register={register} subStage={activeSubStage} />

      case 2:
        return (
          <PropertyDetails
            register={register}
            setValue={setValue}
            activeSubStage={activeSubStage}
            subStages={stagesData[1].subStages}
          />
        )
      case 3:
        return (
          <InnerLandlordDetails
            register={register}
            setValue={setValue}
            activeSubStage={activeSubStage}
            subStages={stagesData[1].subStages}
          />
        )

      case 4:
        return (
          <PropertyManagerDetailsInAddANewProperty
            setValue={setValue}
            register={register}
          />
        )

      case 5:
        return <NewPropertySummary />
    }
  }
  const currentForm = renderForms(activeStage)

  return (
    <Dashboard className="p-8 grid min-h-full max-w-full">
      <Header header="Properties" subHeader="Add property" name="Anna Hunt" />
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
                    disabled={activeStage === 1 && activeSubStage === 1}
                    onClick={handlePreviousSubStage}
                    className="text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-70"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleNextSubStage()
                      saveToLocalstorage(formValues)
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

export default AddNewClient
