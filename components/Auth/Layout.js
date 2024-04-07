import Image from "next/image"
import { useRouter } from "next/router"

export const Layout = ({ children, styles, img }) => {
  const router = useRouter()
  const path = router.pathname

  return (
    <div className="flex">
      <div className="w-1/2 ">
        <Image
          src={img}
          alt="img"
          className={`w-full ${
            path.includes("login") ? "h-screen" : "h-max"
          } object-cover`}
        />
      </div>

      <div className="w-1/2">{children}</div>
    </div>
  )
}
