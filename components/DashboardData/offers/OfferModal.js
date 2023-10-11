'use client'
import {useState, useEffect} from 'react';
import Image from 'next/image';
import realstar from '../../../public/assets/icons/realstar.png';
import email from '../../../public/assets/icons/email.png';
import whatsapp from '../../../public/assets/icons/whatsapp.png';
import alert from '../../../public/assets/icons/alert.png';
import copy from '../../../public/assets/icons/copy.png';

const OfferModal = ({setOpenModal}) => {
	const [platform, setPlatform] = useState("email");
	const [send, setSend] = useState(false);
	const [focusCopy, setFocusCopy] = useState(false);
	const [focusShare, setFocusShare] = useState(true);

	const handleCopy = () => {
		setFocusShare(false);
		setFocusCopy(true);
	}
	const handleShare = () => {
		setFocusShare(true);
		setFocusCopy(false);
	}

	useEffect(() => {
		setTimeout(() => {
			setSend(false);
		},4000)
	}, [send])


	return (
		<div className="flex justify-center items-center w-full absolute inset-0 bg-modal-background ">
			<div className="flex flex-col gap-3 bg-white p-8">
				<div className="flex justify-between items-center">
				    <div className="flex ">
						<p onClick={handleCopy} className={`font-[500] font-inter text-sm mr-6 cursor-pointer ${focusCopy ? "text-cog-color border-b-2 border-cog-color" : "text-grey-text"}`}>Copy offer link</p>
						<p onClick={handleShare} className={`font-[500] font-inter text-sm pb-1 cursor-pointer ${focusShare ? "text-cog-color border-b-2 border-cog-color" : "text-grey-text"}`}>Share offer notice</p>
					</div>
					<Image
					    onClick={() => setOpenModal(false)}
				        src={realstar}
						width={16}
						height={16}
						alt="back icon"
						className="mr-6 ml-6 cursor-pointer"
			        />
				</div>
				{focusShare && <div className="flex justify-start items-center mt-4 mb-4">
					<Image 
					    onClick={() => setPlatform("email")}
				        src={email}
						width={16}
						height={16}
						alt="back icon"
						className={`ml-6 cursor-pointer ${platform === "email" ? " bg-grey-text" : ""}`}
			        />
			        <Image
			            onClick={() => setPlatform("whatsapp")}
				        src={whatsapp}
						width={16}
						height={16}
						alt="back icon"
						className={`mr-6 ml-4 cursor-pointer ${platform === "whatsapp" ? "bg-cog-color" : ""}`}
			        />
				</div>}
				{ focusShare && <div className="flex justify-between gap-10 ml-5">
					<input className="text-grey-text border-2 placeholder:text-grey-text placeholder:text-xs font-semibold font-inter w-[324px] h-[36px] pl-2" placeholder={platform === "email" ? "Enter email address" : "Enter phone number"} type="text"/>
					<button onClick={() => setSend(true)} className="bg-grey-text text-white rounded-md text-base w-[116px] h-[36px]">Send link</button>
				</div>}
				{focusCopy && <div className="flex w-full mt-10">
				    <Image
				        src={copy}
						width={16}
						height={8}
						alt="back icon"
						className="mr-6 ml-6"
			        />
					<p className="bg-light-green p-1 pl-2 pr-12 w-[324px]">arc.payme/PamelaAlex</p>
					<button onClick={() => setSend(true)} className="bg-cog-color text-white rounded-md text-base w-[86px] h-[36px] self-end ml-12">Copy link</button>
				</div>}
				<div className="flex justify-center items-center bg-hi-color w-fit p-1 pl-2 pr-6 mt-16">
				    <Image
				        src={alert}
						width={16}
						height={16}
						alt="back icon"
						className="mr-6"
			        />
					<p className="font-[500] font-inter text-sm w-full">Viewers of this offer link would have access to limited information</p>
				</div>
				{ send && <div className="flex justify-center items-center">
					<p className="font-inter font-[500] text-sm bg-body-text text-white p-2 w-fit text-center">{focusCopy ? "Link copied" : "Link shared"}</p>
				</div>}
			</div>
		</div>
	)
}

export default OfferModal