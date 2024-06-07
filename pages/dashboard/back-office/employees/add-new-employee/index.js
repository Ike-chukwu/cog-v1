import Dashboard from "@/components/Layout/Dashboard"
import Header from "@/components/UI/Dashboard/Header"
import ProgressBar from "@/components/UI/Dashboard/ProgressBar"
import EmployeeDetails from "@/components/manager/employees/stages/employee-details"
import PaymentDetailsInEmployees from "@/components/manager/employees/stages/payment-details"
import EmployeeSummary from "@/components/manager/employees/stages/summary"
import Timeframe from "@/components/manager/employees/stages/time-frame"
import { useRouter } from "next/router"
import { Fragment,  useState } from "react"
import { FormProvider, useForm, useWatch } from "react-hook-form"

const SetTermsForm = () => {
  const [activeStage, setActiveStage] = useState(1)
  const [activeSubStage, setActiveSubStage] = useState(1)

  const saveToLocalstorage = (data) => {
    localStorage.setItem("employees-data", JSON.stringify(data))
  }
  const router = useRouter()
  const methods = useForm()
  const {
    register,
    control,
    handleSubmit,
    setValue,
  } = methods

  const employeeDetailsArray = [
    "Personal details",
    "Job information",
    "Compensation details",
  ]

  const timeFrameArray = []

  const stagesData = [
    {
      stage: "Employee details",
      //xheck for '-'
      subStages: [...employeeDetailsArray],
    },
    {
      stage: "Time frame",
      //xheck for '-'
      subStages: [...timeFrameArray],
    },
    {
      stage: "Payment details",
      subStages: ["Account details", "Salary"],
    },
    {
      stage: "Summary",
      subStages: [],
    },
    // {
    //   stage: "Summary",
    //   subStages: [],
    // },
  ]
  const handleNextSubStage = () => {
    if (activeSubStage < stagesData[activeStage - 1].subStages.length) {
      setActiveSubStage((prevSubStage) => prevSubStage + 1)
    } else handleNextStage()
  }

  const handlePreviousSubStage = () => {
    if (activeStage == 1 && activeSubStage == 1) {
      return
    }
    if (activeStage == 3 && activeSubStage == 1) {
      setActiveSubStage(0)
      setActiveStage(activeStage - 1)
      return
    }
    if (activeStage == 4 && activeSubStage == 1) {
      setActiveStage(activeStage - 1)
      setActiveSubStage(stagesData[3 - 1].subStages.length)
      return
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
      localStorage.setItem("employees-data", JSON.stringify(data))
  }

  const renderForms = (activeStage) => {
    switch (activeStage) {
      case 1:
        return (
          <EmployeeDetails
            register={register}
            setValue={setValue}
            activeSubStage={activeSubStage}
            subStages={stagesData[1].subStages}
          />
        )
      case 2:
        return (
          <Timeframe
            register={register}
            setValue={setValue}
            activeSubStage={activeSubStage}
            subStages={stagesData[1].subStages}
          />
        )

      case 3:
        return (
          <PaymentDetailsInEmployees
            register={register}
            subStage={activeSubStage}
          />
        )

      case 4:
        return <EmployeeSummary />
    }
  }
  const currentForm = renderForms(activeStage)

  return (
    <Dashboard className="p-8 grid min-h-full max-w-full">
      <Header header="Back-office" subHeader="Set terms" name="Anna Hunt" />
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
          </div>{" "}
          {/* <button
            type="submit"
            className="bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary"
          >
            Submit
          </button> */}
        </form>
      </FormProvider>
    </Dashboard>
  )
}

export default SetTermsForm
