import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { IoExitOutline } from "react-icons/io5"
import { RiHome5Fill } from "react-icons/ri"

const Dashboard = ({ children, className }) => {
  const menus = [
    {
      link: "",
      content: "Dashboard",
      submenus: [],
    },
    {
      link: "",
      content: "Agency",
      submenus: [
        {
          link: "/dashboard/prospects",
          subcontent: "Prospects",
        },
        {
          link: "/dashboard/offers",
          subcontent: "Offers",
        },
        {
          link: "/dashboard/marketplace",
          subcontent: "Marketplace",
        },
        {
          link: "/dashboard/agreements",
          subcontent: "Agreement",
        },
      ],
    },
    {
      link: "",
      content: "Manager",
      submenus: [],
    },
    {
      link: "",
      content: "CRM",
      submenus: [],
    },
    {
      link: "",
      content: "Back-office",
      submenus: [],
    },
    {
      link: "",
      content: "Settings",
      submenus: [],
    },
  ]
  // REDESIGN THIS

  return (
    <div className="flex">
      <div className="dashboard-wrap w-1/5 overflow-y-scroll h-screen bg-white border-r border-[#737373]/30 text-[#5E5E5E] py-8 px-4">
        <div className="flex flex-col justify-between h-full">
          <div className="grid gap-4">
            <header>
              <Image
                src="/assets/icons/COG Logo.png"
                alt="Logo"
                width={85}
                height={80}
                priority={true}
              />
            </header>

            <div className="grid">
              {menus.map((menu, i) => (
                <Menu key={i} menu={menu} />
              ))}
            </div>
          </div>

          <button className="inline-flex items-center gap-3 mt-12 p-4 w-full rounded-md hover:bg-red-600 hover:text-white">
            <IoExitOutline className="text-2xl rotate-180" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className={`grow overflow-y-scroll h-screen ${className}`}>
        {children}
      </div>
    </div>
  )
}
export default Dashboard

const Menu = ({ menu }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  const { link, content, submenus } = menu

  return (
    <>
      <button
        className="inline-flex items-center gap-3 p-4 w-full rounded-md hover:bg-primary hover:text-white"
        onClick={() => setOpen(!open)}
      >
        <RiHome5Fill className="text-2xl" />
        {content}
      </button>
      {open && (
        <SubMenu submenus={submenus} active={active} setActive={setActive} />
      )}
    </>
  )
}

const SubMenu = ({ submenus, active, setActive }) => {
  const { pathname } = useRouter()
  return (
    <ul className="ml-4">
      {submenus &&
        submenus.map((submenu, i) => {
          const { link, subcontent } = submenu

          return (
            <li key={i}>
              <Link href={link}>
                <button
                  className={`inline-flex items-center gap-3 p-4 w-full rounded-md hover:bg-primary hover:text-white ${(active === link || pathname.startsWith(link)) &&
                    "text-primary"
                    }`}
                  onClick={() => setActive(link)}
                >
                  <RiHome5Fill className="text-2xl" />
                  {subcontent}
                </button>
              </Link>
            </li>
          )
        })}
    </ul>
  )
}
