function countHours(year, holidays) {
  let extraHours = 0 
  
  holidays.forEach(holiday => {
    let day = new Date(year + '-' + holiday).getDay()
    if (day != 0 && day != 6) extraHours = extraHours + 2
  });

  return extraHours
}

countHours(2022, ['01/06', '04/01', '12/25'])
isLeapYear(2022)
