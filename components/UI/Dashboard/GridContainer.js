import { info } from "@/data/applicantInfo"
import { Grid } from "./Grid"

export const GridContainer = () => {
  console.log(info)
  return (
    <div>
      <header className="mb-10">Applicant Information</header>
      <div className="grid grid-cols-3">
        {info.map((data, index) => (
          <Grid key={index} columnData={data} />
        ))}
      </div>
    </div>
  )
}
