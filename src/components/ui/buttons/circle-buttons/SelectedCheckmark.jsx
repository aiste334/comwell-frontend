const SelectedCheckmark = ({ isSelected }) => {
	const checkmark = (
		<div class="pointer-events-none h-[24px] w-[24px] rounded-full border-gray-200 p-1 bg-black text-white">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="w-[16px]">
				<rect></rect>
				<path fill="currentColor" fill-rule="evenodd" d="M6.668 10.6 3.134 7.067l-.733.666 3.533 3.534.734.733 7.067-7.067L13 4.2l-6.333 6.4Z" clip-rule="evenodd">
					</path>
			</svg>
		</div>
	)

	return (
		<>
			{ isSelected ?
				checkmark
				:
				<div className="pointer-events-none h-[24px] w-[24px] rounded-full border border-gray-300 p-1"></div>
			}
		</>
	)
}
export default SelectedCheckmark