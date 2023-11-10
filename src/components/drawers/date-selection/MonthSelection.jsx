import Label from '../../ui/text/Label'
import { compareDates, getDaysInMonth, getFirstDayOfMonth, getMonthName, getTodayDate } from '@/src/utils/dates'

const MonthSelection = ({ printDate, dates, setDates }) => {

  const getYearMonthString = (date) => {
    date = new Date(date)
    const year = date.getFullYear()
    const month = date.getMonth()

    return date.toISOString().slice(0, 7)
  }

  function generateMonthCalendar(date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)
    const days = [];

    const tempDate = new Date(year, month+1)
  
    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay)) {
            if(j + 1 === firstDay)
              week.push({ beforeFirst: true, month: getYearMonthString(tempDate) })
            else week.push(null)
        } else if(day > daysInMonth) {
          if(week[week.length - 1]?.number) week.push({ afterLast: true, month: getYearMonthString(tempDate) })
          else week.push(null)
        } else {
          const actualDate = new Date(year, month, day)
          if(!actualDate) return

          week.push({ 
            number: day, 
            relativeToStart: compareDates(actualDate, new Date(dates.start)),
            relativeToEnd: compareDates(actualDate, new Date(dates.end)),
            active: compareDates(actualDate, getTodayDate()) >= 0,
            value: actualDate, 
            month: getYearMonthString(tempDate)
          }) 

          day++;
        }
      }
      days.push(week);
    }
  
    return days;
  }

  const monthName = getMonthName(new Date(printDate))
  const year = new Date(printDate).getFullYear() % 100

  const monthDays = generateMonthCalendar(new Date(printDate))

  const handleDayClick = (day) => {

    const selectedDate = new Date(day?.value)
    if(!day?.active || !selectedDate || compareDates(selectedDate, getTodayDate()) < 0) return

    if(dates.end) {
      setDates({ start: selectedDate, end: null })
    } else {
      setDates(prev => {
        if(!prev.start) return { start: selectedDate, end: null }

        switch(compareDates(selectedDate, prev.start)) {
          case  1: return {...prev, end: selectedDate}
          case  0: return { start: null, end: null }
          case -1: return { start: selectedDate, end: prev.start }
        }
      })
    }
  }

  return (
    <div className='w-full px-4'>
      <div className='w-full border-b-cw-gray-300 border-b-[1px] pb-1'>
        <Label>{monthName} {year}</Label>
      </div>

      <div className='month flex flex-col w-full gap-1'>
        {monthDays.map((week, weekIndex) => (
          <div key={weekIndex} className='flex flex-row justify-evenly'>
            {week.map((day, dayIndex) => {
              const bgSnippet = () => {
                let snippet = ''
                if(!day) return snippet

                const showBeforeFirst = () => {
                  if(!day.beforeFirst || day.number) return
                  if(getYearMonthString(dates.start) >= day.month) return
                  if(getYearMonthString(dates.end) < day.month) return
                  return true
                }

                const showAfterLast = () => {
                  if(!day.afterLast || day.number) return
                  if(getYearMonthString(dates.start) > day.month) return
                  if(getYearMonthString(dates.end) <= day.month) return
                  return true
                }

                if(showBeforeFirst()) snippet += ` bg-gradient-to-l from-cw-gray-200 to-transparent`
                else if(showAfterLast()) snippet += ` bg-gradient-to-r from-cw-gray-200 to-transparent`
                else if(day.relativeToStart >= 0 && day.relativeToEnd <= 0) snippet += ` bg-cw-gray-200`

                if(day.relativeToStart === 0) snippet += ` rounded-l-full`
                if(day.relativeToEnd === 0) snippet += ` rounded-r-full`

                if(dayIndex === 0) snippet += ` rounded-l-full`
                if(dayIndex === 6) snippet += ` rounded-r-full`

                return snippet
              }

              return (
              <div 
                onClick={(e) => handleDayClick(day)}
                key={dayIndex} 
                className={`day select-none w-full flex items-center justify-center text-center aspect-square ${bgSnippet()} ${day?.active ? '' : 'text-cw-gray-300'}`}>
                  { day?.value ?
                    (
                      <div className={`rounded-full w-full h-full flex text-center items-center justify-center hover:border-[1px] hover:border-active-black ${(day.relativeToStart === 0 || day.relativeToEnd === 0) && 'bg-active-black text-white'}`}>
                        {day.number}
                      </div>
                    )
                    : (day && day.number)
                  }
              </div>
            )})}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthSelection