import Dashboard from "@/components/Layout/Dashboard"
import Image from "next/image"
import { useReducer } from "react"
import download_icon from "/public/assets/icons/download-icon.png"
import facebook_logo from "/public/assets/icons/facebook-logo.png"
import instagram_logo from "/public/assets/icons/instagram-logo.png"
import twitter_logo from "/public/assets/icons/twitter-logo.png"

const MakeMarketplace = () => {
  const initState = {
    x: 0,
    y: 0,
    stepForm: [
      {
        title: "Entity Details",
        complete: false,
        subtitle: [
          { title: "Business description/tagline", complete: true },
          { title: "Web link", complete: false },
          { title: "Social media", complete: false },
        ],
      },
      {
        title: "Appearance",
        complete: false,
        subtitle: [
          { title: "Background Image", complete: false },
          { title: "Logo", complete: false },
          { title: "Colour set", complete: false },
        ],
      },
      {
        title: "Featured property",
        complete: false,
        subtitle: [
          { title: "Name of portfolio property", complete: false },
          { title: "Background image of property", complete: false },
          { title: "Additional images", complete: false },
          { title: "Property type", complete: false },
          { title: "Address", complete: false },
          { title: "Location", complete: false },
          { title: "Amount", complete: false },
          { title: "Features", complete: false },
          { title: "Description", complete: false },
          // { title: "Additional settings", complete: false },
          { title: "Additional information", complete: false },
        ],
      },
      { title: "Summary", complete: false },
    ],
  }

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return {
          ...state,
          x: action.x,
          y: action.y,
          stepForm: [
            ...state.stepForm.slice(0, action.x),
            {
              ...state.stepForm[action.x],
              subtitle:
                state.stepForm[action.x].subtitle !== undefined
                  ? [
                      ...state.stepForm[action.x].subtitle.slice(0, action.y),
                      {
                        ...state.stepForm[action.x].subtitle[action.y],
                        complete: action.complete,
                      },
                      ...state.stepForm[action.x].subtitle.slice(action.y + 1),
                    ]
                  : undefined,
            },
            ...state.stepForm.slice(action.x + 1),
          ],
        }
      }
      case "DECREMENT": {
        return {
          ...state,
          x: action.x,
          y: action.y,
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, initState)

  const components = [
    [
      <BusinessDescription key={dispatch} dispatch={dispatch} />,
      <WebLink key={dispatch} dispatch={dispatch} />,
      <SocialMedia key={dispatch} dispatch={dispatch} />,
    ],
    [
      <BackgroundImage key={dispatch} dispatch={dispatch} />,
      <Logo key={dispatch} dispatch={dispatch} />,
      <ColorSet key={dispatch} dispatch={dispatch} />,
    ],
    [
      <NameOfPortfolioProperty key={dispatch} dispatch={dispatch} />,
      <BackgroundImageOfProperty key={dispatch} dispatch={dispatch} />,
      <AdditionalImages key={dispatch} dispatch={dispatch} />,
      <PropertyType key={dispatch} dispatch={dispatch} />,
      <Address key={dispatch} dispatch={dispatch} />,
      <Location key={dispatch} dispatch={dispatch} />,
      <Amount key={dispatch} dispatch={dispatch} />,
      <Features key={dispatch} dispatch={dispatch} />,
      <Description key={dispatch} dispatch={dispatch} />,
      <AdditionalInformation key={dispatch} dispatch={dispatch} />,
    ],
  ]

  return (
    <Dashboard>
      <main className="p-10 flex-1">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">
              Marketplace
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
        <h2 className="text-[#B1B1B4] text-[22px]">Set listings page</h2>

        <section className="border-[1px] border-[#62909F] py-16 px-5 ml-5 mt-10 flex gap-x-20">
          <div>
            {state.stepForm.map((step, i) => (
              <div key={i}>
                <div className="flex gap-x-4">
                  <div className="flex flex-col w-max">
                    <div
                      className={`grid place-items-center h-[25px] w-[25px] rounded-[50%] text-[12px] ${
                        state.x === i ? "border-[2px]" : "border-[1px]"
                      } border-[#049561] ${
                        step.subtitle !== undefined
                          ? step.subtitle
                              .map((e) => e.complete)
                              .every((e) => e === true)
                            ? "bg-[#049561] text-white"
                            : "text-[#049561]"
                          : "text-[#049561]"
                      }`}
                    >
                      {step.subtitle !== undefined
                        ? step.subtitle
                            .map((e) => e.complete)
                            .every((e) => e === true)
                          ? "✔"
                          : i + 1
                        : i + 1}
                    </div>
                    {i === state.stepForm.length - 1 ? null : (
                      <div className="h-[10px] w-[1px] bg-[#049561] mx-auto"></div>
                    )}
                  </div>
                  <h2 className="font-bold text-[18px] text-[#4B4B4B]">
                    {step.title}
                  </h2>
                </div>
                {step.subtitle !== undefined
                  ? i !== state.stepForm.length - 1
                    ? i === state.x
                      ? step.subtitle.map((subStep, index) => (
                          <div className="flex gap-x-4 pl-[8px]" key={index}>
                            <div className="flex flex-col w-max">
                              <div
                                className={`grid place-items-center h-[9px] w-[9px] text-[9px] border-[1px] border-[#049561] ${
                                  state.y === index || subStep.complete
                                    ? "border-[2px]"
                                    : "border-[1px]"
                                }`}
                              ></div>
                              <div className="h-[10px] w-[1px] bg-[#049561] mx-auto"></div>
                            </div>
                            <h2 className="font-bold text-[12px] mt-[-2px] text-[#4B4B4B] pl-[7px]">
                              {subStep.title}
                            </h2>
                          </div>
                        ))
                      : null
                    : null
                  : null}
              </div>
            ))}
          </div>
          {components[state.x][state.y]}
        </section>
      </main>
    </Dashboard>
  )
}

export default MakeMarketplace

const BusinessDescription = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 0, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Business description/tagline
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              First, enter your business description/tagline:
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Tagline</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Enter business description/tagline"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const WebLink = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 0, y: 2, complete: true })
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", x: 0, y: 1 })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Web link
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Enter your online web link:
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Web link</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="cog.properties/"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const SocialMedia = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 1, y: 0, complete: true })
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", x: 0, y: 2 })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Social media
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Enter your company/brand social media details:
            </p>
          </header>
          <section className="pt-16 flex flex-col gap-y-10">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] my-auto"></div>
              <div className="flex-1 flex h-[40px]">
                <figure className="border-[1px] h-full border-[#62909F] w-[50px] grid place-items-center">
                  <Image src={twitter_logo} alt="Twitter Logo" />
                </figure>
                <input
                  className="border-[#62909F] outline-none h-full border-[1px] border-l-0 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Twitter URL"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] my-auto"></div>
              <div className="flex-1 flex h-[40px]">
                <figure className="border-[1px] h-full border-[#62909F] w-[50px] grid place-items-center">
                  <Image src={instagram_logo} alt="Instagram Logo" />
                </figure>
                <input
                  className="border-[#62909F] outline-none h-full border-[1px] border-l-0 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Instagram URL"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] my-auto"></div>
              <div className="flex-1 flex h-[40px]">
                <figure className="border-[1px] h-full border-[#62909F] w-[50px] grid place-items-center">
                  <Image src={facebook_logo} alt="Facebook Logo" />
                </figure>
                <input
                  className="border-[#62909F] outline-none h-full border-[1px] border-l-0 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Facebook URL"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BackgroundImage = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 1, y: 1, complete: true })
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", x: 1, y: 0 })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Background image
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Enter your company background image:
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-8">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-4"></div>
              <div className="flex-1 flex p-5 pl-8 gap-x-8  border-dashed border-2 border-primary">
                <figure>
                  <Image src={download_icon} alt="Download Icon" />
                </figure>
                <figcaption>
                  <h1 className="font-bold">
                    DRAG FILE HERE OR{" "}
                    <span className="text-primary">BROWSE</span>
                  </h1>
                  <p className="text-[#B1B1B4]">
                    Supported file types: JPG, PNG, PDF
                  </p>
                  <p className="text-[#B1B1B4]">
                    The file size can be up to 20MB
                  </p>
                </figcaption>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Logo = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 1, y: 2, complete: true })
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", x: 1, y: 1 })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">Logo</h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Enter your company/brand logo:
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-8">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-4"></div>
              <div className="flex-1 flex p-5 pl-8 gap-x-8  border-dashed border-2 border-primary">
                <figure>
                  <Image src={download_icon} alt="Download Icon" />
                </figure>
                <figcaption>
                  <h1 className="font-bold">
                    DRAG FILE HERE OR{" "}
                    <span className="text-primary">BROWSE</span>
                  </h1>
                  <p className="text-[#B1B1B4]">
                    Supported file types: JPG, PNG, PDF
                  </p>
                  <p className="text-[#B1B1B4]">
                    The file size can be up to 20MB
                  </p>
                </figcaption>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ColorSet = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 0, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Colour set
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Enter your brand color:
            </p>
          </header>
          <section className="pt-16 flex flex-col gap-y-16">
            <div className="flex gap-x-4 items-center cursor-pointer">
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[6px] bg-[#fff] block rounded-[50%] cog-list-style"></span>
              <div className="flex flex-col flex-1">
                <h2>Select colour</h2>
                <div className="flex gap-x-2 pt-2">
                  <div className="h-[20px] w-[20px] bg-[#2817E9] rounded-[50%]"></div>
                  <div className="h-[20px] w-[20px] bg-[#FFA902] rounded-[50%]"></div>
                  <div className="h-[20px] w-[20px] bg-[#EC1406] rounded-[50%]"></div>
                  <div className="h-[20px] w-[20px] bg-[#049561] rounded-[50%]"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 items-center cursor-pointer">
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[6px] bg-[#fff] block rounded-[50%] cog-list-style"></span>
              <div>
                <h2>Hex code</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter hex code"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const NameOfPortfolioProperty = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 1, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Name of portfolio property
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Enter the name of a property you currently manage.
            </p>
          </header>
          <section className="pt-16 flex flex-col gap-y-16">
            <div className="flex gap-x-4 items-center cursor-pointer">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-4"></div>
              <div>
                <h2>Name of property</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter name of property"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BackgroundImageOfProperty = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 2, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Background image of property
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Upload the main image of the property to be listed.
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-8">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-4"></div>
              <div className="flex-1 flex p-5 pl-8 gap-x-8  border-dashed border-2 border-primary">
                <figure>
                  <Image src={download_icon} alt="Download Icon" />
                </figure>
                <figcaption>
                  <h1 className="font-bold">
                    DRAG FILE HERE OR{" "}
                    <span className="text-primary">BROWSE</span>
                  </h1>
                  <p className="text-[#B1B1B4]">
                    Supported file types: JPG, PNG, PDF
                  </p>
                  <p className="text-[#B1B1B4]">
                    The file size can be up to 20MB
                  </p>
                </figcaption>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const AdditionalImages = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 3, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px]">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Additional images
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Let&rsquo;s set up your property listing page - Your property
              listing page is where clients view your listings.
            </p>
            <p className="text-[#B1B1B4] text-[15px]">
              Upload an additional image(s) of the property to be listed.
            </p>
          </header>
          <section className="pt-16">
            <div className="flex gap-x-8">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-4"></div>
              <div className="flex-1 flex p-5 pl-8 gap-x-8  border-dashed border-2 border-primary">
                <figure>
                  <Image src={download_icon} alt="Download Icon" />
                </figure>
                <figcaption>
                  <h1 className="font-bold">
                    DRAG FILE HERE OR{" "}
                    <span className="text-primary">BROWSE</span>
                  </h1>
                  <p className="text-[#B1B1B4]">
                    Supported file types: JPG, PNG, PDF
                  </p>
                  <p className="text-[#B1B1B4]">
                    The file size can be up to 20MB
                  </p>
                </figcaption>
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyType = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 4, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Property type
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Select the type of property to be listed.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <label
              htmlFor="cog-radio-warehouse"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-warehouse"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Warehouse/storage facility</span>
            </label>
            <label
              htmlFor="cog-radio-whole"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-whole"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Whole home</span>
            </label>
            <label
              htmlFor="cog-radio-office"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-office"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Office space</span>
            </label>
            <label
              htmlFor="cog-radio-retail"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-retail"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Retail shop space</span>
            </label>
            <label
              htmlFor="cog-radio-flat"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="radio"
                name="cog-radio"
                id="cog-radio-flat"
                className="cog-radio-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] cog-radio-btn"></span>
              <span>Flat/apartment</span>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Address = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 5, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Address
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Enter the address of the property.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div>
                <h2>Enter address</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Location = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 6, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Location
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              This is where you enter the location of the property being listed.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-16 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>State</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Enter state"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Local Government Area</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Enter L.G.A"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Landmark/ward</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Landmark/ward"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Amount = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 7, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Rental amount
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              This is where you enter the location of the property being listed.
            </p>
          </header>
          <section className="pt-16 flex gap-x-5 gap-y-14 flex-col">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Total rental/purchase fee</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Service charges</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Other amounts</h2>
                <input
                  className="border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Features = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 8, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Features
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              This is where you enter the features of the property being listed.
            </p>
          </header>
          <section className="pt-10 flex flex-col gap-y-8">
            <label
              htmlFor="cog-checkbox-wifi"
              className="flex gap-x-4 items-center cursor-pointer"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-wifi"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>WiFi</p>
            </label>
            <label
              htmlFor="cog-checkbox-utilities"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-utilities"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Utilities</p>
            </label>
            <label
              htmlFor="cog-checkbox-parking"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-parking"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Parking</p>
            </label>
            <label
              htmlFor="cog-checkbox-security"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-security"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Security</p>
            </label>
            <label
              htmlFor="cog-checkbox-cleaning"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-cleaning"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Cleaning</p>
            </label>
            <label
              htmlFor="cog-checkbox-pool"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-pool"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Swimming pool</p>
            </label>
            <label
              htmlFor="cog-checkbox-pets"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-pets"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Pets allowed</p>
            </label>
            <label
              htmlFor="cog-checkbox-fitness"
              className="flex gap-x-4 items-center cursor-pointer self-start"
            >
              <input
                type="checkbox"
                name="cog-checkbox"
                id="cog-checkbox-fitness"
                className="cog-checkbox-btn-input hidden"
              />
              <span className="h-[26px] w-[26px] self-start relative border-2 border-primary p-[4px] bg-[#fff] block cog-checkbox-btn"></span>
              <p>Fitness centres</p>
            </label>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Description = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 9, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Description
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              This is where you enter the features of the property being listed.
            </p>
          </header>
          <section className="pt-10">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Enter property tagline, description, mission.</h2>
                <textarea
                  rows="5"
                  className="outline-none border-[#62909F] border-[1px] mt-3 py-1 px-2 resize-none bg-[#F5F7F9] max-w-[400px] w-full"
                  placeholder="Enter property tagline, description, mission."
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const AdditionalInformation = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", x: 2, y: 9, complete: true })
  }

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <div className="h-[450px] overflow-y-auto">
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
              Additional information
            </h1>
            <h2 className="font-bold text-[17px] text-[#4B4B4B] mb-3">
              Hello, Biodun Odeleye & Co.!
            </h2>
            <p className="text-[#B1B1B4] text-[15px] mb-3">
              Provide additional details about the property listing.
            </p>
          </header>
          <section className="pt-10 flex flex-col gap-y-10">
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Number of sitting rooms</h2>
                <input
                  className="outline-none border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Number of bedrooms</h2>
                <input
                  className="outline-none border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
              <div className="flex-1">
                <h2>Number of restrooms</h2>
                <input
                  className="outline-none border-[#62909F] border-[1px] mt-3 py-1 px-2 max-w-[400px] w-full"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2">
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
