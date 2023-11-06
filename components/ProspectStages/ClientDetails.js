import Image from "next/image"
import { Fragment } from "react"

const ClientDetails = ({
  subStage,
  upload,
  checklist,
  clientType,
  clientName,
  clientContact,
  setUpload,
  setChecklist,
  setClientType,
  setClientName,
  setClientContact,
}) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return (
          <ClientType clientType={clientType} setClientType={setClientType} />
        )
      case 2:
        return (
          <ClientName clientName={clientName} setClientName={setClientName} />
        )
      case 3:
        return (
          <ClientContact
            clientContact={clientContact}
            setClientContact={setClientContact}
          />
        )
      case 4:
        return (
          <VerificationChecklist
            clientType={clientType}
            checklist={checklist}
            setChecklist={setChecklist}
          />
        )
      case 5:
        return <VerificationUpload upload={upload} setUpload={setUpload} />
      default:
        return (
          <ClientType clientType={clientType} setClientType={setClientType} />
        )
    }
  }
  return getStage()
}

export default ClientDetails

const Wrapper = ({ children, header, subHead }) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-xl font-semibold opacity-70">{header}</h3>
        <p className="opacity-60 mt-4">{subHead}</p>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  )
}

const ClientType = ({ clientType, setClientType }) => {
  return (
    <Wrapper header="Client type" subHead="Select client type">
      <div>
        <div className="mb-10">
          <input
            type="radio"
            name="type"
            value="company"
            className="cursor-pointer mr-2"
            checked={clientType === "company"}
            onChange={(e) => setClientType(e.target.value)}
          />
          <span>Company/organization</span>
        </div>

        <div>
          <input
            type="radio"
            name="type"
            value="induvidual"
            className="cursor-pointer mr-2"
            checked={clientType === "induvidual"}
            onChange={(e) => setClientType(e.target.value)}
          />
          <span>Individual</span>
        </div>
      </div>
    </Wrapper>
  )
}

const ClientName = ({ clientName, setClientName }) => {
  return (
    <Wrapper header="Client name" subHead="Enter client name">
      <ul className="list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Client name</p>
          <input
            type="text"
            value={clientName}
            placeholder="Enter state"
            onChange={(e) => setClientName(e.target.value)}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}
const ClientContact = ({ clientContact, setClientContact }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setClientContact((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  return (
    <Wrapper
      header="Client contact"
      subHead="This is where you enter the contact details of the prospect"
    >
      <ul className="grid gap-8 list-disc ml-6">
        <li>
          <p className="font-semibold opacity-70">Email address</p>
          <input
            type="email"
            name="email"
            value={clientContact.email}
            placeholder="Enter email address"
            onChange={handleInputChange}
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>

        <li>
          <p className="font-semibold opacity-70">Phone number</p>
          <input
            type="text"
            name="number"
            value={clientContact.number}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

const VerificationChecklist = ({ clientType, checklist, setChecklist }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setChecklist((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <Wrapper
      header="Verification checklist"
      subHead="Select identity verification type"
    >
      <div className="grid gap-4">
        {clientType === "company" && (
          <Fragment>
            <div>
              <input
                name="CAC"
                type="checkbox"
                checked={checklist.CAC}
                onChange={handleInputChange}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>CAC Incorporation Certificate</span>
            </div>
            <div>
              <input
                name="tax"
                type="checkbox"
                checked={checklist.tax}
                onChange={handleInputChange}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>Tax certificate</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="creditReport"
                checked={checklist.creditReport}
                onChange={handleInputChange}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>Credit report</span>
            </div>
          </Fragment>
        )}
        {clientType === "induvidual" && (
          <Fragment>
            <div>
              <input
                name="identity"
                type="checkbox"
                checked={checklist.identity}
                onChange={handleInputChange}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>
                National identity certificate e.g International passport, NIN
                etc
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                name="creditReportTwo"
                onChange={handleInputChange}
                checked={checklist.creditReportTwo}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>Credit report</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="confirmation"
                onChange={handleInputChange}
                checked={checklist.confirmation}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>Employment confirmation</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="policeReport"
                onChange={handleInputChange}
                checked={checklist.policeReport}
                className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent- h-5 w-5 border border-[#B1B1B4] bg-[#E2E4F0] rounded-sm mr-2"
              />
              <span>Police report</span>
            </div>
          </Fragment>
        )}
      </div>
    </Wrapper>
  )
}

const VerificationUpload = ({ upload, setUpload }) => {
  const handleFile = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    setUpload(url)
  }
  return (
    <Wrapper
      header="Verification upload"
      subHead="Upload identity verification selection"
    >
      <input
        type="file"
        id="file"
        className="hidden"
        accept=".jpg, .png, .pdf"
        onChange={handleFile}
      />
      <label
        htmlFor="file"
        className="border border-dashed border-primary p-4 flex items-center gap-12 cursor-pointer"
      >
        <Image
          src="/assets/icons/download-icon.png"
          alt="Download"
          width={60}
          height={60}
          priority
        />

        <div>
          <h4 className="uppercase text-lg">
            Drag file here or <span className="text-primary">browse</span>
          </h4>
          <p className="my-1 opacity-70">Supported file types: JPG, PNG, PDF</p>
          <p className="opacity-70">The file size can be up to 20MB</p>
        </div>
      </label>
    </Wrapper>
  )
}
