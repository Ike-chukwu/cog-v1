import { Button } from "@/components/Auth/Button"
import FormInput from "@/components/Auth/FormInput"
import { Layout } from "@/components/Auth/Layout"
import tall from "@/public/assets/images/tall-building.png"
import Link from "next/link"
import { useState } from "react"

export default function ForgotPassword() {
  const [page, setPage] = useState("page1")

  return (
    <Layout img={tall} styles={"h-screen"}>
      {page === "page1" && (
        <div className="px-40 flex flex-col  justify-center h-full ">
          <h1 className="text-2xl font-medium text-dark mb-9">
            Recover password
          </h1>

          <p className="font-medium text-darkGreyText mb-16">
            Check your email for a password reset link. If it doesn’t appear
            within a few minutes, check your spam folder.
          </p>

          <FormInput
            type={"text"}
            styles={"mb-5"}
            placeholder={"Send password recovery mail"}
          />
          <Button text={"Login"} onclick={() => setPage("page2")} />

          <Link href="/auth/signup">
            <div className="flex w-full justify-center gap-2 mt-60">
              <h1 className="text-primary font-medium">
                Don&apos;t have an account?{" "}
              </h1>
              <p className="text-primaryGreen font-medium">Create an account</p>
            </div>
          </Link>
        </div>
      )}

      {page === "page2" && (
        <div className="px-40 flex flex-col  justify-center h-full ">
          <h1 className="text-2xl font-medium text-dark mb-9">
            Recover password
          </h1>

          <p className="font-medium text-darkGreyText mb-32">
            Kindy enter email address to get a password reset link sent to you.
          </p>

          <Button text={"Return to Login"} onclick={() => setPage("page3")} />

          <Link href="/auth/signup">
            <div className="flex w-full justify-center gap-2 mt-60">
              <h1 className="text-primary font-medium">
                Don&apos;t have an account?{" "}
              </h1>
              <p className="text-primaryGreen font-medium">Create an account</p>
            </div>
          </Link>
        </div>
      )}

      {page === "page3" && (
        <div className="px-40 flex flex-col  justify-center h-full ">
          <h1 className="text-2xl font-medium text-dark mb-9">
            Create New Password
          </h1>

          <p className="font-medium text-darkGreyText mb-16 ">
            Kindy enter new password to reset your password.
          </p>

          <FormInput type={"password"} placeholder={"Enter new password"} />
          <Link href={"/"} className="mt-5">
            <Button text={"Confirm password reset"} />
          </Link>
          <Link href="signup">
            <div className="flex w-full justify-center gap-2 mt-60">
              <h1 className="text-primary font-medium">
                Don&apos;t have an account?{" "}
              </h1>
              <p className="text-primaryGreen font-medium">Create an account</p>
            </div>
          </Link>
        </div>
      )}
    </Layout>
  )
}
