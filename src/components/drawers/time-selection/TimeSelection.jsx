import DrawerPrimaryButton from "@/src/components/ui/buttons/DrawerPrimaryButton"
import SelectedCheckmark from "@/src/components/ui/buttons/circle-buttons/SelectedCheckmark";
import Heading from "@/src/components/ui/text/Heading"
import { formatToHoursMinutes } from "@/src/utils/dates";

const TimeSelection = ({ time, setTime, onClose, start = 8 * 60 * 60 * 1000, end = 23.5 * 60 * 60 * 1000, interval = 30 * 60 * 1000, name = "Select time" }) => {

	const generateTimes = () => {
		const timesArray = [];
    
    for (let t = start; t < end; t += interval) {
        timesArray.push(new Date(t));
    }

    return timesArray.map(t => {
			const isSelected = time.getHours() === t.getHours() && time.getMinutes() === t.getMinutes()
			return (
				<button key={t} className="flex flex-row w-full justify-between items-center py-4 border-gray-300 border-b last:border-b-0" onClick={() => setTime(t)}>
					<span className="font-semibold">{formatToHoursMinutes(t)}</span>
					<SelectedCheckmark isSelected={isSelected} />
				</button>
			)
		});
	}

	return (
		<div className="h-full flex flex-col relative">
      <Heading>{name}</Heading>

      <div className="overflow-y-auto pt-8 flex-1 pr-4">
        {generateTimes()}
      </div>

      <DrawerPrimaryButton className="pt-12" onClick={onClose}>Select</DrawerPrimaryButton>
    </div>
	)
}
export default TimeSelection