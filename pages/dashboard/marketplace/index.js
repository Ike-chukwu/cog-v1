import Dashboard from "@/components/Layout/Dashboard"
import Card from "@/components/UI/Dashboard/Card"
import EmptyState from "@/components/UI/Dashboard/EmptyState"
import Header from "@/components/UI/Dashboard/Header"
import ManagerOptions from "@/components/UI/Dashboard/ManagerOptions"

export default function Marketplace() {
  const cardContent = [
    {
      invert: true,
      topic: "Listed properties",
      value: "10",
      percent: "+ Increased by 30% since July 2022",
      color: "",
    },
    {
      invert: false,
      topic: "Applications",
      value: "25",
      percent: "+ Increased by 30% since July 2022",
      color: "green",
    },
    {
      invert: false,
      topic: "Inspections",
      value: "20",
      percent: "- Decreased by 30% since July 2022",
      color: "red",
    },
  ]

  const data = [] // Placeholder

  return (
    <Dashboard className="p-8">
      <Header header="Marketplace" subHeader="" name="Opeyemi Cheesecake" />

      <div className="grid gap-6 my-10">
        <ManagerOptions />

        <div className="flex justify-evenly">
          {cardContent.map((content, i) => (
            <Card key={i} content={content} />
          ))}
        </div>

        <button className="border border-primary text-primary p-2 rounded-md hover:text-white hover:bg-primary ml-auto">
          View custom report
        </button>
      </div>

      <div className="border border-primary">
        <div className="flex justify-between p-4 border-b border-zinc-300">
          <h4 className="text-xl font-medium opacity-50">Recent Activities</h4>

          <button className="text-primary font-medium underline underline-offset-4">
            View All
          </button>
        </div>

        <div className="p-4">
          {data.length > 0 ? (
            <p>Mapped data here...</p>
          ) : (
            <EmptyState type="Marketplace" />
          )}
        </div>
      </div>
    </Dashboard>
  )
}
