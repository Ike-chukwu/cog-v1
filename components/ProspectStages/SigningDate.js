import React from "react"

const SigningDate = ({ signingDate, setSigningDate }) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-xl font-semibold opacity-70">Signing details</h3>
        <p className="opacity-60 mt-4">Input the potential move in date</p>
      </div>

      <ul className="list-disc ml-6 mb-8">
        <li>
          <p className="font-semibold opacity-70">Potential move in date</p>
          <input
            type="date"
            value={signingDate}
            placeholder="Enter date"
            onChange={(e) => setSigningDate(e.target.value)}
            className="uppercase border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
          />
        </li>
      </ul>
    </div>
  )
}

export default SigningDate
