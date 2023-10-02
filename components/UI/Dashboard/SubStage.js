const SubStage = ({ subStage, isActive, stageNumber, subStageNumber }) => {
  return (
    <div className="mt-1 ml-2">
      <div
        className={`relative stage flex items-center gap-3 ${
          isActive && "text-green-700"
        }`}
      >
        <div
          className={`bg-white w-3 h-3 border-2  ${
            isActive ? "border-green-700" : "border-zinc-300"
          }`}
        />
        <small>{subStage}</small>
      </div>
    </div>
  )
}

export default SubStage
