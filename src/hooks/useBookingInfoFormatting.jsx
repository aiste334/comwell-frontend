import { formatToMonthDay,formatToHoursMinutes } from "@/src/utils/dates"

const useBookingInfoFormatting = ({ dates, rooms, times }) => {
	
	const startDateString = dates?.start && formatToMonthDay(dates.start)
  const endDateString = dates?.end && formatToMonthDay(dates.end)
  const roomCount = rooms?.length || 0
  const guestCount = rooms?.reduce((prev, curr) => prev += curr.adults + curr.children + curr.toddlers, 0) || 0

  const startTimeString = times?.start && formatToHoursMinutes(times.start);
  const endTimeString = times?.end && formatToHoursMinutes(times.end);

	return { startDateString, endDateString, roomCount, guestCount,  startTimeString, endTimeString }
}
export default useBookingInfoFormatting 