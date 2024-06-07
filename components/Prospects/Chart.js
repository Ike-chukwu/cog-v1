import { data02 } from "@/data/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

export const Chart = (props) => {
  const colors = ["#9FF1CA", "#938AF5"]
  return (
    <div className={"border border-[#62909F] px-2 py-10 rounded-[10px]  " + `${props.className}`}>
      <h1 className="text-benefitColor text-center">
        Property prospect distribution
      </h1>
      <ResponsiveContainer
        style={{ position: "relative" }}
        width={"100%"}
        height={200}
      >
        <label className="absolute text-sm font-medium text-benefitColor top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          Total number
        </label>
        <label className="absolute mt-4 top-1/2 left-1/2 text-benefitColor -translate-x-1/2 -translate-y-1/2">
          12
        </label>
        <PieChart width={730} height={250}>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-col gap-10 mt-4">
        <div className="flex items-center gap-5 px-9">
          <div className="h-4 w-4 rounded-full bg-[#9FF1CA]" />
          <h1>Ikorodu property</h1>
        </div>
        <div className="flex items-center gap-5 px-9">
          <div className="h-4 w-4 rounded-full bg-[#938AF5]" />
          <h1>Avila Homes</h1>
        </div>
      </div>
    </div>
  )
}
