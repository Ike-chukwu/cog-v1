import Image from "next/image"
import Link from "next/link"
import logo1 from "/public/assets/icons/COG Logo.png"
const Navbar = () => {
  return (
    <header className="border-b border-b-borderGrey cursor-pointer">
      <nav className="border-hr flex justify-between px-24 items-center">
        <Link href="/">
          <Image src={logo1} alt="Cog Logo" />
        </Link>
        <div className="w-3/6">
          <ul className="flex justify-between items-center">
            <Link href="/" className="px-4 cursor-pointer">
              Home
            </Link>
            <Link href="/for-rentals">For buyers/renters</Link>
            {/* EDITED THIS TO SHIFT THE 'FOR RENTALS PAGE TO THE SRC DIRECTORY */}
            <Link href="/managers">For property managers/owners</Link>
          </ul>
        </div>
        <div className="w-max">
          <ul className="flex justify-between gap-5 items-center">
            <Link
              href="/auth/login"
              className="border rounded-r-md border-borderGrey px-10 py-4 my-6"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-primary text-white px-10 py-4 my-6 rounded-r-md  cursor-pointer"
            >
              Sign up
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
