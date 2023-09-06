import Image from 'next/image';

export const OfferButton = ({label, btnClass, onClick}) => {
	return (
		<button onClick={onClick} className={`w-[230px] h-[51px] rounded text-base md:text-[22px] font-semibold ${btnClass}`}>{label}</button>
		
	)
};

export const OfferButton1 = ({label, btnClass, onClick, src}) => {
	return (
		<button onClick={onClick} className={`w-[230px] h-[51px] rounded text-xs font-semibold flex justify-start items-center ${btnClass}`}>
		    <Image
		        src={src}
				width={16}
				height={16}
				alt="back icon"
				className="mr-6 ml-6"
	        />
		    {label}
		</button>
		
	)
};