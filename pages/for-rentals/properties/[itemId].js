import { data } from "@/data/data"
import { useRouter } from "next/router"
// import components
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TopNav from "@/components/TopNav"
// import styles
import PD from "@/styles/propertyDetails.module.css"

import Image from "next/image"

function PropertyDetails() {
  const router = useRouter()
  const { itemId } = router.query
  const item_Id = parseInt(itemId)
  const item = data.find((item) => item.id === item_Id)
  const city = item?.location[0]?.city
  const address = item?.location[0]?.address

  if (!item) return null
  return (
    <main>
      <Navbar />
      <TopNav />
      <div className={PD.main}>
        <p className={PD.properties_text}>Property Summary</p>
        <div className={PD.subContent}>
          {/* product info header */}
          <div className={PD.productIH}>
            <div>
              <p className={PD.city}> {city} </p>
              <p className={PD.address}> {address} </p>
            </div>

            <p className={PD.owner}>
              {" "}
              Listed by{" "}
              <a href="#" className={PD.owner_anchor}>
                {item.owner}
              </a>{" "}
            </p>

            <button className={PD.applybtn}>Apply now</button>
          </div>

          {/* listing details */}

          <div>
            <p className={PD.listingDetailsText}>Listing details</p>
            <div className={PD.topDetail}>
              <div className={PD.imageContMain}>
                <Image src={item.image} />
              </div>

              <div className={PD.topDetDIVTWO}>
                <p className={PD.topDetDIVTWO_rent}>Rent</p>
                <p className={PD.topDetDIVTWO_rent_detail}> {item.rent} </p>

                <p className={PD.topDetDIVTWO_AD}>Available date</p>
                <p className={PD.topDetDIVTWO_AD_detail}>
                  {" "}
                  {item.availableDate}{" "}
                </p>
              </div>

              <div className={PD.topDetDIVTHREE}>
                <p className={PD.topDetDIVTHREE_AF}>Application fee</p>
                <p className={PD.topDetDIVTHREE_AF_detail}>
                  {" "}
                  {item.applicationFee}{" "}
                </p>
              </div>
            </div>
          </div>
          {/* unit details */}

          <div className={PD.unitDetail}>
            <div className={PD.unitDetail_nav}>
              <p className={PD.unitHeaders}>Unit details</p>
              <p className={PD.unitHeaders}>Unit images</p>
            </div>

            <section className={PD.unitDetail_scnd}>
              <div className={PD.unitDetail_scnd_ONE}>
                <div className={PD.unitDetail_scndDIV}>
                  <p>BEDROOM</p>
                  <p> {item.bedroom} </p>
                </div>
                <div className={PD.unitDetail_scndDIV}>
                  <p>UNIT DESCRIPTION</p>
                  <p> {item.unitDescription} </p>
                </div>
                <div className={PD.unitDetail_scndDIV}>
                  <p>UNIT FEATURES</p>
                  <p> {item.unitFeatures} </p>
                </div>
              </div>

              <div className={PD.unitDetail_scnd_TWO}>
                <p>RESTROOM</p>
                <p>
                  {" "}
                  {item.restroom} {item.restroom > 1 ? "restrooms" : "restroom"}{" "}
                </p>
              </div>
              <div className={PD.unitDetail_scnd_THREE}>
                <p>SIZE</p>
                <p> {item.size} </p>
              </div>
            </section>
          </div>

          <div className={PD.propertyDetail}>
            <div className={PD.propertyDetail_nav}>
              <p className={PD.propertyDetailHeaders}>property details</p>
              <p className={PD.propertyDetailHeaders}>property images</p>
            </div>

            <section className={PD.propertyDetail_scnd}>
              <div className={PD.propertyDetail_scnd_MAIN}>
                <div>
                  <p>YEAR BUILT</p>
                  <p> {item.yearBuilt} </p>
                </div>
                <div>
                  <p>PROPERTY DESCRIPTION</p>
                  <p> {item.propertyDescription} </p>
                </div>
                <div>
                  <p>PROPERTY FEATURES</p>
                  <p> {item.propertyFeatures} </p>
                </div>
              </div>

              <div className={PD.propertyDetail_scnd_IMG}>
                <Image src={item.image} />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
export default PropertyDetails
