import Image from "next/image"
import juli from "/public/assets/images/image 11.png"

const PaymentNotification = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="p-4 font-bold text-{100}">Payment notice</h1>
        <h3 className="p-4">Property information</h3>
        <div className="flex ml-9 justify-between _property_information mt-4">
          <div className="flex">
            <div className="p-3">
              <Image src={juli} />
            </div>
            <div className="pt-3 tex">
              <h1>okojfijeid</h1>
              <h1>okojfijeid</h1>
              <h1>okojfijeid</h1>
              <br></br>
              <h1 className="mt-4">okojfijeid</h1>
            </div>
          </div>
          <div className="self-end p-3">
            <div>20000/month</div>
            <div>Available Dec1</div>
          </div>
        </div>

        <div className="flex flex-col mt-16 _property_information2 ml-9">
          <div className="h-16 bg-[#F5F5F5] p-4">Payment notice</div>
          <div className=" h-32">
            <div className="flex flex-col bg-white h-24">
              <div className="pl-4 pt-2">Due today</div>
              <div className="flex pl-4">
                <div>200000</div>
                <div className="_btnpro1">
                  <button className="_btnpro">Proceed to payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentNotification
