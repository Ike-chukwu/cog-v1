

const OfferBox = ({name, title, description, id}) => {
	return (
		<div className="flex flex-col justify-center items-start gap-24 p-6">
			<div className="font-inter font-bold"
			>
				<p className="text-minor-text text-xl">{title}</p>
				<p className="text-grey-text text-xs">{description}</p>
			</div>
			{ id < 3 ?
				<div>		
					<p className="text-minor-text font-bold font-inter text-base md:text-lg mb-4"><span className="scale-[0.4] text-xs w-[2px] max-h-[0.4px] p-1 py-0 bg-black mr-8"></span>Choose from existing {name} data</p>
					<select className="border-2 border-text-green p-2 pl-4 pr-4 text-grey-text font-bold font-inter text-sm " name="property" id="property" placeholder="Select property name ">
	                    <option value="">Select {name} name</option>
	                    <option value=""></option>
	                    <option value=""></option>
	                    <option value=""></option>
	                </select>
				</div> 
				:
				<div>
					<p className="text-minor-text font-bold font-inter text-base md:text-lg mb-4"><span className="scale-[0.4] text-xs w-[2px] max-h-[0.4px] p-1 py-0 bg-black mr-8"></span>Enter {title}</p>
					<input className="border-2 border-text-green p-2 pl-4 pr-4 text-grey-text font-bold font-inter text-sm" placeholder={`Enter ${name}`} type="text"/>
				</div>
			}
		</div>
	)
}

export default OfferBox;