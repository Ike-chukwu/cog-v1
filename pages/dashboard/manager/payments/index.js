// Prospect index code soon to be remodelled by Leye
import { Card } from "@/components/Dashboard/Card"
import Dashboard from "@/components/Layout/Dashboard"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import no_recent_activity_img from "public/assets/images/no-recent-act.svg"
import { useRef, useState } from "react"

const Payments = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const router = useRouter()

  const popupRef = useRef()

  const togglePopupHandler = (e) => {
    e.preventDefault()
    setOpenPopup((val) => !val)
  }
  const closePopupHandler = (e, nextPage) => {
    e.preventDefault()
    router.push(nextPage)
    setOpenPopup(false)
  }

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
              Payment from Ajibola Quadri at Ikorodu property
            </h1>
            <p className="text-[#B1B1B4]">Fri Jun 15,2022 GMT 13:00</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Payments</h1>
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
            <p
              className="text-[#4B4B4B] text-[le
            Filter
            
            Propperty ID
            Date
            Property name
            Property type
            Occupant count
            Amount14px] text-right"
            >
              User ID: 12345678
            </p>
          </div>
        </nav>

        <section className="mt-5 pr-5">
          <div className="flex">
            <div className="relative ml-auto">
              <button
                className="bg-[#386A8B] text-white rounded-[4px] px-6 py-2 ml-auto"
                onClick={togglePopupHandler}
              >
                Request Payment
              </button>

              {openPopup && (
                <div
                  className="absolute right-0 top-[45px] bg-white border-[#62909F] border-[1px] text-[15px]"
                  ref={popupRef}
                >
                  <span
                    className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap"
                    onClick={(e) => closePopupHandler(e, "payments/set-terms")}
                  >
                    <Image
                      src="/assets/images/fi_add.svg"
                      alt="Add Icon"
                      z
                      width={20}
                      height={20}
                    />{" "}
                    Create Invoice
                  </span>

                  <span
                    className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap"
                    onClick={(e) =>
                      closePopupHandler(e, "payments/view-all-payments")
                    }
                  >
                    <Image
                      src="/assets/images/fi_eye.svg"
                      alt="Eye Icon"
                      width={20}
                      height={20}
                    />{" "}
                    View payments
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-10 flex justify-between gap-x-5">
            {[
              {
                header: "Total collected payments",
                val: "$ 20,000.00",
                metric: "Increased by 30% since july 2022",
              },
              {
                header: "Pending payments",
                val: "$ 10,000.00",
                metric: "Increased by 30% since july 2022",
              },
              {
                header: "Overdue payments",
                val: "-10,000.000",
                metric: "Decreased by 30% since july 2022",
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
              href={"/dashboard/manager/payments/custom-report"}
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
            {0 !== 0 ? (
              recentActivities
            ) : (
              <div className="px-10 py-5 grid grid-cols-2 gap-x-10">
                <div>
                  <div className="max-w-[30rem] text-center pt-20 text-[#4B4B4B]">
                    <h1 className="font-bold mb-10">
                      You have no previous income statement
                    </h1>
                    <p>
                      Sign up for the standard plan to get monthly income
                      statements
                    </p>
                    <p>Go to settings and subscriptions to begin.</p>
                  </div>
                </div>
                <figure>
                  <Image
                    src={no_recent_activity_img}
                    alt="file-icon-white"
                    width={300}
                    height={300}
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

export default Payments
