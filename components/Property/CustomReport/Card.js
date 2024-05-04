export const SmallCard = ({ text, num }) => {
  return (
    <div className="border border-[#62909F] px-3 py-10 text-center rounded-[10px] flex flex-col items-center gap-3 w-52">
      <h1 className="px-6 py-4 rounded-full bg-lighterGrey font-bold">{num}</h1>
      <h1 className="text-dark text-sm font-medium">{text}</h1>
    </div>
  )
}

export const Bigcard = ({ variant }) => {
  return (
    <>
      {variant !== "recent" ? (
        <div className="border border-[#62909F] px-3 py-10 rounded-[10px] flex flex-col items-center gap-3 w-1/2">
          <h1 className="px-6 py-4 rounded-full bg-lighterGrey font-bold">
            16
          </h1>
          <h1 className="px-6 py-4 rounded-full text-dark mb-8">Tenants</h1>
          <div className="flex gap-2 items-center">
            <h1 className="px-4 py-4 rounded-full font-bold border-2 border-cog-color bg-[#D2F4FF]">
              PA
            </h1>
            <h1 className="px-4 py-4 rounded-full font-bold border-2 border-cog-color bg-[#D2F4FF]">
              KZ
            </h1>
            <h1 className="px-4 py-4 rounded-full font-bold border-2 border-cog-color bg-[#D2F4FF]">
              BJ
            </h1>
            <p className="whitespace-nowrap ">and others</p>
          </div>
        </div>
      ) : (
        <div className="border border-[#62909F] px-2 py-5 rounded-[10px] flex flex-col items-center gap-3 w-1/2">
          <div className="flex justify-between gap-7">
            <h1>Recent activity</h1>
            <h1>View all</h1>
          </div>
        </div>
      )}
    </>
  )
}
