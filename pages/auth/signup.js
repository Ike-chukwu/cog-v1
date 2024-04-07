import { Button } from "@/components/Auth/Button"
import FormInput from "@/components/Auth/FormInput"
import { Layout } from "@/components/Auth/Layout"
import { Line } from "@/components/Auth/Line"
import bungalow from "@/public/assets/images/bungalow.png"
import Link from "next/link"
import { useState } from "react"

export default function Signup() {
  const [isClient, setIsClient] = useState(true)

  return (
    <Layout img={bungalow}>
      <div className="px-40 flex flex-col justify-center h-full ">
        <h1 className="text-2xl font-medium text-dark mb-3">Welcome to COG</h1>

        <div className="flex flex-col gap-10">
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
          <FormInput type={`dropdown ${isClient ? 'client' : 'manager'}`} placeholder={"Category"}  />
        </div>

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
