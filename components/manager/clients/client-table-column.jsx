import DropdownButton from "@/components/shared/dropdown-btn"
import { createColumnHelper } from "@tanstack/react-table"
import {
  IoArrowForwardSharp,
  IoInformationCircleOutline,
} from "react-icons/io5"
import { MdOutlineEdit } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"

const getColumnDefinitions = () => {
  const columnHelper = createColumnHelper()

  const options = [
    { label: "Delete", icon: <TiDeleteOutline size="1.35rem" color="red" /> },
    { label: "Edit", icon: <MdOutlineEdit size="1rem" />, link: "/claims/new" }, // this link should be "claims/edit/${id}" and the initial values for the fields will be values returned from the API
    { label: "View Details", icon: <IoInformationCircleOutline size="1rem" /> },
  ]

  const columns = [
    // columnHelper.display({
    //   id: "select",
    //   header: ({ table }) => (
    //     <IndeterminateCheckbox
    //       {...{
    //         checked: table.getIsAllRowsSelected(),
    //         indeterminate: table.getIsSomeRowsSelected(),
    //         onChange: table.getToggleAllRowsSelectedHandler(),
    //       }}
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <div className="px-1">
    //       <IndeterminateCheckbox
    //         {...{
    //           checked: row.getIsSelected(),
    //           disabled: !row.getCanSelect(),
    //           indeterminate: row.getIsSomeSelected(),
    //           onChange: row.getToggleSelectedHandler(),
    //         }}
    //       />
    //     </div>
    //   ),
    // }),

    columnHelper.accessor("date", {
      header: () => <span className="text-[8px] text-[#B1B1B4]">Date</span>,
      cell: (info) => (
        <span className="text-[#386A8B] text-[8px]">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("invoiceNumber", {
      header: () => <span className="text-[8px] text-[#B1B1B4]">Invoice</span>,
      cell: (info) => <span className=" text-[8px]">{info.getValue()}</span>,
    }),

    columnHelper.accessor("currency", {
      header: () => (
        <span className="text-[8px] text-[#B1B1B4] px-2">Currency</span>
      ),
      cell: (info) => <span className=" text-[8px]">{info.getValue()}</span>,
    }),
    columnHelper.accessor("amount", {
      header: () => <span className="text-[8px] text-[#B1B1B4]">Amount</span>,
      cell: (info) => <span className=" text-[8px]">{info.getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: () => <span className="text-[8px] text-[#B1B1B4]">Status</span>,
      cell: (info) => (
        <p
          className={`text-center w-[45px] font-[400] border py-1 rounded-[5px] text-[8px] ${
            info.getValue() === "Paid" && " bg-[#9FF1CA] text-[#049561] "
          } 
          ${info.getValue() === "Pending" && " text-[#FFA902] bg-[#FFA9024F]"} 
          ${info.getValue() === "Overdue" && " bg-[#FF4D4D4F] text-[#FF4D4D]"}`}
        >
          <span
            className={` 
           
          `}
          >
            {info.getValue()}
          </span>
        </p>
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: (info) => (
        <DropdownButton
          label={
            <span className="bg-[#E9E9EC] rounded-[5px] p-1">
              <IoArrowForwardSharp color="#00000033" size="1rem" />{" "}
            </span>
          }
          options={options}
          className="bg-transparent w-fit p-0 text-black border-0"
          popoverClassName="w-[150px]"
        />
      ),
    }),
  ]
  return columns
}

export default getColumnDefinitions
