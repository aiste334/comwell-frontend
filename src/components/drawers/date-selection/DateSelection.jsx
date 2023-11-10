import Heading from "../../ui/text/Heading"
import DrawerPrimaryButton from "../../ui/buttons/DrawerPrimaryButton"
import MonthSelection from "./MonthSelection"
import { getNextMonth, getTodayDate } from "@/src/utils/dates"

const DateSelection = ({ dates, setDates, onClose }) => {

  const MONTH_COUNT = 13

  const generateMonths = () => {
    const months = []

    for(let i = 0, month = new Date(getTodayDate()); i < MONTH_COUNT; i++, month = getNextMonth(month)) {
      months.push(
        <MonthSelection key={i} printDate={month} dates={dates} setDates={setDates}/>
      )
    }

    return months
  }

  return (
    <div className="h-full flex flex-col relative">
      <Heading>Dates</Heading>

      <div className="pt-10 pb-2 pr-4 scrollbar-gutter border-b-cw-gray-300 border-b-[1px] flex items-center justify-evenly text-sm font-semibold gap-4">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>

      <div className="datepicker overflow-y-auto pt-8 flex-1">
        {generateMonths()}
      </div>

      <DrawerPrimaryButton className="pt-12" onClick={onClose}>Select</DrawerPrimaryButton>
    </div>
  )
}

export default DateSelection