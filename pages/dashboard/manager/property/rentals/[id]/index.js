import Dashboard from "@/components/Layout/Dashboard"
import Header from "@/components/UI/Dashboard/Header"
import BarComponent from "@/components/manager/clients/bar-component"
import ClientTable from "@/components/manager/clients/client-table"
import PieChartExample from "@/components/manager/clients/piechart"
import ChevronRight from "@/components/shared/ChevronRight"
import Link from "next/link"
import { useRouter } from "next/router"

const AddNewClient = () => {
  const router = useRouter()
  const { mainid } = router.query

  return (
    <Dashboard className="p-8 grid min-h-full max-w-full">
      <Header header="Properties" subHeader="" name="Anna Hunt" />
      <div className="flex gap-6">
        <h1 className="font-medium text-[#4B4B4B] flex items-center gap-6">
          Properties - custom report
          <ChevronRight />
          <span className="font-bold">Property name</span>
        </h1>
        {/* <span>{'>'}</span> */}
      </div>
      {/* Main */}
      <div className={`m-8 mb-0 p-8 border border-primary  h-[80vh]`}>
        <section className="grid place-items-center">
          <h1 className="font-bold text-3xl">Property name</h1>
          <p className="text-[#B1B1B4] py-3">#000{mainid}</p>
          <p className="text-[#B1B1B4]">clientname@domain.com</p>
          <p className="text-[#B1B1B4]">
            12, Chatham street, London, LDN124, United Kingdom
          </p>

          <div className="flex gap-3 py-3">
            <p>Last Payment</p>
            <p className="text-[#B1B1B4]">DD/MM/YYYY</p>
          </div>
        </section>

        <section className="grid  grid-cols-[65%_30%] gap-3">
          <div className="grid gap-3">
            <div className="grid grid-cols-3 gap-3 ">
              <div className="rounded-[10px] border border-[#62909F] grid gap-8 place-items-center p-5">
                <p className="bg-[#F7F7F7] font-bold grid place-items-center rounded-full h-10 w-10 ">
                  1
                </p>
                <p className="font-bold text-[#4B4B4B] text-base">
                  Overdue Rent
                </p>
              </div>
              <div className="rounded-[10px] border border-[#62909F] grid gap-8 place-items-center p-5">
                <p className="bg-[#F7F7F7] font-bold grid place-items-center rounded-full h-10 w-10 ">
                  16
                </p>
                <p className="font-bold text-[#4B4B4B] text-base">
                  Rent Notices
                </p>
              </div>
              <div className="rounded-[10px] border border-[#62909F] grid gap-8 place-items-center p-5">
                <p className="bg-[#F7F7F7] font-bold grid place-items-center rounded-full h-10 w-10 ">
                  18
                </p>
                <p className="font-bold text-[#4B4B4B] text-base">
                  Total Services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40%_56%] gap-5">
              <div className=" rounded-[10px] border border-[#62909F] p-3 flex flex-col items-center justify-between">
                <div className="flex justify-between self-end">
                  <Link
                    href="/dashboard/manager/property/rentals/1/1"
                    className="underline font-bold text-[#62909f]"
                  >
                    View all
                  </Link>
                </div>
                <p className="bg-[#F7F7F7] font-bold grid place-items-center rounded-full h-12 w-12 ">
                  15
                </p>
                <p className="font-bold text-[#4B4B4B] text-base">Tenants</p>
                <div className="flex gap-2 items-center">
                  <p className="bg-[#d2f4ff] border-2 border-[#62909f] font-bold grid place-items-center rounded-full h-12 w-12 ">
                    PA
                  </p>
                  <p className="bg-[#d2f4ff] border-2 border-[#62909f] font-bold grid place-items-center rounded-full h-12 w-12 ">
                    KZ
                  </p>
                  <p className="bg-[#d2f4ff] border-2 border-[#62909f] font-bold grid place-items-center rounded-full h-12 w-12 ">
                    BJ
                  </p>
                  <p className="font-bold text-[#4B4B4B] text-base">
                    and others
                  </p>
                </div>
              </div>

              <div className="rounded-[10px] border border-[#62909F] p-3">
                <div className="flex justify-between">
                  <p>Recent Activity</p>

                  <Link href="#" className="underline font-bold text-[#938AF5]">
                    View all
                  </Link>
                </div>

                <div className="overflow-auto h-[239px]">
                  <ClientTable />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[10px] border border-[#62909F] py-3">
            <div className="grid place-items-center">
              {" "}
              <h2>Property earnings</h2>
            </div>

            <div className="h-[80%]">
              {" "}
              <PieChartExample />
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
        </section>
      </div>
    </Dashboard>
  )
}

export default AddNewClient
