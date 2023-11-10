export function formatToMonthDay(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
}

export function getTodayDate() {
  const today = new Date();
  return today;
}

export function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

export function getMonthName(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return monthNames[date.getMonth()];
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export function getNextMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const nextMonth = new Date(year + Math.floor((month + 1) / 12), (month + 1) % 12, 1);

  return nextMonth;
}

export function compareDates(date1, date2) {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  if (year1 === year2 && month1 === month2 && day1 === day2) {
    return 0; // Dates are equal
  } else if (year1 < year2 || (year1 === year2 && (month1 < month2 || (month1 === month2 && day1 < day2)))) {
    return -1; // date1 is earlier than date2
  } else {
    return 1; // date1 is later than date2
  }
}