import DropdownButton from "@/components/shared/dropdown-btn"
import IndeterminateCheckbox from "@/components/shared/table/intermediate-checkbox"
import { createColumnHelper } from "@tanstack/react-table"
import { IoInformationCircleOutline } from "react-icons/io5"
import { MdOutlineEdit, MdOutlineMoreVert } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"

const getColumnDefinitions = () => {
  const columnHelper = createColumnHelper()

  const options = [
    { label: "Delete", icon: <TiDeleteOutline size="1.35rem" color="red" /> },
    { label: "Edit", icon: <MdOutlineEdit size="1rem" /> },
    {
      label: "View Details",
      icon: <IoInformationCircleOutline size="1rem" />,
      link: "/dashboard/manager/clients/1",
    },
  ]

  const columns = [
    columnHelper.display({
      id: "select",
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    }),

    columnHelper.accessor("clientId", {
      header: () => <span className={` text-black font-bold`}>Client ID</span>,
      cell: (info) => (
        <span className="text-[#386A8B] ">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("name", {
      header: () => <span className=" text-black font-bold">Name</span>,
      cell: (info) => <span className=" ">{info.getValue()}</span>,
    }),

    columnHelper.accessor("occupiedProperty", {
      header: () => (
        <span className=" text-black font-bold px-2">Occupied Property</span>
      ),
      cell: (info) => <span className=" ">{info.getValue()}</span>,
    }),
    columnHelper.accessor("dueDate", {
      header: () => <span className=" text-black font-bold">Due Date</span>,
      cell: (info) => <span className=" ">{info.getValue()}</span>,
    }),
    columnHelper.accessor("amount", {
      header: () => <span className=" text-black font-bold">Amount</span>,
      cell: (info) => (
        <p>
          <span className={``}>₦ {info.getValue()}</span>
        </p>
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: (info) => (
        <DropdownButton
          label={<MdOutlineMoreVert size="1.5rem" />}
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
