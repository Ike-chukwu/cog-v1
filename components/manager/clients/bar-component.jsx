const BarComponent = ({
  label,
  value,
  total,
  recurring,
  recurringColor,
  oneTimeColor,
  currency,
}) => {
  const width = `${(value / total) * 100}%`
  const recurringWidth = `${(recurring / value) * 100}%`

  return (
    <div className="mb-4 mt-2">
      <div className="grid ">
        <div className="w-full flex items-center justify-between">
          <p style={{ color: recurringColor }} className="text-[8px]">
            {currency}
            {recurring}
          </p>
          <p style={{ color: oneTimeColor }} className="text-[8px]">
            {currency}
            {value - recurring}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-[8px] text-[#B1B1B4]">Recurring</p>
          <p className="text-[8px] text-[#B1B1B4]">One Time</p>
        </div>

        <div className="w-full   h-[21px] flex items-center">
          <div
            className={`h-[21px] `}
            style={{ width: recurringWidth, backgroundColor: recurringColor }}
          ></div>
          <div
            className={` h-[21px] `}
            style={{
              width: `calc(100% - ${recurringWidth})`,
              backgroundColor: oneTimeColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default BarComponent
