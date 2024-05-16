import Stage from "./Stage";

const ProgressBar = ({ stagesData, activeStage, activeSubStage }) => {
  return (
    <div className="max-w-fit">
      {stagesData.map((stage, i) => (
        <Stage
          key={i}
          stageNumber={i + 1}
          stage={stage.stage}
          // Pass the subStages prop only if it exists
          {...(stage.subStages && { subStages: stage.subStages })}
          activeSubStage={activeSubStage}
          isActive={activeStage === i + 1}
          activeStage={activeStage}
          isCompleted={i + 1 < activeStage}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
