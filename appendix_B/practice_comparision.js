const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let [hours, minutes] = startTime.split(":");
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  if (hours - parseInt(dayStart)) {
    console.log("inside");
    console.log(minutes > parseInt(dayStart.slice(-2)));
    return minutes > parseInt(dayStart.slice(-2));
  }
  //   console.log(dayStart.slice(-2));
  console.log(hours > parseInt(dayStart) && hours < parseInt(dayEnd));
  // return hours < parseInt(dayStart) || hours > parseInt(dayEnd);
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
