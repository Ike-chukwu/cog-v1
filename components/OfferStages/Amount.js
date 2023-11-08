import { Fragment } from "react"

const AmountDetails = ({ subStage, amount, setAmount }) => {
  const getStage = () => {
    switch (subStage) {
      case 1:
        return <Amount amount={amount} setAmount={setAmount} />
    }
  }
  return getStage()
}

export default AmountDetails

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

const Amount = ({ amount, setAmount }) => {
  return (
    <Wrapper
      header="Amount"
      subHead="Kindly enter the property purchase/rental amount that you want to send an offer for."
    >
      <div>
        <div>
          <ul className="list-disc ml-6">
            <li>
              <span>Enter amount</span>
              <br />
              <input
                type="text"
                name="amount"
                value={amount}
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
                className="border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4"
              />    
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
