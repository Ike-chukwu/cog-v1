"use client"
import Dashboard from "@/components/Layout/Dashboard"
import WorkScopeDetail from "@/components/manager/services/works-scope-detail"
import Image from "next/image"
import { useEffect, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import { useForm } from "react-hook-form"
import VendorInput from "@/components/manager/services/vendor-input"
import { useRouter } from "next/router"

export default function AddServicePage() {
  const methods = useForm()
  const { register, handleSubmit, watch, reset } = methods

  const currencySymbols = ["₦", "$", "€", "£", "¥"]
  const [vendorList, setVendorList] = useState([
    { id: uuidV4(), value: "", deleteIcon: false },
  ])
  const [workScopeDetails, setWorkScopeDetail] = useState([])
  const [total, setTotal] = useState(0)
  const router = useRouter()

  // Iterate over vendorList and retrieve input values
  const addNewVendor = () => {
    setVendorList([
      ...vendorList,
      { id: uuidV4(), value: "", deleteIcon: true },
    ])
  }

  const onSubmit = (data) => {
    if (window !== undefined) {
      const workScope = data["workScope"]
      const currency = data["currency"]
      const amount = data["amount"]
      const propertyName = data["propertyName"]
      const unitId = data["unitId"]
      const dueDate = data["dueDate"]
      setWorkScopeDetail([
        ...workScopeDetails,
        { wScope: workScope, currentCurrency: currency, amountOfMoney: amount },
      ])
      localStorage.setItem("add-service-data", JSON.stringify(data))
      localStorage.setItem("vendor-list", JSON.stringify(vendorList))
      if (
        JSON.parse(localStorage.getItem("details-collected-at-once"))?.unitId ==
          "" ||
        JSON.parse(localStorage.getItem("details-collected-at-once"))?.unitId ==
          null
      ) {
        localStorage.setItem(
          "details-collected-at-once",
          JSON.stringify({
            unitId: data.unitId,
            dueDate: data.dueDate,
            propertyName: data.propertyName,
          })
        )
      }
      reset()
      setVendorList([{ id: uuidV4(), value: "", deleteIcon: false }])
    }
  }

  useEffect(() => {
    if (window !== undefined) {
      const data = JSON.parse(localStorage.getItem("list-of-workscope"))
      setWorkScopeDetail(data)
    }
  }, [])

  useEffect(() => {
    if (window !== undefined) {
      localStorage.setItem(
        "list-of-workscope",
        JSON.stringify(workScopeDetails)
      )
      const total = workScopeDetails.reduce(
        (acc, obj) => acc + parseInt(obj.amountOfMoney),
        0
      )
      localStorage.setItem("totalAmount", JSON.stringify(total))
      setTotal(total)
    }
  }, [workScopeDetails])

  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Services</h1>
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

        <div className="flex gap-6 mb-9">
          <h1 className="font-medium text-[#4B4B4B]">Add service</h1>
        </div>

        <div className="border border-[#62909F] py-9 px-7 min-h-[100vh] flex flex-col gap-4 items-start">
          <button
            className="px-10 py-3 rounded-lg text-white bg-[#386A8B] self-end"
            onClick={() =>
              router.push("/dashboard/manager/services/preview-invoice")
            }
          >
            Preview
          </button>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-[500px] mx-auto items-start"
          >
            <span>To:</span>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Vendor Name</p>
              <div className="w-full flex flex-col gap-1">
                {vendorList.map((vendor, index) => {
                  if (index == 0) {
                    return (
                      <VendorInput
                        key={index}
                        deleteIcon={vendor.deleteIcon}
                        vendorList={vendorList}
                        value={vendor.value}
                        setVendorList={setVendorList}
                        inputId={vendor.id}
                      />
                    )
                  }
                  return (
                    <VendorInput
                      deleteIcon={vendor.deleteIcon}
                      key={index}
                      vendorList={vendorList}
                      value={vendor.value}
                      setVendorList={setVendorList}
                      inputId={vendor.id}
                    />
                  )
                })}

                <p
                  onClick={addNewVendor}
                  className=" text-[#0e0a3b] cursor-pointer text-[12px] self-end"
                >
                  + Add additional vendor
                </p>
              </div>
            </div>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Property Name</p>
              <input
                type="text"
                {...register("propertyName")}
                placeholder="Enter property name"
                className="p-2  border border-[#62909F] w-full bg-[#f5f7f9]"
              />
            </div>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Unit Id</p>
              <input
                type="text"
                {...register("unitId")}
                placeholder="Unit Id"
                className="p-2  border border-[#62909F] w-full bg-[#f5f7f9]"
              />
            </div>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Due date</p>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                {...register("dueDate")}
                className="p-2  border border-[#62909F] w-full bg-[#f5f7f9]"
              />
            </div>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Work scope/Item</p>
              <input
                type="text"
                {...register("workScope")}
                placeholder="Describe work scope/item scope"
                className="p-2  border border-[#62909F] w-full bg-[#f5f7f9]"
              />
            </div>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Enter Currency</p>
              <select
                {...register("currency")}
                className="p-2 border border-[#62909F] w-full bg-[#f5f7f9]"
              >
                {currencySymbols.map((symbol, index) => (
                  <option key={index} value={symbol}>
                    {symbol}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-full mt-4 justify-between items-center">
              <p className="w-full">Enter Amount</p>
              <input
                type="text"
                placeholder="Enter amount"
                {...register("amount")}
                className="p-2  border border-[#62909F] w-full bg-[#f5f7f9]"
              />
            </div>

            <div className="flex ml-[15.35rem] gap-3 mt-4 items-center ">
              <button className="px-3 py-2 rounded-lg border border-[#62909F] text-[#62909F]">
                Remove
              </button>
              <button
                type="submit"
                className="px-3 py-2 rounded-lg border bg-[#386A8B] text-white"
              >
                Save entry
              </button>
            </div>
          </form>

          <div className="flex flex-col w-[500px] mx-auto gap-3 mt-4 items-start">
            <span>Invoice entries</span>
            <div className="w-full">
              <div className="bg-[#62909f] w-full px-2  py-5 gap-4 flex justify-between items-center">
                <span className="text-[16px] text-white">Work scope</span>
                <span className="text-[16px] text-white">Amount</span>
                <span className="text-[16px] text-white">Action</span>
              </div>
              <div className="w-full">
                {workScopeDetails.map((detail, index) => (
                  <WorkScopeDetail
                    key={index}
                    workScope={detail.wScope}
                    currentCurrency={detail.currentCurrency}
                    money={detail.amountOfMoney}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between w-full">
              <p className="font-bold text-[16px]">Total</p>
              <p className="">NRA{total}.00</p>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
