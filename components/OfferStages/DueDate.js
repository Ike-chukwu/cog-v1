import { Fragment } from "react"

const DueDateDetails = ({ subStage, dueDate, setDueDate }) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <DueDate dueDate={dueDate} setDueDate={setDueDate} />
    }
  }
  return getStage()
}

export default DueDateDetails

const Wrapper = ({ children, header, subHead }) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-xl font-semibold opacity-70">{header}</h3>
        <p className="opacity-60 mt-4">{subHead}</p>
      </div>

      <Fragment>{children}</Fragment>
    </div>
  )
}

const DueDate = ({ dueDate, setDueDate }) => {
  return (
    <Wrapper
      header="Due date"
      subHead="Kindly enter the payment date for your offer."
    >
      <div>
        <div>
          <ul className="list-disc ml-6">
            <li>
                          <span>Enter due date</span>
                          <br/>
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                placeholder="Enter due date"
                onChange={(e) => setDueDate(e.target.value)}
                className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
