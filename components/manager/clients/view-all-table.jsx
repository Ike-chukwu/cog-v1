import { useState } from "react"

import { inter } from "@/styles/font"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import getColumnDefinitions from "./view-all-table-column"
import { ViewAllTablePlaceholder } from "./view-all-table-placeholder"

const columns = getColumnDefinitions()
const ViewAllTable = () => {
  const [data, _setData] = useState(() => [...ViewAllTablePlaceholder])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className=" w-full">
      <thead className="mb-12 py-12">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="text-left">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={`pb-6 ${inter.className}`}>
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
      <tbody className={`pt-12`}>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b border-[#C4C4C4]">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={`py-4 ${inter.className}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ViewAllTable
