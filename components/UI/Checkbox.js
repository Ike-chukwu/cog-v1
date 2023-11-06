const Checkbox = ({ isChecked = false, onChange, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primary h-5 w-5 border border-primary rounded-sm mr-2"
      />
    </>
  )
}

export default Checkbox
