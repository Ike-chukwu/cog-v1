import Dashboard from "@/components/Layout/Dashboard"
import { Chart } from "@/components/Prospects/Chart"
import { Button } from "@/components/UI/Dashboard/Button"
import back from "@/public/assets/images/back-arrow.png"
import clock from "@/public/assets/images/fi_clock.png"
import Image from "next/image"

export default function index() {
  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Prospects</h1>
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
          <Image className="w-6" src={back} alt="img" />
          <h1 className="font-medium text-[#4B4B4B]">
            Prospects - custom report
          </h1>
        </div>

        <div className="border border-[#62909F] py-9 px-7">
          <header className="flex gap-5 justify-end mb-6">
            <div className="bg-borderGrey flex py-2 px-9 rounded-[10px]">
              <Image src={clock} alt="" className="mr-2"/>
              <p>Jan 2022 - Dec 2022</p>
            </div>

            <div className="flex gap-3">
              <p className="border border-[#62909F] px-4 py-2 rounded-[10px] cursor-pointer">
                1M
              </p>
              <p className="border border-[#62909F] px-4 py-2 rounded-[10px] cursor-pointer">
                3M
              </p>
              <p className="border border-[#62909F] px-4 py-2 rounded-[10px] cursor-pointer">
                6M
              </p>
              <p className="border border-[#62909F] px-4 py-2 rounded-[10px] cursor-pointer">
                1Y
              </p>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-1">
            <Chart />
            <Chart />

            <div className="border border-[#62909F] px-3 py-10 rounded-[10px]">
              <header className="font-medium mb-9 text-lg text-benefitColor">
                Customize report
              </header>

              <div className="flex flex-col gap-4">
                <div>
                  <input type="checkbox" id="rep" />
                  <label for="rep" className="ml-4">
                    Report period
                  </label>
                </div>

                <div className="flex justify-between items-center">
                  <input
                    className="w-32 border border-[#62909F] px-2 py-1 outline-none"
                    placeholder="DD/MM/YYYY "
                  />
                  <div className="w-6 border-t-2 border-black" />
                  <input
                    className="w-32 border border-[#62909F] px-2 py-1 outline-none"
                    placeholder="DD/MM/YYYY "
                  />
                </div>
              </div>
              {/*  */}

              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <input type="checkbox" id="rep" />
                  <label for="rep" className="ml-4">
                    Client
                  </label>
                </div>
                <input
                  className="border border-[#62909F] px-2 py-1 outline-none"
                  placeholder="All"
                />
              </div>
              {/*  */}

              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <input type="checkbox" id="rep" />
                  <label for="rep" className="ml-4">
                    Inbound type
                  </label>
                </div>
                <input
                  className="border border-[#62909F] px-2 py-1 outline-none"
                  placeholder="All"
                />
              </div>
              {/*  */}

              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <input type="checkbox" id="rep" />
                  <label for="rep" className="ml-4">
                    Property name
                  </label>
                </div>
                <input
                  className="border border-[#62909F] px-2 py-1 outline-none"
                  placeholder="All"
                />
              </div>
              {/*  */}
              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <input type="checkbox" id="rep" />
                  <label for="rep" className="ml-4">
                    Due date
                  </label>
                </div>
                <input
                  className="w-32 border border-[#62909F] px-2 py-1 outline-none"
                  placeholder="All"
                />
              </div>
              {/*  */}
              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <input type="checkbox" id="rep" />
                  <label for="rep" className="ml-4">
                    Currency
                  </label>
                </div>
                <input
                  className="w-32 border border-[#62909F] px-2 py-1 outline-none"
                  placeholder="All"
                />
              </div>
              {/*  */}

              <div className="flex w-full justify-end mt-4">
                <Button>Run report</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
