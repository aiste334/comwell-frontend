import DrawerPrimaryButton from "@/src/components/ui/buttons/DrawerPrimaryButton"
import Heading from "@/src/components/ui/text/Heading"

const OptionSelection = ({ selected, setSelected, options, onClose, name = "Select option" }) => {

	const renderOptions = () => {
		return options.map(o => {
			return <button className="" key={o.id} onClick={() => setSelected(o)}>
				<p className="text-3xl font-semibold">{o.name}</p>
				{ selected.id === o.id ?
					<div className=""></div>
					:
					<div className=""></div>
				}
			</button>
		})
	}

	return (
		<div className="h-full flex flex-col relative">
      <Heading>{name}</Heading>

      <div className="overflow-y-auto pt-8 flex-1">
				<div className="w-full flex flex-col group">
					{renderOptions()}
				</div>
      </div>

      <DrawerPrimaryButton className="pt-12" onClick={onClose}>Select</DrawerPrimaryButton>
    </div>
	)
}
export default OptionSelection