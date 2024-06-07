import Dashboard from "@/components/Layout/Dashboard"
import { Bigcard, SmallCard } from "@/components/Property/CustomReport/Card"
import { Chart } from "@/components/Prospects/Chart"
import ClientTable from "@/components/manager/clients/client-table"
import BarComponent from "@/components/manager/property/bar-component"
import PieChartExample from "@/components/manager/services/piechart"
import Clock from "@/public/assets/icons/Clock"
import Image from "next/image"
import Link from "next/link"

export default function index() {
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
          <h1 className="font-medium text-[#4B4B4B]">
            Services - custom report
          </h1>
          {/* <span>{'>'}</span> */}
        </div>

        <div className="border border-[#62909F] py-9 px-7">
          <div className="flex justify-end items-center gap-4 mb-5">
            <div className="pl-3 py-2 pr-7 rounded-xl flex items-center gap-2 bg-[#f0f0f2]">
              <Clock />
              <span className="text-[#4B4B4B] text-[14px]">
                Jan 2022-Dec 2022
              </span>
            </div>
            <div className="px-4 py-1 rounded-lg border border-[#62909F] text-[14px] text-[#62909F]">
              1M
            </div>
            <div className="px-4 py-1 rounded-lg border border-[#62909F] text-[14px] text-[#62909F]">
              3M
            </div>
            <div className="px-4 py-1 rounded-lg border border-[#62909F] text-[14px] text-[#62909F]">
              6M
            </div>
            <div className="px-4 py-1 rounded-lg border text-[#4B4B4B] text-[14px] bg-[#f0f0f2]">
              1Y
            </div>
          </div>
          <div className="grid grid-cols-3 items-start gap-3">
            <div className="rounded-[10px] h-[600px] border border-[#62909F] py-3">
              <div className="grid place-items-center">
                {" "}
                <h2 className="text-[20px] font-[400]">Rent summary</h2>
              </div>

              <div className="h-[80%]">
                <PieChartExample innerRadius={70} outerRadius={100} />
                <ul className="px-12 grid gap-3">
                  <li className="flex gap-5">
                    <div className="bg-[#9FF1CA] h-5 w-5 rounded-full"></div>
                    <span>Paid</span>
                  </li>

                  <li className="flex gap-5">
                    <div className="bg-[#938AF5] h-5 w-5 rounded-full"></div>
                    <span>Unpaid</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-col-1 gap-8  h-[566px]">
              <div className="rounded-[10px] border border-[#62909F] p-3">
                <div className="flex justify-between">
                  <p className="text-[20px] font-[400]">Recent Activity</p>
                  <Link
                    href="/dashboard/manager/services/custom-report/all-service-request"
                    className="underline font-bold text-[#938AF5]"
                  >
                    View all
                  </Link>
                </div>

                <div className="overflow-auto h-[239px]">
                  <ClientTable />
                </div>
              </div>
              <div className="rounded-[10px] border border-[#62909F] p-3 grid gap-3">
                <div>
                  <div className="flex justify-between">
                    <p className="font-bold text-[#4B4B4B]">Unpaid</p>
                  </div>
                  <p className="text-lg text-[#4B4B4B]">$ 20,000.00</p>

                  <BarComponent
                    label="Unpaid"
                    value={20000}
                    total={20000}
                    recurring={8000}
                    recurringColor="#FECDD4"
                    oneTimeColor="#E00525"
                    currency="$"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <p className="font-bold text-[#4B4B4B]">Paid</p>
                  </div>
                  <p className="text-lg text-[#4B4B4B]">$ 20,000.00</p>
                  <BarComponent
                    label="Unpaid"
                    value={20000}
                    total={20000}
                    recurring={16000}
                    recurringColor="#9FF1CA"
                    oneTimeColor="#049561"
                    currency="$"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[10px] px-6 border border-[#62909F] py-3">
              <p className="text-[20px] font-bold">Customize report</p>
              <div className="flex flex-col gap-4 py-6">
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Report period</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <input
                      type="text"
                      className="p-1 border bg-[#f5f7f9] border-[#62909F] w-[45%]"
                      placeholder="DD/MM/YYYY"
                    />
                    <p>-</p>
                    <input
                      type="text"
                      className="p-1 border bg-[#f5f7f9] border-[#62909F] w-[45%]"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Tenant</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-full border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Rent</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-full border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Services</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-full border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Issue Date</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <input
                      type="text"
                      className="p-1 border border-[#62909F] w-[45%]"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div className="w-full gap-4">
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="text-[18px]">Due Date</p>
                  </div>
                  <div className="flex justify-between py-4 pl-6">
                    <select
                      name=""
                      id=""
                      className="p-1 w-[45%] border bg-[#f5f7f9] border-[#62909F]"
                    >
                      <option value="All">All</option>
                    </select>
                  </div>
                </div>
                <button className="px-10 py-3 rounded-lg text-white bg-[#386A8B] self-end">
                  Run report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Dashboard>
  )
}
