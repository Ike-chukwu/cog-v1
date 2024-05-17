import { Card } from "@/components/Dashboard/Card"
import Dashboard from "@/components/Layout/Dashboard"
import DropdownButton from "@/components/shared/dropdown-btn"
import Image from "next/image"
import Link from "next/link"

const recentActivities = (
  <div className="mr-10">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex gap-x-10 p-4 border-b-[#E8E8EE] border-b-2 mr-10"
      >
        <figure className="bg-[#9FF1CA] grid place-items-center rounded-[50%] h-[50px] w-[50px]">
          <Image
            src="/assets/images/arrow-down.svg"
            alt="file-icon-white"
            width={20}
            height={38}
          />
        </figure>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[#19191A] text-[18px] font-semibold">
            Rent notice - Ajibola Quadri
          </h1>
          <p className="text-[#B1B1B4]">Fri Jun 15,2022 GMT 13:00</p>
        </div>
      </div>
    ))}
  </div>
)

const Property = () => {
  const dropdownOptions = [
    {
      label: "Add new client",
      icon: (
        <Image
          src="/assets/images/fi_add.svg"
          alt="Add Icon"
          width={20}
          height={20}
        />
      ),
      link: "/dashboard/manager/clients/add-new-client",
    },
    {
      label: "View all clients",
      icon: (
        <Image
          src="/assets/images/fi_eye.svg"
          alt="Eye Icon"
          width={20}
          height={20}
        />
      ),
      link: "/dashboard/manager/clients/view-all-clients",
    },
  ]
  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Clients</h1>
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

        <section className="mt-5 pr-5">
          <div className=" relative flex justify-end ml-auto p-0">
            <DropdownButton label="Client Manager" options={dropdownOptions} />
          </div>

          <div className="pt-10 flex justify-between gap-x-5">
            {[
              {
                header: "Total clients",
                val: "15",
                metric: "Increased by x% since july 2022",
              },
              {
                header: "Rent defaulters",
                val: "3",
                metric: "Increased by x% since july 2022",
              },
              {
                header: "Crypto",
                val: "-10,000",
                metric: "Increased by x% since july 2022",
              },
            ].map((item, index) => (
              <Card
                key={index}
                header={item.header}
                val={item.val}
                metric={item.metric}
              />
            ))}
          </div>

          <div className="flex pt-10">
            <Link
              href={"/dashboard/manager/property/custom-report"}
              className="ml-auto"
            >
              <div className="relative ">
                <button className="text-[#386A8B] border-[#62909F] border-[1px] font-semibold bg-white rounded-[4px] px-6 py-2 ml-auto">
                  View custom report
                </button>
              </div>
            </Link>
          </div>

          <div className="mt-20 border-[#62909F] border-2">
            <div className="py-5 px-8 flex justify-between items-center border-b-[#E8E8EE] border-b-2 mr-10">
              <h1 className="text-[#4B4B4B] text-[22px] font-bold">
                Recent Activities
              </h1>
              <span className="text-[#62909F] text-[20px] font-semibold underline">
                View All
              </span>
            </div>
            {[1].length !== 0 ? (
              recentActivities
            ) : (
              <div className="px-10 py-5 grid grid-cols-2 gap-x-10">
                <div>
                  <div className="max-w-[30rem] text-center pt-20 text-[#4B4B4B]">
                    <h1 className="font-bold mb-10">
                      You have no recent activities
                    </h1>
                    <p>
                      Create a new prospect by through the Prospect manager
                      dropdown
                    </p>
                    <p>Go to Prospect manager &gt; Add new prospect.</p>
                  </div>
                </div>
                <figure>
                  <Image
                    src="/assets/images/no-recent-act.svg"
                    alt="file-icon-white"
                  />
                </figure>
              </div>
            )}
          </div>
        </section>
      </main>
    </Dashboard>
  )
}

export default Property
