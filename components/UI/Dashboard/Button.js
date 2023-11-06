export const Button = ({ disabled, onClick, className, children, ...rest }) => {
  return (
    <>
      <button
        {...rest}
        onClick={onClick}
        disabled={disabled}
        className={`bg-primary text-white border border-primary w-40 p-2 rounded-md hover:bg-white hover:text-primary disabled:pointer-events-none disabled:opacity-70 ${className}`}
      >
        {children}
      </button>
    </>
  )
}

export const ButtonOutline = ({
  disabled,
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <>
      <button
        {...rest}
        onClick={onClick}
        disabled={disabled}
        className={`text-primary border border-primary w-40 p-2 rounded-md hover:text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-70 ${className}`}
      >
        {children}
      </button>
    </>
  )
}
