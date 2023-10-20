/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
   monday = 'Monday',
   tuesday = 'Tuesday',
   wednesday = 'Wednesday',
   thursday = 'Thursday',
   friday = 'Friday',
   saturday = 'Saturday',
   sunday = 'Sunday',
}

function isWeekend(day: DayOfWeek): boolean {
   return day === DayOfWeek.saturday || day === DayOfWeek.sunday;
}