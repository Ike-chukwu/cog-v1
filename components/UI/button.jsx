import { cn } from "@/utils"
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "px-6 py-2 rounded  text-center  transform active:scale-95 transition-transform",
  {
    variants: {
      variant: {
        default: "bg-[#386A8B] text-white ",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-[#386A8B] bg-white text-[#386A8B]",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Button = ({
  type,
  onClick,
  className,
  disabled = false,
  children,
  variant = "default",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(buttonVariants({ variant, className }))}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
