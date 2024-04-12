const SubStage = ({ subStage, subStageNumber, activeSubStage }) => {
  return (
    <div className="ml-2">
      <div
        className={`border-l w-max ml-05 h-5  ${
          activeSubStage >= subStageNumber && "border-progressGreen"
        }`}
      />
      <div
        className={`relative stage flex items-start  gap-3 ${
          activeSubStage >= subStageNumber && "text-progressGreen"
        }`}
      >
        <div
          className={`bg-white w-3 h-3 border-2 rounded-sm ${
            activeSubStage >= subStageNumber
              ? "border-progressGreen"
              : "border-zinc-300"
          }`}
        />
        <small className="h-max leading-[11px]">{subStage}</small>
      </div>
    </div>
  )
}

export default SubStage
