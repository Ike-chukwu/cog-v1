import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Head from "next/head"

const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Classname here will serve as props, so we can style the header from it's own comp, we should do the same for footer when it's ready
       */}
      <Head>{title} | COG</Head>
      <Navbar />
      <main className="  ">{children} </main>
      <Footer />
    </div>
  )
}

export default Layout
