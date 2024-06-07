import Input from "@/components/UI/input"
import Wrapper from "@/components/manager/wrapper"

const JobInfoDetails = ({ register }) => {
  return (
    <Wrapper
      header="Job information"
      subHead="This is where you enter the job information of the employee."
    >
      <ul className="list-disc ml-6 space-y-10">
        <li className="space-y-4">
          <p className="font-semibold opacity-70">Availability type</p>

          <Input
            name="availabilityType"
            className="bg-[#F5F7F9] py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="select"
            options={[
              { label: "Select job availability type", value: "" },
              { label: "Full-time", value: "Full-time" },
              { label: "Part-time", value: "Part-time" },
            ]}
          />
        </li>
        <li className="space-y-4">
          <p className="font-semibold opacity-70">Attach to property</p>

          <Input
            name="attachToProperty"
            className="bg-[#F5F7F9] py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="select"
            options={[
              { label: "Attach to property", value: "" },
              { label: "Full attachemnt", value: "Full attachemnt" },
              { label: "Half attachment", value: "Half attachment" },
            ]}
          />
        </li>
        <li className="space-y-4">
          <p className="font-semibold opacity-70">Department</p>

          <Input
            name="department"
            className="bg-[#F5F7F9] py-1 px-2  placeholder:text-[#B1B1B4] border border-primary rounded-none"
            register={register}
            type="select"
            options={[
              { label: "Sales and Marketing", value: "Sales and Marketing" },
              { label: "Facility Management", value: "Facility Management" },
              { label: "Procurement", value: "Procurement" },
              { label: "Finance", value: "Finance" },
              { label: "Legal", value: "Legal" },
              { label: "Client Management", value: "Client Management" },
              { label: "IT", value: "IT" },
              { label: "Others", value: "Others" },
            ]}
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default JobInfoDetails
