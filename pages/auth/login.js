import { Button } from "@/components/Auth/Button"
import FormInput from "@/components/Auth/FormInput"
import { Layout } from "@/components/Auth/Layout"
import { Line } from "@/components/Auth/Line"
import facebook from "@/public/assets/images/Facebook.png"
import google from "@/public/assets/images/Google.png"
import tall from "@/public/assets/images/tall-building.png"
import Link from "next/link"

export default function Login() {
  return (
    <Layout img={tall}>
      <div className="px-40 flex flex-col gap-10 justify-center h-full ">
        <h1 className="text-2xl font-medium text-dark mb-3">
          Welcome back to COG
        </h1>
        <FormInput
          type={"text"}
          placeholder={"Email address/Unique Identificaiton Number"}
          styles={""}
        />
        <FormInput type={"password"} placeholder={"Password"} styles={""} />

        <div className="flex justify-between">
          <div>
            <input
              type="checkbox"
              id="checkbox"
              className="mr-2 cursor-pointer"
            />
            <label
              htmlFor="checkbox"
              className="text-primaryGreen font-medium cursor-pointer"
            >
              Remember me
            </label>
          </div>

          <Link href="/auth/forgot-password">
            <h1 className="text-primaryGreen font-medium">Forgot Password?</h1>
          </Link>
        </div>

        <Button text={"Login"} />
        <Line />
        <div className="flex gap-5">
          <Button variant="withoutBg" text={"Google"} img={google} />
          <Button variant="withoutBg" text={"Facebook"} img={facebook} />
        </div>

        <Link href="/auth/signup">
          <div className="flex w-full justify-center gap-2">
            <h1 className="text-primary font-medium">Don&apos;t have an account? </h1>
            <p className="text-primaryGreen font-medium">Create an account</p>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
