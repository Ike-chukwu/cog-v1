'use client'
import {useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import OfferHeading from "../../../../components/DashboardData/offers/OfferHeading";
import OfferBox from "../../../../components/DashboardData/offers/OfferBox";
import check from '../../../../public/assets/icons/check.png';
import {OfferButton} from "../../../../components/DashboardData/offers/OfferButton";
import {OfferData} from "../../../../data/OfferData";
import OfferSummary from "../../../../components/DashboardData/offers/OfferSummary";

const Index = () => {
	const router = useRouter()
	const [currentStage, setCurrentStage] = useState(1); 

	const handleContinue = () => {
	    if(currentStage < 5){
	    	setCurrentStage(prev => prev + 1)
	    }
	}

	const handleBack = () => {
		if(currentStage >1){
			setCurrentStage(prev => prev - 1)
		}
	}


	return (
		<div>
			<div className="p-8"
			>
				<OfferHeading/>
				<p className="font-inter font-bold text-[22px] text-grey-text">Set terms</p>
				<div className="lg:border-2 p-6 pt-16 pb-32 flex flex-col lg:flex-row justify-center lg:justify-between lg:items-start">
					<ul className="font-inter font-bold text-xl text-minor-text mr-6">
						<li className=" flex">
						    {currentStage === 1 ? 
						        <span className="mr-4 w-[30px] h-[29px] border-2 border-main-green rounded-[50%] py-px px-2">1</span> :
					    	    <Image
							        src={check}
									width={30}
									height={29}
									alt="check icon"
									className="border-2 p-2 rounded-[50%] bg-main-green mr-4"
						        />}
						    <span>Property details</span>
						</li>
						<li className={`w-[2px] h-6 self-start text-center ml-3 ${currentStage > 0 ? "bg-main-green" : ""}`}></li>
						<li className=" flex">
						    {currentStage > 2 ? 
							    <Image
							        src={check}
									width={30}
									height={29}
									alt="check icon"
									className="border-2 p-2 rounded-[50%] bg-main-green mr-4"
							    /> :
							    <span className={`mr-4 w-[30px] h-[29px] border-2 rounded-[50%] py-px px-2 ${currentStage === 2 ? "border-main-green" : ""}`}>2</span> } 
						    <span>Client details</span> 
						</li>
						<li className={`w-[2px] h-6 self-start text-center ml-3 ${currentStage > 1 ? "bg-main-green" : "h-6 bg-grey-text"}`}></li>
						<li className=" flex">
						    {currentStage > 3 ? 
							    <Image
							        src={check}
									width={30}
									height={29}
									alt="check icon"
									className="border-2 p-2 rounded-[50%] bg-main-green mr-4"
							    /> :
							    <span className={`mr-4 w-[30px] h-[29px] border-2 rounded-[50%] py-px px-2 ${currentStage === 3 ? "border-main-green" : ""}`}>3</span>}
						    <span>Amount</span>
						</li>
						<li className={`w-[2px] h-6 self-start text-center ml-3 ${currentStage > 2 ? "bg-main-green" : "h-6 bg-grey-text"}`}></li>
						<li className=" flex">
						    {currentStage > 4 ?
							    <Image
							        src={check}
									width={30}
									height={29}
									alt="check icon"
									className="border-2 p-2 rounded-[50%] bg-main-green mr-4"
							    /> :
							    <span className={`mr-4 w-[30px] h-[29px] border-2 rounded-[50%] py-px px-2 ${currentStage === 4 ? "border-main-green" : ""}`}>4</span> }
						    <span>Due date</span>
						</li>
						<li className={`w-[2px] h-6 self-start text-center ml-3 ${currentStage > 3 ? "bg-main-green" : "h-6 bg-grey-text"}`}></li>
						<li className=" flex">
						    {currentStage > 5 ?
							    <Image
							        src={check}
									width={30}
									height={29}
									alt="check icon"
									className="border-2 p-2 rounded-[50%] bg-main-green mr-4"
							    /> :
							    <span className={`mr-4 border-2 rounded-[50%] py-px px-2 ${currentStage === 5 ? "border-main-green" : ""}`}>5</span> }
						    <span>Summary</span>
						</li>
					</ul>
					{currentStage === 5 ? <OfferSummary/> :
						<div className="flex flex-col border-2 mt-8 lg:mt-0 gap-24 p-2 lg:w-1/2">				
							<OfferBox name={OfferData[currentStage-1].name} title={OfferData[currentStage-1].title} description={OfferData[currentStage-1].description} id={OfferData[currentStage-1].id}/>
							<div className="flex justify-center items-center p-4 lg:self-end lg:w-1/2">
								<OfferButton onClick={handleBack} label="Back" btnClass="bg-white text-primary border-2 border-primary w-[116px] md:w-[136px] h-[36px] mr-4"/>
								<OfferButton onClick={handleContinue} label="Continue" btnClass="bg-primary text-white w-[116px] md:w-[136px] h-[36px]"/> 
							</div>
						</div>}
				</div>
			</div>

		</div>
	)
}

export default Index