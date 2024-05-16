export const Grid = ({ columnData }) => {
  return (
    <div className="grid grid-rows-5 gap-10">
      {columnData.map((col, i) => (
        <div key={i}>
          <h1>{col.title}</h1>
          <p>{col.value}</p>
        </div>
      ))}
    </div>
  )
}
