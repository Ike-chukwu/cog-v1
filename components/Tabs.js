const Tabs = ({ tabs, click, active, className }) => {
  return (
    <div
      className={`bg-[#62909F] bg-opacity-20 flex justify-between gap-4 p-2 rounded-full ${className}`}
    >
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => click(i)}
          className={`grow py-4 px-5 w-max text-white rounded-full outline-none ${
            i === active ? "bg-primary" : "bg-none"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
