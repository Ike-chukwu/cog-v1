import topNav_Styles from "../styles/topNav.module.css"

function TopNav() {
  return (
    <div className={topNav_Styles.topBTN}>
      <button className={topNav_Styles.topBTNone}> Home</button>
      <button className={topNav_Styles.topBTNone}> Applications</button>
      <button className={topNav_Styles.topBTNone}> Payments</button>
      <button className={topNav_Styles.topBTNone}> Documents</button>
    </div>
  )
}
export default TopNav
