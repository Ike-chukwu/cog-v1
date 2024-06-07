import { useState } from "react"

import { inter } from "@/styles/font"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import getColumnDefinitions from "./client-table-column"
import { ManagerClientPlaceholder } from "./client-table-placeholder"

const columns = getColumnDefinitions()
const ClientTable = () => {
  const [data, _setData] = useState(() => [...ManagerClientPlaceholder])

  //   const tableData = data

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="w-full">
      <thead className="mb-5">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="text-left">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={`${inter.className}`}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className="pt-6">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b border-[#C4C4C4]">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="py-4">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ClientTable
