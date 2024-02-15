/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  MONDAY = 1,
  TUESDAY = 1,
  WEDNESDAY = 1,
  THURSDAY = 1,
  FRIDAY = 1,
  SATURDAY = 0,
  SUNDAY = 0,
}

function isWeekend(day: WeekDays): boolean {
  return Boolean(WeekDays[day]);
}

isWeekend(WeekDays.TUESDAY);
