import Image from "next/image"

const FileInput = ({ setFile }) => {
  const handleFile = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    setFile(url)
  }
  return (
    <div className="mb-20">
      <input
        id="file"
        type="file"
        className="hidden"
        accept=".jpg, .png, .pdf"
        onChange={handleFile}
      />
      <label
        htmlFor="file"
        className="border border-dashed border-primary p-4 flex items-center gap-12 cursor-pointer"
      >
        <Image
          src="/assets/icons/download-icon.png"
          alt="Download"
          width={60}
          height={60}
          priority
        />

        <div>
          <h4 className="uppercase text-lg">
            Drag file here or <span className="text-primary">browse</span>
          </h4>
          <p className="my-1 opacity-70">Supported file types: JPG, PNG, PDF</p>
          <p className="opacity-70">The file size can be up to 20MB</p>
        </div>
      </label>
    </div>
  )
}
export default FileInput
