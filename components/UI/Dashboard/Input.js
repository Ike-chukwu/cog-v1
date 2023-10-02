const Input = ({ className, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        className={`border border-primary bg-[#F5F7F9] outline-none py-1 px-2 mt-4 ${className}`}
      />
    </>
  )
}

export default Input
