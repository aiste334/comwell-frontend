import { formatToMonthDay } from "@/src/utils/dates"

const useBookingInfoFormatting = ({ dates, rooms }) => {
	
	const startDateString = dates?.start && formatToMonthDay(dates.start)
  const endDateString = dates?.end && formatToMonthDay(dates.end)
  const roomCount = rooms?.length || 0
  const guestCount = rooms?.reduce((prev, curr) => prev += curr.adults + curr.children + curr.toddlers, 0) || 0

	return { startDateString, endDateString, roomCount, guestCount }
}
export default useBookingInfoFormatting