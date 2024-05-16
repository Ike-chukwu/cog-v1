import { cn } from "@/utils"
import { useFormContext } from "react-hook-form"

const Input = ({ label, name, className, options, type, ...inputProps }) => {
  const { register } = useFormContext()

  return (
    <div className="grid">
      {label && (
        <label className="font-semibold text-[#4B4B4B] text-[14px] py-1">
          {label}
        </label>
      )}
      {type === "select" ? (
        <select
          {...register(name)}
          {...inputProps}
          className={cn(
            "mb-4 w-72 text-black border border-gray-200 p-2",
            className
          )}
        >
          {options &&
            options.map((option) => (
              <>
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.label}
                </option>
              </>
            ))}
        </select>
      ) : type === "radio" ? (
        <div className="flex items-center">
          {options &&
            options.map((option) => (
              <div key={option.value} className="mb-4 flex items-center mr-4">
                <input
                  {...register(name)}
                  {...inputProps}
                  type={type}
                  value={option.value}
                  className={cn("mr-2", className)}
                />
                <label>{option.label}</label>
              </div>
            ))}
        </div>
      ) : type === "checkbox" ? (
        <div>
          <input
            {...register(name)}
            {...inputProps}
            type={type}
            className={cn("mr-2", className)}
          />
          <label>{label}</label>
        </div>
      ) : (
        <div className="relative mb-4">
          <div className="flex items-center">
            {inputProps.placeholder === "₦" && (
              <span className="absolute bottom-2 left-0 flex items-center pl-3 pointer-events-none">
                ₦
              </span>
            )}
            <input
              {...register(name)}
              {...inputProps}
              placeholder={`${
                inputProps.placeholder === "₦" ? "" : inputProps.placeholder
              }`}
              type={type}
              className={cn(
                `w-72 text-black border border-gray-200 p-2 ${
                  inputProps.placeholder === "₦" && "pl-8"
                } placeholder:text-[#4F4F4F] font-medium rounded-lg`,
                className
              )}
            />
          </div>
        </div>
      )}
      {/* {error && <span className="text-red-600 text-sm">{error.message}</span>} */}
    </div>
  )
}

export default Input
