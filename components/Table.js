import Navbar from "./Navbar"
import TopNav from "./TopNav"

const Table = () => {
  return (
    <div>
      <Navbar />
      <div className="z-40 mt-2">
        <TopNav />
      </div>
      <div className="t_ mt-32">
        <div className="flex justify-between">
          <div className="flex t_head   h-14 border  p-2 rounded-full">
            <div className=" all  ">All application</div>
            <div className="pen">Pending</div>
            <div className="accept">Accepted</div>
          </div>
          <div className="mr-10">
            <div className="_filter flex p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 7H21"
                  stroke="#386A8B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6 12H18"
                  stroke="#386A8B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10 17H14"
                  stroke="#386A8B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <h1 className="ml-3">Filter</h1>
            </div>
          </div>
        </div>
        <table className=" bg-white  w-[84vw] ">
          <thead>
            <tr>
              <th className=" text-left px-4">
                <span className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="5.5"
                        fill="white"
                        stroke="#54A4CC"
                      />
                    </svg>{" "}
                  </span>
                  <span className="ml-2"> Agreement ID</span>
                  <span className="py-1 ml-1">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                      >
                        <path
                          d="M4.08398 2.91667L7.00065 0L9.91732 2.91667H4.08398Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                        width="7"
                        height="4"
                        viewBox="0 0 6 4"
                        fill="none"
                      >
                        <path
                          d="M0.0839844 0.833496L3.00065 3.75016L5.91732 0.833496H0.0839844Z"
                          fill="#B1B1B4"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </th>
              <th className=" text-left px-8 py-4"> Date</th>
              <th className=" text-left px-8 py-4">Listers Name</th>
              <th className=" text-left px-8 py-4">Property Name</th>
              <th className=" text-left px-8 py-4">Amount</th>
              <th className=" text-left px-8 py-4">
                <span className="flex">
                  <span>Status</span>
                  <span className="py-1 ml-1">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                      >
                        <path
                          d="M4.08398 2.91667L7.00065 0L9.91732 2.91667H4.08398Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                        width="7"
                        height="4"
                        viewBox="0 0 6 4"
                        fill="none"
                      >
                        <path
                          d="M0.0839844 0.833496L3.00065 3.75016L5.91732 0.833496H0.0839844Z"
                          fill="#B1B1B4"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hy">
              <td className="   px-8 py-4 hy hyr">
                <span className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="5.5"
                        fill="white"
                        stroke="#54A4CC"
                      />
                    </svg>{" "}
                  </span>
                  <span className="num ml-3">#657899832</span>
                </span>
              </td>
              <td className="   px-8 py-4 hy">12 April 2023, 12:43 AM</td>
              <td className="   px-8 py-4 hy num">Abraham Developers</td>
              <td
                className="px-8
      py-4 hy"
              >
                Ogudu Homes
              </td>
              <td className="   px-8 py-4 hy">30,500,000.00</td>
              <td className="   px-8 py-4 hy hyl">
                <span className="flex">
                  <span>
                    <button className="_btn">Pending</button>
                  </span>
                  <span className="py-2 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td className=" px-8 ">
                <span className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="5.5"
                        fill="white"
                        stroke="#54A4CC"
                      />
                    </svg>{" "}
                  </span>
                  <span className="num ml-3">#657899832</span>
                </span>
              </td>
              <td className=" px-8">12 April 2023, 12:43 AM</td>
              <td className=" px-8 num">1961</td>
              <td className=" px-8">The Sliding</td>
              <td className=" px-8">Malcolm Lockyer</td>
              <td className=" px-8 ">
                <span className="flex">
                  <span>
                    <button className="_btn2">Pending</button>
                  </span>
                  <span className="py-2 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </span>
                </span>
              </td>
            </tr>
            <tr className="hy">
              <td className="   px-8 py-4 hy hyr">
                <span className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="5.5"
                        fill="white"
                        stroke="#54A4CC"
                      />
                    </svg>{" "}
                  </span>
                  <span className="num ml-3">#657899832</span>
                </span>
              </td>
              <td className="   px-8 py-4 hy">12 April 2023, 12:43 AM</td>
              <td className="   px-8 py-4 hy">Abraham Developers</td>
              <td
                className="px-8
      y-4 hy"
              >
                Ogudu Homes
              </td>
              <td className="   px-8 py-4 hy">30,500,000.00</td>
              <td className="   px-8 py-4 hy hyl">
                <span className="flex">
                  <span>
                    <button className="_btn">Pending</button>
                  </span>
                  <span className="py-2 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td className=" px-8 ">
                <span className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="5.5"
                        fill="white"
                        stroke="#54A4CC"
                      />
                    </svg>{" "}
                  </span>
                  <span className="num ml-3">#657899832</span>
                </span>
              </td>
              <td className=" px-8 ">Malcolm Lockyer</td>
              <td className=" px-8 ">1961</td>
              <td
                className=" px-8 py-4
    "
              >
                The Sliding
              </td>
              <td className=" px-8 ">Malcolm Lockyer</td>
              <td className=" px-8 ">
                <span className="flex">
                  <span>
                    <button className="_btn2">Pending</button>
                  </span>
                  <span className="py-2 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
