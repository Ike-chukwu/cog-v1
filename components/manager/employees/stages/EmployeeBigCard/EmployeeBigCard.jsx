import ClientTable from "@/components/manager/clients/client-table"

export const SmallCard = ({ text, num }) => {
  return (
    <div className="border border-[#62909F] px-3 py-10 text-center rounded-[10px] flex flex-col items-center gap-3 w-52">
      <h1 className="px-6 py-4 rounded-full bg-lighterGrey font-bold">{num}</h1>
      <h1 className="text-dark text-sm font-medium">{text}</h1>
    </div>
  )
}

export const EmployeeBigcard = ({ variant }) => {
  return (
    <>
      {variant !== "recent" ? (
        <div className="border border-[#62909F] px-3 py-10 rounded-[10px] flex flex-col gap-6 w-1/2">
          <h1 className="text-[20px] font-[400] self-start">Employee note</h1>
          <div className="flex gap-10 flex-col items-start">
            <div className="flex justify-between w-full">
              <p className="text-[14px]">Classification</p>
              <p className="text-[14px]">Lekki property</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[14px]">Account name</p>
              <p className="text-[14px]">Adetunji Tobi </p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[14px]">Account number</p>
              <p className="text-[14px]">0123456789 </p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[14px]">Bank name</p>
              <p className="text-[14px]">UBA bank</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[14px]">Date added</p>
              <p className="text-[14px]">12-02-2022</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-[#62909F] px-2 py-5 rounded-[10px] flex flex-col items-center gap-3 w-1/2">
          <div className="flex justify-between gap-7">
            <h1>Recent activity</h1>
            <h1>View all</h1>
          </div>
          <ClientTable />
        </div>
      )}
    </>
  )
}
