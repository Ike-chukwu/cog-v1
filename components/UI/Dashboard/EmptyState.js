import Image from "next/image"

const EmptyState = ({ type = "..." }) => {
  return (
    <div className="flex items-center justify-evenly p-4 h-72">
      <div className="text-zinc-600 text-center">
        <p className="mb-6">You have no previous listing notifications</p>
        <p>Create a new listing through the {type} manager dropdown</p>
        <small>Go to {type} manager - View/edit listings.</small>
      </div>

      <Image
        src="/assets/images/empty-state.png"
        alt="No recent activities"
        priority={true}
        width={200}
        height={200}
      />
    </div>
  )
}

export default EmptyState
