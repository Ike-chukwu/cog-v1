import { data } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import hash from "/public/assets/images/fi_hash.png"
import rss from "/public/assets/images/fi_rss.png"
import head from "/public/assets/images/fi_users.svg"
import houses from "/public/assets/images/houses.png"

const PropertySearch = () => {
  const router = useRouter()
  const { itemid } = router.query
  return (
    <div>
      <div className="_property">
        <h1 className="font-bold  mt-8 text-{150}">Property Search</h1>
        <div className="flex">
          <div className="  mt-5">
            {data.map((item) => {
              return (
                <div className="grid " key={item.id}>
                  <div className="flex-col justify-between  pt-20">
                    <div className="mb-3">{item.tag}</div>
                    <div className="flex gap-6 justify-between">
                      <div className="relative">
                        <Image
                          src={houses}
                          width={320}
                          height={40}
                          className=""
                        />
                        <span className="absolute top-3 right-3 ">
                          <button className="bg-white rounded-full  w-28 text-sm text-center ">
                            <Link href={`for-rentals/properties/${item.id}`}>
                              Click to view
                            </Link>
                          </button>
                        </span>
                        <h1 className="_property3">
                          <span>Property name:</span>
                          <span>Aegon warehouse</span>
                        </h1>
                        <h1 className="_property3">
                          <span>Property name:</span>
                          <span>Aegon warehouse</span>
                        </h1>
                        <h1 className="_property3">
                          <span>Property name:</span>
                          <span>Aegon warehouse</span>
                        </h1>
                      </div>
                      <div className="relative">
                        <Image
                          src={houses}
                          width={320}
                          height={40}
                          className=""
                        />
                        <span className="absolute top-3 right-3 ">
                          <button className="bg-white rounded-full  w-28 text-sm text-center ">
                            <Link href={`for-rentals/properties/${item.id}`}>
                              Click to view
                            </Link>
                          </button>
                        </span>

                        <h1 className="_property3">
                          <span>Property name:</span>
                          <span>Aegon warehouse</span>
                        </h1>
                        <h1 className="_property3">
                          <span>Property name:</span>
                          <span>Aegon warehouse</span>
                        </h1>
                        <h1 className="_property3">
                          <span>Property name:</span>
                          <span>Aegon warehouse</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="m-12 grid grid-rows-2 grid-flow-col  helo mr-64 mt-32">
            <div className="ml-8 mb-32">
              <div className="border rounded-lg  bg-[#F5F5F5]  h-96 flex flex-col justify-around pt-2 pl-8 w-64 ">
                <p>Search properties</p>
                <div className="">
                  <label>Property type</label>
                  <br></br>
                  <input type="text" className="mt-2" />
                </div>
                <div>
                  <label>City/state</label>
                  <br></br>
                  <input type="text" className="mt-2" />
                </div>
                <div>
                  <label>Application type</label>
                  <br></br>
                  <input type="text" className="mt-2" />
                </div>
                <div>
                  <label>Available dates </label>
                  <br></br>
                  <input type="text" className="mt-2" />
                </div>
                <div className="self-end mr-4 p-3">
                  <button className="_btnsearch rounded-lg ">Julius</button>
                </div>
              </div>
            </div>
            <div className="ml-8 mt-2">
              <div className=" rounded-lg  h-96 flex flex-col justify-around pt-2 pl-3 w-68 ">
                <div className="flex flex-col justify-around h-100  mr-4 gap-6">
                  <p className="text-3xl font-bold text-[#386A8B]">
                    Todays Stats{" "}
                  </p>
                  <div className="flex border border-black h-20 p-2 rounded-lg ">
                    <div className="w-10  p-2 h-10 rounded-[50%] border border-black bg-[#F5F5F5] ">
                      <Image src={head} className="mt-1 ml-1" />{" "}
                    </div>
                    <div className="ml-3 flex flex-col">
                      <div className="flex">
                        <h1 className="font-bold text-xl">30.8M</h1>
                        <p className="text-sm ml-4 text-[#B1B1B4]">
                          +3000 new Members{" "}
                        </p>
                      </div>
                      <div>
                        <h1 className="text-sm text-[#B1B1B4]">
                          Total rentals and buyers
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex border border-black h-20 p-2 rounded-lg">
                    <div className="w-10  p-2 h-10 rounded-[50%] border border-black bg-[#F5F5F5] ">
                      <Image src={hash} className="mt-1 ml-1" />{" "}
                    </div>
                    <div className="flex flex-col ml-3">
                      <span className="text-xl font-bold">200M</span>
                      <span className="text-sm text-[#B1B1B4]">
                        Properties listed
                      </span>
                    </div>
                  </div>
                  <div className="flex border rounded-lg border-black h-20 p-2">
                    <div className="w-10  p-2 h-10 rounded-[50%] border border-black bg-[#F5F5F5] ">
                      <Image src={rss} className="mt-1 ml-1" />{" "}
                    </div>
                    <div className="flex flex-col ml-3">
                      <span className="text-xl font-bold">620,000</span>
                      <span className="text-sm text-[#B1B1B4]">
                        Total rental application
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertySearch
