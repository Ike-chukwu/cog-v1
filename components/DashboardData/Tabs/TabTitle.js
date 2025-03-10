import React from "react"

function TabTitle({
  id,
  title,
  activeTab,
  setActiveTab,
  styles,
  icon,
  options,
}) {
  const handTabSwitch = () => {
    setActiveTab(id)
  }

  return (
    <div
      onClick={handTabSwitch}
      className={`${activeTab === id ? styles.active : styles.notActive} `}
    >
      <div className="d-flex flex-row">
        {" "}
        <h4 className="d-flex flex-row me-3">{icon}</h4>
        <h4>{title}</h4>
        <select>
          <option>{options}</option>
        </select>
      </div>
    </div>
  )
}

export default TabTitle
