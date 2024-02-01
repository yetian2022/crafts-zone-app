import React from "react"
import { useTable, useSortBy } from "react-table"

const ProjectTable = ({ projects }) => {
  // Define the columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: "Location",
        accessor: "location", // Accessor is the "key" in the data
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Project",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      // Include other columns as necessary
    ],
    []
  )

  // Use the useTable Hook to send the columns and data to build the table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: projects }, useSortBy)

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ProjectTable
