import Dashboard from "@/components/Layout/Dashboard"
import { GridContainer } from "@/components/UI/Dashboard/GridContainer"
import Image from "next/image"
import Link from "next/link"
import img from "public/assets/images/houses2.png"
import { FiBell } from "react-icons/fi"

export default function index() {
  return (
    <Dashboard>
      <div className="px-8 py-10">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Prospect</h2>
            <h3 className="text-lg font-semibold opacity-50 mt-4">
              view online application
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <FiBell className="text-2xl" />
            </button>

            <div>
              <div className="bg-[#E0CA04] ml-auto h-10 w-10 mb-2 rounded-full grid place-items-center font-semibold">
                PA
              </div>
              <small className="opacity-50">User ID: 12345678</small>
            </div>
          </div>
        </header>

        <div className="flex justify-between mt-10">
          {/* convert to card later */}

          <div className="flex justify-between w-3/4 border  p-3 border-borderGrey">
            <div className=" flex gap-4 flex-grow">
              <Image src={img} alt="img" className="w-40 h-32 rounded-md" />

              <div className="flex flex-col">
                <h1 className="font-medium text-xl">22, Awolo road, ikeja</h1>
                <h3 className="text-lightGrey">Lagos. 100001</h3>
                <p>2 Bed | 1 Bath | 2000 sqft</p>

                <h3 className="mt-auto text-text-green font-medium">
                  View Listing
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-text-green mt-auto">
                $ 2000/month
              </h1>
              <h1 className="font-medium">Available Dec 1</h1>
            </div>
          </div>

          <div className="flex flex-col gap-8 ml-auto">
            <Link href="/dashboard/all-inbounds/offer">
              <div className="w-full py-05 px-2 bg-primary text-white border border-primary rounded-md text-center hover:bg-white hover:text-primary">
                <button>Make Offer</button>
              </div>
            </Link>
            <Link href="/dashboard/prospects/all-prospects">
              <button className="py-05 px-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white">
                Back to prospects
              </button>
            </Link>
          </div>
        </div>
        {/* end of top section */}

        <div className="mt-20">
          <GridContainer />
        </div>
      </div>
    </Dashboard>
  )
}
