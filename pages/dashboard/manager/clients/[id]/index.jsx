import Dashboard from "@/components/Layout/Dashboard"
import Header from "@/components/UI/Dashboard/Header"
import BarComponent from "@/components/manager/clients/bar-component"
import ClientTable from "@/components/manager/clients/client-table"
import PieChartExample from "@/components/manager/clients/piechart"
import Link from "next/link"
import { useRouter } from "next/router"

const AddNewClient = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Dashboard className="p-8 grid min-h-full max-w-full">
      <Header header="Clients" subHeader="" name="Anna Hunt" />
      {/* Main */}
      <div className={`m-8 mb-0 p-8 border border-primary  h-[80vh]`}>
        <section className="grid place-items-center">
          <h1 className="font-bold text-3xl">Client Name</h1>
          <p className="text-[#B1B1B4] py-3">#{id}</p>
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
                  1
                </p>
                <p className="font-bold text-[#4B4B4B] text-base">
                  Rent Notices
                </p>
              </div>
              <div className="rounded-[10px] border border-[#62909F] grid gap-8 place-items-center p-5">
                <p className="bg-[#F7F7F7] font-bold grid place-items-center rounded-full h-10 w-10 ">
                  1
                </p>
                <p className="font-bold text-[#4B4B4B] text-base">
                  Total Services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40%_56%] gap-5">
              <div className=" rounded-[10px] border border-[#62909F] p-3 grid gap-3">
                <div>
                  <div className="flex justify-between">
                    <p className="font-bold text-[#4B4B4B]">Unpaid</p>

                    <Link
                      href="#"
                      className="underline font-bold text-[#938AF5]"
                    >
                      View all
                    </Link>
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
              <h2>Client Summary</h2>
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
