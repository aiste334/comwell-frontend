import DrawerPrimaryButton from "@/src/components/ui/buttons/DrawerPrimaryButton"
import SelectedCheckmark from "@/src/components/ui/buttons/circle-buttons/SelectedCheckmark"
import Heading from "@/src/components/ui/text/Heading"

const OptionSelection = ({ selected, setSelected, options, onClose, name = "Select option" }) => {

	const renderOptions = () => {
		return options?.map(o => {
			const isSelected = selected?.id === o.id
			return <button className="flex flex-row justify-between items-center py-1" key={o.id} onClick={() => setSelected(o)}>
				<p className={`text-2xl font-semibold hover:text-black ${isSelected && 'text-black'} transition-all`}>{o.name}</p>
				<SelectedCheckmark isSelected={isSelected}/>
			</button>
		})
	}

	return (
		<div className="h-full flex flex-col relative">
      <Heading>{name}</Heading>

      <div className="overflow-y-auto pt-8 flex-1">
				<div className="w-full flex flex-col group hover:text-gray-300">
					{renderOptions()}
				</div>
      </div>

      <DrawerPrimaryButton className="pt-12" onClick={onClose}>Select</DrawerPrimaryButton>
    </div>
	)
}
export default OptionSelection