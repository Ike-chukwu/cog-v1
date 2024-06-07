import DeleteIcon from "@/public/assets/icons/DeleteIcon"
import React from "react"

const VendorInput = ({
  // register,
  inputId,
  vendorList,
  setVendorList,
  deleteIcon,
  value,
}) => {
  const deleteVendorName = () => {
    const filteredVendorList = vendorList.filter(
      (vendor) => vendor.id !== inputId
    )
    setVendorList(filteredVendorList)
    // localStorage.setItem("vendor-list", JSON.stringify(filteredVendorList))
    // delete formData[`Vendor(${inputId})`]
    // console.log(formData);
  }

  const onChangeHandler = (e, id) => {
    const vendorListCopy = vendorList.map((vendor) => {
      if (vendor.id == id) {
        return {
          ...vendor,
          value: e.target.value,
        }
      }
      return vendor
    })
    setVendorList(vendorListCopy)
  }

  return (
    <div className="flex items-center gap-2">
      <input
        value={value}
        onChange={(e) => onChangeHandler(e, inputId)}
        type="text"
        placeholder="Enter vendor name"
        className="p-2   border border-[#62909F] w-full bg-[#f5f7f9]"
      />
      {deleteIcon && (
        <svg
          onClick={deleteVendorName}
          width="16"
          height="16"
          className="cursor-pointer"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
            stroke="#E00525"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 5L5 11"
            stroke="#E00525"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 5L11 11"
            stroke="#E00525"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  )
}

export default VendorInput
