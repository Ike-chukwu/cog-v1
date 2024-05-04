// Prospect index code soon to be remodelled by Leye
import { Card } from "@/components/Dashboard/Card"
import Dashboard from "@/components/Layout/Dashboard"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import no_recent_activity_img from "public/assets/images/no-recent-act.svg"
import { useRef, useState } from "react"

const Property = () => {
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

  const recentActivities = <div className="mr-10"></div>

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

        <section className="mt-5 pr-5">
          <div className="flex">
            <div className="relative ml-auto">
              <button
                className="bg-[#386A8B] text-white rounded-[4px] px-6 py-2 ml-auto"
                onClick={togglePopupHandler}
              >
                Prospect manager
              </button>

              {openPopup && (
                <div
                  className="absolute right-0 top-[45px] bg-white border-[#62909F] border-[1px] text-[15px]"
                  ref={popupRef}
                >
                  <span
                    className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap"
                    onClick={(e) =>
                      closePopupHandler(e, "property/add-properties")
                    }
                  >
                    <Image
                      src="/assets/images/fi_add.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />{" "}
                    Add new property
                  </span>

                  <span
                    className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap"
                    onClick={(e) =>
                      closePopupHandler(e, "property/all-properties")
                    }
                  >
                    <Image
                      src="/assets/images/fi_eye.svg"
                      alt="Eye Icon"
                      width={20}
                      height={20}
                    />{" "}
                    View all properties
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-10 flex justify-between gap-x-5">
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                header={"Total agreements"}
                val={2}
                metric={"increased by x% since july 2022"}
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
                  <Image src={no_recent_activity_img} alt="file-icon-white" />
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
