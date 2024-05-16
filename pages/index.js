import Image from "next/image"
import { useRouter } from "next/router"
import Arrow from "public/assets/icons/Arrow.png"
import Location from "public/assets/icons/Location.png"
import seacrh from "public/assets/icons/Search.png"
import stroke from "public/assets/icons/Stroke 1.png"
import database from "public/assets/icons/fi_database.png"
import key from "public/assets/icons/fi_key.png"
import sliders from "public/assets/icons/fi_sliders.png"
import managerImage from "public/assets/images/Frame 157.png"
import biodun from "public/assets/images/biodun.png"
import iPhone from "public/assets/images/iPhone.png"
import Image8 from "public/assets/images/image 8.png"
import lady from "public/assets/images/lady.png"
import NEMSA from "public/assets/images/nemsa.png"
import NIESV from "public/assets/images/niesv.png"
import { useEffect, useState } from "react"

import Layout from "../components/Layout/Layout"
export default function Home() {
  return (
    <Layout title="home">
      <main className="font-Euclid">
        <Header />
        <Seacrh />
        <Rentals />
        <PropertyMangaers />
        <BenefitHeader />
        <div className="flex justify-center w-full">
          <Benefit />
        </div>
        <ForRentals />
        <ForManagers />
        <Stories />
        <Why />
        <Faq />
      </main>
    </Layout>
  )
}

const Header = () => {
  return (
    <header className="flex-col justify-center text-center ">
      <h1 className="flex justify-center text-center text-primary mt-36 mb-10 text-5xl font-bold">
        The property rental and sales <br /> experience just got better
      </h1>
      <small className="text-base font-medium leading-snug text-lightGrey">
        Either you are a real estate renter, buyer or manager, we make <br />{" "}
        your operations seamless.
      </small>
    </header>
  )
}

const Seacrh = () => {
  const [searchValue, SetSearchValue] = useState("")
  const [searchLocation, SetsearchLocation] = useState("")
  const [type, setType] = useState("rent")
  const router = useRouter()
  const Whole = "home"
  const Warehouse = "warehouse"
  const Flatapartment = "flatapartment"
  const handleClick = (e) => {
    e.preventDefault()
    router.push(
      `/for-rentals/properties?text=${encodeURIComponent(
        searchValue
      )}&text2=${encodeURIComponent(searchLocation)}`
    )
  }
  const handleClic = (e) => {
    e.preventDefault()
    router.push(`/for-rentals/properties?text=${encodeURIComponent(Whole)}`)
  }
  const Warehous = (e) => {
    e.preventDefault()
    router.push(`/for-rentals/properties?text=${encodeURIComponent(Warehouse)}`)
  }
  const Flatapartmen = (e) => {
    e.preventDefault()
    router.push(
      `/for-rentals/properties?text=${encodeURIComponent(Flatapartment)}`
    )
  }
  return (
    <>
      <div className="bg-lightGreen py-[.3rem] px-2 w-max rounded-045 mt-14 mb-2 font-medium mx-auto text-white">
        <button
          onClick={() => setType("rent")}
          className={`py-2 transition-all duration-150 ease-in px-4 rounded-030 ${
            type == "rent" ? "bg-primaryGreen bg-opacity-100" : "bg-opacity-0"
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => setType("buy")}
          className={`py-2 transition-all duration-150 ease-in px-4 rounded-030 ${
            type == "buy" ? "bg-primaryGreen bg-opacity-100" : "bg-opacity-0"
          }}`}
        >
          Buy
        </button>
      </div>
      <div className="flex bg-lighterGrey lg:w-1/2 md:w-3/4 m-auto justify-between h-10 pl-2">
        <div className="w-full flex items-center">
          <Image src={seacrh} alt="" />
          <input
            type="text"
            className="bg-lighterGrey h-full w-3/6 ml-2 pl-2 outline-none "
            placeholder="What property type are you looking for?"
            value={searchValue}
            onChange={(e) => {
              SetSearchValue(e.currentTarget.value)
            }}
          />
          <Image src={stroke} className="items-center ml-2" alt="" />
          <Image src={Location} className="items-center ml-6 mr-4" alt="" />
          <input
            type="text"
            className="h-full bg-lighterGrey w-28 pl-2 outline-none"
            placeholder="Local Area"
            value={searchLocation}
            onChange={(e) => {
              SetsearchLocation(e.currentTarget.value)
            }}
          />
        </div>
        <div
          className="bg-primary text-white px-5 py-2 rounded-r cursor-pointer"
          onClick={handleClick}
        >
          Submit
        </div>
      </div>
      <div>
        <ul className="flex justify-center mt-4 text-lightGrey">
          <li className="py-1 px-2 cursor-pointer" onClick={Warehouse}>
            Higlights
          </li>
          <li
            className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full cursor-pointer "
            onClick={Warehous}
          >
            Warehouse/storage facility
          </li>
          <li
            className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full cursor-pointer"
            onClick={Flatapartmen}
          >
            Flat/apartment
          </li>
          <li
            className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full cursor-pointer "
            onClick={handleClic}
          >
            Whole home
          </li>
        </ul>
      </div>
      <h1 className="text-lightGrey font-medium mx-auto w-max mt-16 text-xl">Built for and trusted by</h1>
      <div className="flex items-center justify-center gap-40 my-16">
        <Image src={NEMSA} alt="NEMSA" />
        <Image src={NIESV} alt="NIESV" />
      </div>
    </>
  )
}

const Rentals = () => {
  return (
    <section className="flex justify-between py-8 px-8 h-max bg-rentalsColor w-4/5 m-auto my-12 relative rounded">
      <div className="flex-col">
        <div className="bg-primary w-max py-2 px-6 rounded-2xl text-white text-xs">
          For renters and buyers
        </div>
        <div className="text-white text-2xl pt-6">
          Access to diverse properties <br /> for free.
        </div>
        <p className="text-white text-l pt-12">
          Make personalized choices on your property <br /> search and meet the
          homeowners and <br /> managers who have what you want.
        </p>
        <div className="text-xs text-primary bg-white text-center mt-8 w-max px-20 py-2  rounded">
          SEARCH PROPERTIES
        </div>
      </div>
      <div className="relative h-96 w-6/12 left-14 bottom-5">
        <div className="h-full absolute left-10 top-10 w-8/12 bg-managerColor rounded-2xl"></div>
        <div className="h-full absolute w-8/12 left-6 top-5 bg-sliderColor rounded-2xl"></div>
        <div className="h-full w-max relative left-3 overflow-hidden rounded-2xl">
          <Image src={lady} alt="Lady Image" />
          <span className="absolute bottom-7 text-white left-4 text-xs font-light">
            Searching for a two-bedroom apartment at Ikeja <br />{" "}
            <span className="text-xl"> Kehinde Hassan </span>{" "}
          </span>
        </div>
      </div>
    </section>
  )
}

const PropertyMangaers = () => {
  return (
    <section className="flex justify-between   h-max bg-managerColor w-4/5 m-auto my-12 relative rounded">
      <div className="flex-col px-10 pt-12">
        <div className="bg-primary w-max py-2 px-6 rounded-2xl text-white text-xs">
          For property owners and managers
        </div>
        <div className="text-white text-2xl pt-6">
          End-to-end solution for cost <br /> efficiency and execution.
        </div>
        <p className="text-white text-l pt-12">
          Digitalize your entire property operations <br /> across sales inbound
          prospecting, property <br /> operations, customer (tenant and
          landlord)
          <br /> relations and back-office.
        </p>
        <div className="text-xs text-primary bg-white text-center mt-8 w-max px-20 py-2  rounded">
          GET STARTED
        </div>
      </div>
      <div className="w-1/2 pt-12">
        <Image src={Image8} alt="Managers Image" />
      </div>
    </section>
  )
}
const BenefitHeader = () => {
  return (
    <h1 className="flex justify-center mb-10 text-primary text-2xl uppercase">
      Benefits
    </h1>
  )
}

const Benefit = () => {
  const benefits = [
    {
      id: 1,
      image: "/assets/icons/fi_cloud-lightning.png",
      heading: "Property search",
      text: "Searching for rental roperties is one  thing, finding suitable ones for you without hassles is another. We handle that burden for you.",
    },
    {
      id: 2,
      image: "/assets/icons/fi_cloud-lightning.png",
      heading: "Cloud based support",
      text: "We provide tenant onboarding, property operations support (including financial tools) for property managers and owners.",
    },
    {
      id: 3,
      image: "/assets/icons/fi_cloud-lightning.png",
      heading: "Brand support",
      text: "We enable property managers and owners with client-facing tools to entrench their brands and get rental inbounds.",
    },
  ]
  // console.log(benefitData);
  // const [benefits, setBenefits] = useState([]);
  // const fetchBenefits = async () => {
  //   const response = await fetch(`/api/benefits`);
  //   const data = await response.json();
  //   setBenefits(data);
  // };
  // useEffect(() => {
  //   fetchBenefits();
  // }, []);
  return (
    <>
      {benefits.map((benefit) => {
        return (
          <div
            key={benefit.id}
            className=" text-start w-1/4 px-4 py-12 text-benefitColor border-2 border-dashed rounded border-primary m-4 p-4"
          >
            <div className="flex justify-center">
              <Image
                // src={`//public/assets/icons/${benefit.image}`}
                src={benefit.image}
                width={30}
                height={30}
                alt="Benefit Image"
              />
            </div>
            <div className="text-2xl text-center py-4">{benefit.heading}</div>
            <div className="">{benefit.text}</div>
          </div>
        )
      })}
    </>
  )
}

const ForRentals = () => {
  const [rentals, setRentals] = useState([])
  const fetchRentals = async () => {
    const response = await fetch(`/api/rentals`)
    const data = await response.json()
    setRentals(data)
  }
  useEffect(() => {
    fetchRentals()
  }, [])
  return (
    <>
      <div className="uppercase flex w-full justify-center py-12 text-primary text-2xl  font-bold">
        how it works
      </div>
      <section className="flex w-full justify-center m-auto">
        <div className=" w-1/2 flex justify-end items-center">
          <Image src={iPhone} width={330} alt="Phone Image" />
        </div>
        <div className="ml-44">
          <div className="text-3xl font-bold">
            For renters <br /> <br />
          </div>
          {rentals.map((rental) => {
            return (
              <div key={rental.id} className="w-full flex-col  ml-">
                <ul>
                  <li>
                    <span className="font-bold text-primary text-2xl pr-2">
                      {rental.id}
                    </span>
                    <span className="pt-8 font-bold text-xl  w-full">
                      {rental.heading}
                    </span>
                  </li>
                </ul>
                <p className="pl-6 pt-6 pb-8 w-2/3 text-xl">{rental.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

const ForManagers = () => {
  const [managers, setManagers] = useState([])
  const fetchManagers = async () => {
    const response = await fetch(`/api/managers`)
    const data = await response.json()
    setManagers(data)
  }
  useEffect(() => {
    fetchManagers()
  }, [])
  return (
    <>
      <section className="flex w-full justify-center m-auto mt-14">
        <div className="ml-32">
          <div className="text-3xl font-bold w-3/4">
            For property managers/owners <br /> <br />
          </div>
          {managers.map((manager) => {
            return (
              <div key={manager.id} className="w-3/4 flex-col">
                <ul>
                  <li>
                    <span className="font-bold text-primary text-2xl pr-2">
                      {manager.id}
                    </span>
                    <span className="pt-8 font-bold text-xl  w-full">
                      {manager.heading}
                    </span>
                  </li>
                </ul>
                <p className="pl-6 pt-6 pb-8 w-3/4 text-xl">{manager.text}</p>
              </div>
            )
          })}
        </div>
        <div className="md:full lg:w-4/5 flex justify-end items-center">
          <Image src={managerImage} width={1000} alt="Manager Image" />
        </div>
      </section>
    </>
  )
}

const Stories = () => {
  return (
    <>
      <h1 className="flex justify-center font-bold text-primary mb-12 mt-28 text-2xl">
        COG STORIES
      </h1>
      <section className=" flex w-2/4 m-auto justify-center mb-12">
        <div className="flex justify-between items-center w-fill mr-20">
          <Image width={1000} src={biodun} alt="Biodun Icon" />
        </div>
        <div>
          <span className="block mb-8 font-bold">Management Opertaions</span>

          <span className="">
            Property managers and owners are most worried about customer
            relationship management, which includes landlords and tenants. COG
            allows us do all of that while providing the overall best rental
            experience.
          </span>
          <div className="font-bold mt-4">
            <span className="w-full h-2 border-r-4 border-black mr-4"></span>
            Biodun Ayo Odeleye
          </div>
        </div>
      </section>
    </>
  )
}

const Why = () => {
  return (
    <section className="flex-col justify-center m-auto text-center mt-28">
      <h2 className="uppercase font-bold text-primary text-2xl">Why COG</h2>
      <p className="font-bold mb-10 text-2xl mt-8">
        We know property management is difficult - we help you deliver a better
        rental experience.
      </p>
      <div className="flex justify-between w-5/6 m-auto text-start ">
        {/* Change the width to 80% or greater */}
        <div className="items-center w-1/4  pr-10">
          <span className="flex justify-center bg-sliderColor w-max p-8 rounded-2xl m-auto">
            <Image src={sliders} alt="Sliders Image" />
          </span>
          <h1 className="py-4 font-bold text-2xl">Full Control</h1>
          <p className="text-start text-xs  font-medium">
            We have developed a full stack of tools to improve your rental
            experience.
          </p>
        </div>
        <div className=" w-1/4 pr-10">
          <span className="flex justify-center bg-databaseColor w-max p-8 rounded-2xl m-auto">
            <Image src={database} alt="database Image" />
          </span>
          <h1 className="py-4 font-bold text-2xl">No hidden charges </h1>
          <p className="text-start text-xs  font-medium">
            No hidden charges We charge a specific price for each specific user
            type. Our value added services are also transparent.
          </p>
        </div>
        <div className=" w-1/4 pr-10">
          <span className="flex justify-center bg-keyColor w-max p-8 rounded-2xl m-auto">
            <Image src={key} alt="Key Image" />
          </span>
          <h1 className="py-4 font-bold text-2xl">Resident Center</h1>
          <p className="text-start text-xs  font-medium">
            We help you get and keep higher value clients.
          </p>
        </div>
        <div className=" w-1/4 pr-10">
          <span className="flex justify-center bg-searchColor w-max p-8 rounded-2xl m-auto">
            <Image src={database} alt="database Image" />
          </span>
          <h1 className="py-4 font-bold text-2xl">Insightful Search</h1>
          <p className="text-start text-xs font-medium">
            We help you get access to in-class properties stress-free.
          </p>
        </div>
      </div>
    </section>
  )
}

const Faq = () => {
  const [display1, setDisplay1] = useState(false)
  const [display2, setDisplay2] = useState(false)
  const [display3, setDisplay3] = useState(false)
  const [display4, setDisplay4] = useState(false)
  const toggle1 = () => {
    setDisplay1(!display1)
  }
  const toggle2 = () => {
    setDisplay2(!display2)
  }
  const toggle3 = () => {
    setDisplay3(!display3)
  }
  const toggle4 = () => {
    setDisplay4(!display4)
  }
  return (
    <section className="my-12">
      <div className="flex justify-center font-bold text-primary mb-8">
        FREQUENTLY ASKED QUESTIONS
      </div>
      <div>
        <div className=" flex justify-center mt-4">
          <div className=" w-3/4 text-center " onClick={toggle1}>
            <h3 className="flex bg-primary px-12 py-2 rounded justify-between items-center text-center text-white">
              What is COG Property management software and who is it for?{" "}
              <span className="cursor-pointer">
                <Image src={Arrow} width={20} alt="" />{" "}
              </span>
            </h3>
            {display1 && (
              <p className="text-start mt-6 transition-transform ease-in-out duration-300">
                COG property management software facilitates the rental process
                and experience between the renters and property a driving
                administrators, manager and owners. Primarily, this software is
                supposed to make the process of renting a property easier for
                both parties covering sales and branding. Then, it digitizes and
                automates the rental experience management for both parties.
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className=" flex justify-center mt-4">
          <div className=" w-3/4 text-center " onClick={toggle2}>
            <h3 className="flex bg-primary px-12 py-2 rounded justify-between items-center text-center text-white">
              Pricing and services
              <span className="cursor-pointer">
                <Image src={Arrow} width={20} alt="" />{" "}
              </span>
            </h3>
            {display2 && (
              <p className="text-start mt-6 transition-transform ease-in-out duration-300">
                COG helps you list your homes and helps you boost your outreach
                and brand thorugh a website page. Your property and business
                operations of rent, maintenance, services, schedules etc can be
                automated for you. Subsequently, we are offering vendor
                recommendations to COG vetted service providers to outsource
                your facility management.
              </p>
            )}
          </div>
        </div>{" "}
        <div>
          <div className=" flex justify-center mt-4">
            <div className=" w-3/4 text-center " onClick={toggle3}>
              <h3 className="flex bg-primary px-12 py-2 rounded justify-between items-center text-center text-white">
                Legal statement
                <span className="cursor-pointer">
                  <Image src={Arrow} width={20} alt="" />{" "}
                </span>
              </h3>
              {display3 && (
                <p className="text-start mt-6 transition-transform ease-in-out duration-300">
                  COG primarily provides software tht helps you run your
                  business more efficiently, with less oversight. You are to use
                  this software as you would other business software. COG cannot
                  get sued for its services but would seek other channels of
                  conflict resolution, especially those related to work output.
                  Also, when a client purchases materials independently (i.e.
                  not from COG Technical services),the client is liable to any
                  unintended implications derived from the standard of that
                  material
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-center mt-4">
            <div className=" w-3/4 text-center " onClick={toggle4}>
              <h3 className="flex bg-primary px-12 py-2 rounded justify-between items-center text-center text-white">
                Bank accounts
                <span className="cursor-pointer">
                  <Image src={Arrow} width={20} alt="" />{" "}
                </span>
              </h3>
              {display4 && (
                <p className="text-start mt-6 transition-transform ease-in-out duration-300">
                  We provide virtual bank accounts wih your business name to
                  make the operability for inflows and outflows serve you
                  better. COG allows you receive rent from your tenants,pay your
                  vendors and employees.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
