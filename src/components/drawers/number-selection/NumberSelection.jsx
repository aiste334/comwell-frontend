import DrawerPrimaryButton from "@/src/components/ui/buttons/DrawerPrimaryButton"
import MinusButton from "@/src/components/ui/buttons/circle-buttons/MinusButton"
import PlusButton from "@/src/components/ui/buttons/circle-buttons/PlusButton"
import Heading from "@/src/components/ui/text/Heading"

const NumberSelection = ({ count, setCount, onClose, name = "Count", min = 0, max = 500 }) => {
	return (
		<div className="h-full flex flex-col relative">
      <Heading>{name}</Heading>

      <div className="overflow-y-auto pt-8 flex-1">
        <div className="w-full p-2.5 border border-gray-200 flex flex-row justify-between items-centere select-none">
					<MinusButton onClick={() => setCount(Math.max(count - 1, min))} />
					{count}
					<PlusButton onClick={() => setCount(Math.min(count + 1, max))} />
				</div>
      </div>

      <DrawerPrimaryButton className="pt-12" onClick={onClose}>Select</DrawerPrimaryButton>
    </div>
	)
}
export default NumberSelection