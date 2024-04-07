import { Button } from "@/components/Auth/Button"
import FormInput from "@/components/Auth/FormInput"
import { Layout } from "@/components/Auth/Layout"
import { Line } from "@/components/Auth/Line"
import arrowDown from "@/public/assets/images/arrow-down.png"
import bungalow from "@/public/assets/images/bungalow.png"
import facebook from "@/public/assets/images/Facebook.png"
import google from "@/public/assets/images/Google.png"
import Link from "next/link"
import { useState } from "react"

export default function Signup() {
  const [isClient, setIsClient] = useState(true)

  return (
    <Layout img={bungalow}>
      <div className="px-40 flex flex-col justify-center h-full ">
        <h1 className="text-2xl font-medium text-dark mb-3">Welcome to COG</h1>

        <div className="flex flex-col gap-10 mb-5">
          <div className="flex">
            <div onClick={() => setIsClient(true)}>
              <Button
                styles={" border-2 border-primary rounded-r-none"}
                variant={isClient ? "withBg" : "withoutBg"}
                text={"Sign up as a client"}
              />
            </div>
            <div onClick={() => setIsClient(!true)}>
              <Button
                styles={"border-2 border-primary rounded-l-none"}
                variant={!isClient ? "withBg" : "withoutBg"}
                text={"Sign up as a manager"}
              />
            </div>
          </div>

          <div className="flex gap-5 ">
            <FormInput type={"text"} placeholder={"First name"} />
            <FormInput type={"text"} placeholder={"Last name"} />
          </div>

          <FormInput type={"text"} placeholder={"Email address"} />
          <FormInput type={"password"} placeholder={"Password"} />
          <FormInput
            type={`dropdown ${isClient ? "client" : "manager"}`}
            placeholder={"Category"}
            svg={arrowDown}
          />
        </div>

        <div className="flex flex-col gap-10">
          <Button text={"Create an account"} />

          <Line />
          <div className="flex gap-5">
            <Button variant="withoutBg" text={"Google"} img={google} />
            <Button variant="withoutBg" text={"Facebook"} img={facebook} />
          </div>

          <Link href="/auth/login">
            <div className="flex w-full justify-center gap-2">
              <h1 className="text-primary font-medium">
                Already have an account?{" "}
              </h1>
              <p className="text-primaryGreen font-medium">Login</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
