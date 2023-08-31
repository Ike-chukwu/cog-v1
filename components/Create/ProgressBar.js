import Stage from "./Stage"

const ProgressBar = ({ stagesData, activeStage, activeSubStage }) => {
  return (
    <div>
      {stagesData.map((stage, i) => (
        <Stage
          key={i}
          stageNumber={i + 1}
          stage={stage.stage}
          subStages={stage.subStages}
          activeSubStage={activeSubStage}
          isActive={activeStage === i + 1}
          isCompleted={i + 1 < activeStage}
        />
      ))}
    </div>
  )
}

export default ProgressBar
