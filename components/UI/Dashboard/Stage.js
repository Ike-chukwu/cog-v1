import { FiCheck } from "react-icons/fi"
import SubStage from "./SubStage"

const Stage = ({
  stage,
  isActive,
  subStages,
  stageNumber,
  activeSubStage,
  isCompleted,
}) => {
  return (
    <div className="mt-3">
      <div className="relative bg-white">
        <div
          className={`inline-grid place-items-center border h-7 w-7 rounded-full mr-2 ${
            isActive ? "border-green-600 text-green-700" : "border-zinc-400"
          } ${
            isCompleted ? "border-green-600 bg-green-700" : "border-zinc-400"
          }`}
        >
          <span>
            {isCompleted ? (
              <FiCheck className="inline-block text-white mb-1" />
            ) : (
              stageNumber
            )}
          </span>
        </div>

        <span className="font-[550] opacity-70">{stage}</span>
      </div>

      {isActive && (
        <div>
          {subStages.map((sub, i) => (
            <SubStage
              key={i}
              subStage={sub}
              subStageNumber={i + 1}
              stageNumber={stageNumber}
              isActive={activeSubStage === i + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Stage
