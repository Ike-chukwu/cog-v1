import Dashboard from "@/components/Layout/Dashboard"
import { Bigcard, SmallCard } from "@/components/Property/CustomReport/Card"
import { Chart } from "@/components/Prospects/Chart"
import Image from "next/image"

export default function index() {
  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Properties</h1>
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
          <h1 className="font-medium text-[#4B4B4B]">
            Properties - custom report
          </h1>
          {/* <span>{'>'}</span> */}
        </div>

        <div className="border border-[#62909F] py-9 px-7">
          <header className="flex flex-col items-center justify-end mb-6">
            <h1 className="font-bold text-dark text-3xl">{`Owner's properties`}</h1>
            <h3 className="mt-3 mb-3 text-grey-text text-xl">#0001</h3>

            <h3 className="text-grey-text">Clientname@mail.com</h3>
            <h3 className="text-grey-text mb-3">
              12, Chatham street, London, LDN124, United Kingdom
            </h3>
            <div className="flex gap-10 ">
              <h2>Last Payment</h2>
              <h4 className="text-grey-text">DD/MM/YYYY</h4>
            </div>
          </header>

          <div className="flex gap-6">
            <div className="w-2/3">
              <div className="flex gap-6 flex-col">
                <div className="flex gap-3 justify-between">
                  <SmallCard text={"Overdue rent"} num={6} />
                  <SmallCard text={"Rent notices"} num={1} />
                  <SmallCard text={"Total services"} num={21} />
                </div>

                <div className="flex justify-between gap-3">
                  <Bigcard />
                  <Bigcard variant={"recent"} />
                </div>
              </div>
            </div>

            <Chart styles={"w-1/3"} />
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
