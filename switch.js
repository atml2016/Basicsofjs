function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;

    case 2:
      dayName = "Monday";
      break;

    case 3:
      dayName = "Tuesday";
      break;

    case 4:
      dayName = "Wednesday";
      break;

    case 5:
      dayName = "Thursday";
      break;

    case 6:
      dayName = "Friday";
      break;

    case 7:
      dayName = "Saturday";
      break;

    default:
      dayName = "Invalid Day Name";
  }
  return dayName;
}

const dayNumber=5;
console.log(` Day ${dayNumber} : ${getDayName(dayNumber)}`);