"use client"
import Dashboard from "@/components/Layout/Dashboard"
import { employeesList } from "@/data/properties"
import Image from "next/image"

const ServicesTable = ({ data }) => {
  const className = `w-full overflow-hidden text-ellipsis whitespace-nowrap`
  return (
    <div className="grid grid-cols-5 items-center justify-between py-2 px-4 ">
      <div className="flex items-center text-primary">
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-black rounded-sm mr-2"
        />
      </div>

      {/* <span className={className}>{date}</span> */}

      <span className={className}>{data.hash}</span>

      <span className={className}>{data.date}</span>

      <span className={className}>{data.name}</span>

      {/* <div className="flex items-center justify-between"> */}
      <div className="flex gap-2 item-center justify-end">
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="25" height="21" rx="5" fill="#938AF5" />
          <g clip-path="url(#clip0_6_37539)">
            <path
              d="M6.54102 10.5C6.54102 10.5 8.70768 5.5 12.4993 5.5C16.291 5.5 18.4577 10.5 18.4577 10.5C18.4577 10.5 16.291 15.5 12.4993 15.5C8.70768 15.5 6.54102 10.5 6.54102 10.5Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 12.375C13.3975 12.375 14.125 11.5355 14.125 10.5C14.125 9.46447 13.3975 8.625 12.5 8.625C11.6025 8.625 10.875 9.46447 10.875 10.5C10.875 11.5355 11.6025 12.375 12.5 12.375Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_37539">
              <rect
                width="13"
                height="15"
                fill="white"
                transform="translate(6 3)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="25" height="21" rx="5" fill="#938AF5" />
          <path
            d="M18.2578 6.53495L18.1303 6.68215L15.8041 3.99659L15.9312 3.84987C15.9312 3.84987 16.4882 3 17.2804 3C17.6294 3 18.0246 3.16547 18.4378 3.64221C19.8004 5.21444 18.2578 6.53495 18.2578 6.53495ZM17.3665 7.56389L9.44501 16.7076L6 18L7.11963 14.0225V14.0211H7.12044L15.0407 4.87787L15.1431 4.99647L17.3665 7.56389ZM7.12125 16.7057L8.84254 16.1343L7.66685 14.6896L7.12125 16.7057Z"
            fill="white"
          />
        </svg>
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="25" height="21" rx="5" fill="#E00525" />
          <g clip-path="url(#clip0_6_37545)">
            <path
              d="M16.0277 7.90554V15.8982C16.0277 16.2705 15.6563 16.5771 15.2053 16.5771H8.82467C8.37365 16.5771 8.00222 16.2705 8.00222 15.8982V7.90554H16.0277ZM13.9451 8.7924V15.6683H14.4226V8.7924H13.9451ZM11.7828 8.7924V15.6683H12.2604V8.7924H11.7828ZM9.62059 8.7924V15.6683H10.0981V8.7924H9.62059ZM10.1512 6.05517V5.48583C10.1512 5.12452 10.4961 4.83984 10.9339 4.83984H13.1094C13.5471 4.83984 13.892 5.12452 13.892 5.48583V6.05517H16.293C16.7441 6.05517 17.1155 6.36174 17.1155 6.734V7.20481H6.92773V6.72306C6.92773 6.35079 7.29916 6.04422 7.75018 6.04422H10.1512V6.05517ZM10.9339 5.2778C10.8012 5.2778 10.6951 5.36539 10.6951 5.47488V6.04422H13.3614V5.47488C13.3614 5.36539 13.2553 5.2778 13.1226 5.2778H10.9339Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_37545">
              <rect
                width="13"
                height="15"
                fill="white"
                transform="translate(6 3)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* </div> */}
    </div>
  )
}

export default function index() {
  return (
    <Dashboard>
      <main className="p-10">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">
              Back-office
            </h1>
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
          <h1 className="font-medium text-[#4B4B4B]">Set terms</h1>
        </div>

        <div className="border border-[#62909F] py-9 px-7 min-h-[100vh]">
          <div className="grid grid-cols-12  gap-3">
            <div className="grid grid-col-1 col-span-7 h-[700px] border border-[#62909F] px-4">
              <div className="flex justify-between w-full items-center pt-6">
                <p className="text-[18px] ">Employees list</p>
                <div className="flex items-center gap-3">
                  <svg
                    width="54"
                    height="48"
                    viewBox="0 0 54 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.4941 1.49402L52.9474 47.4908L0.951042 46.8727L1.49777 0.875986L53.4941 1.49402Z"
                      fill="white"
                      stroke="#62909F"
                    />
                    <path
                      d="M33.0132 34.8691L21.1441 24.0889L33.2661 13.5939L33.0132 34.8691Z"
                      fill="#B1B1B4"
                      stroke="#62909F"
                    />
                  </svg>
                  <svg
                    width="54"
                    height="48"
                    viewBox="0 0 54 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6_37790)">
                      <rect
                        width="47"
                        height="53"
                        transform="matrix(0.0086416 0.999963 0.999963 -0.0086416 0 1)"
                        fill="#4B4B4B"
                      />
                      <path
                        d="M32.5346 24.1937L19.1836 12.5586L19.3867 36.0577L32.5346 24.1937Z"
                        fill="#B1B1B4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_37790">
                        <rect
                          width="47"
                          height="53"
                          fill="white"
                          transform="matrix(0.0086416 0.999963 0.999963 -0.0086416 0 1)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <>
                <div className="grid grid-cols-5 mt-10 items-center px-4 font-bold py-4 bg-[#62909f] text-white">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-white rounded-sm mr-2"
                    />
                  </div>
                  <span>#</span>
                  <span>Date created</span>
                  <span>Employee name</span>
                  <span className="text-right">Action</span>
                </div>

                <div className="grid text-left mt-6">
                  {employeesList.map((property, i) => (
                    <ServicesTable index={i} key={i} data={property} />
                  ))}
                </div>
              </>
            </div>

            <div className="rounded-[10px] grid-col-8 col-span-5 px-6 border border-[#62909F] py-3">
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
                    <p className="text-[18px]">Employee name</p>
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
                    <p className="text-[18px]">Schedule status</p>
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
                    <p className="text-[18px]">Department</p>
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
                    <p className="text-[18px]">Property</p>
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
                    <p className="text-[18px]">Payroll status</p>
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
