// blueprint for my classes lol
class Classes {
  constructor(name, start_time, end_time, type, location, index, day) {
    this.name = name;
    this.start_time = start_time;
  	this.end_time = end_time;
  	this.type = type;
  	this.location = location;
  	this.index = index;
    this.day = day;
  }
};

// explanation for indices:
// index of 3 is for classes that don't change on a weekly basis
// index of 1 is the special classes we have for one week 
// index of 2 is the special classes we have for another week 

// create a big instance of classes
var Inventory = new Classes;

// manually input the classes :>
const ece124Mon = new Classes("ece124", 0830, 0920, "lec", "stc0050", 3, "mon");
const math119Mon = new Classes("math119", 0930, 1020, "lec", "stc0050", 3, "mon");
const ece140Mon = new Classes("ece140", 1030, 1120, "lec", "stc0050", 3, "mon");
const ece106Mon = new Classes("ece106", 1230, 1420, "tut", "stc0050", 3, "mon");
const math119Mon2 = new Classes("math119", 1430, 1620, "tut", "stc0050", 3, "mon");
Inventory[0] = ece124Mon;
Inventory[1] = math119Mon;
Inventory[2] = ece140Mon;
Inventory[3] = ece106Mon;
Inventory[4] = math119Mon2;
//
const ece106Tue = new Classes("ece106", 0830, 0950, "lec", "stc0050", 3, "tues");
const cs138Tue = new Classes("cs138", 1000, 1120, "lec", "stc0050", 3, "tues");
const ece124Tue = new Classes("ece124", 1230, 1320, "tut", "stc0050", 3, "tues");
const ece140Tue = new Classes("ece140", 1330, 1520, "tut", "stc0050", 3, "tues");

const ece124Tue2 = new Classes("ece124", 1530, 1620, "lec", "stc0050", 2, "tues");

const ece106Tue2 = new Classes("ece106", 1530, 1620, "lec", "stc0050", 1, "tues");
Inventory[5] = ece106Tue;
Inventory[6] = cs138Tue;
Inventory[7] = ece124Tue;
Inventory[8] = ece140Tue;
Inventory[9] = ece124Tue2;
Inventory[10] = ece106Tue2;
//
const ece124Wed = new Classes("ece124", 0830, 0920, "lec", "stc0050", 3, "wed");
const math119Wed = new Classes("math119", 0930, 1020, "lec", "stc0050", 3, "wed");
const ece140Wed = new Classes("ece140", 1030, 1120, "lec", "stc0050", 3, "wed");

const ece106Wed = new Classes("ece106", 1230, 1520, "lab", "stc0050", 2, "wed");
const cs138Wed = new Classes("cs138", 1430, 1620, "tut", "stc0050", 2, "wed");

const ece140Wed2 = new Classes("ece140", 1030, 1120, "lec", "stc0050", 1, "wed");
const cs138Wed2 = new Classes("cs138", 1430, 1620, "tut", "stc0050", 1, "wed");
Inventory[11] = ece124Wed;
Inventory[12] = math119Wed;
Inventory[13] = ece140Wed;
Inventory[14] = ece106Wed;
Inventory[15] = cs138Wed;
Inventory[16] = ece140Wed2;
Inventory[17] = cs138Wed2;
//
const ece106Thur = new Classes("ece106", 0830, 0950, "lec", "stc0050", 3, "thurs");
const cs138Thur = new Classes("cs138", 1000, 1120, "lec", "stc0050", 3, "thurs");

const cs138Thur2 = new Classes("cs138", 1530, 1620, "lec", "stc0050", 1, "thurs"); 

const ece124Thur = new Classes("ece124", 1230, 1520, "lab", "stc0050", 2, "thurs");
const ece140Thur = new Classes("ece140", 1530, 1620, "lec", "stc0050", 2, "thurs");
Inventory[18] = ece106Thur;
Inventory[19] = cs138Thur;
Inventory[20] = cs138Thur2;
Inventory[21] = ece124Thur;
Inventory[22] = ece140Thur;
//
const ece124Fri = new Classes("ece124", 0830, 0920, "lec", "stc0050", 3, "fri");
const math119Fri = new Classes("math119", 0930, 1020, "lec", "stc0050", 3, "fri");
const ece140Fri = new Classes("ece140", 1030, 1120, "lec", "stc0050", 3, "fri");
const se102Fri = new Classes("se102", 1130, 1220, "sem", "stc0050", 3, "fri");
Inventory[23] = ece124Fri;
Inventory[24] = math119Fri;
Inventory[25] = ece140Fri;
Inventory[26] = se102Fri;

getWeek();

var today = new Date().toLocaleString("en-US", {
timeZone: "America/Toronto"
});
today = new Date(today);
var dayOfTheWeek = today.getDay();
// console.log(dayOfTheWeek);
  
switch(dayOfTheWeek) {
  case 1:
    var w = whichWeek();
    var arrDays = filterDays('mon', w);
    var count = getSize(arrDays);
    for (var j = 0; j < count; j++) {
      console.log(arrDays[j].name);
    }
    var d = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta'}); // for now
    // console.log(d);
    var h = getHour(d);
    var m = getMinute(d);
    almost_start(h, m, arrDays, count);
    almost_end(h, m, arrDays, count);
    break;
  case 2:
    var w = whichWeek();
    var arrDays = filterDays('tue', w);
    var count = getSize(arrDays);
    for (var j = 0; j < count; j++) {
      console.log(arrDays[j].name);
    }
    var d = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Toronto'}); // for now
    // console.log(d);
    var h = getHour(d);
    var m = getMinute(d);
    almost_start(h, m, arrDays, count);
    almost_end(h, m, arrDays, count);
    break;
  case 3:
    var w = whichWeek();
    var arrDays = filterDays('wed', w);
    var count = getSize(arrDays);
    for (var j = 0; j < count; j++) {
      console.log(arrDays[j].name);
    }
    var d = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Toronto'}); // for now
    // console.log(d);
    var h = getHour(d);
    var m = getMinute(d);
    almost_start(h, m, arrDays, count);
    almost_end(h, m, arrDays, count);
    break;
  case 4:
    var w = whichWeek();
    var arrDays = filterDays('thurs', w);
    var count = getSize(arrDays);
    for (var j = 0; j < count; j++) {
      console.log(arrDays[j].name);
    }
    var d = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Toronto'}); // for now
    // console.log(d);
    var h = getHour(d);
    var m = getMinute(d);
    showClass(h, m, arrDays, count);
    almost_start(h, m, arrDays, count);
    almost_end(h, m, arrDays, count);
    // notify();
    break;
  case 5:
    var w = whichWeek();
    var arrDays = filterDays('fri', w);
    var count = getSize(arrDays);
    for (var j = 0; j < count; j++) {
      console.log(arrDays[j].name);
    }
    var d = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Toronto'}); // for now
    // console.log(d);
    var h = getHour(d);
    var m = getMinute(d);
    almost_start(h, m, arrDays, count);
    almost_end(h, m, arrDays, count);
    break;
  default:
    break;
}

function showClass(h, m, week, count) {
  var heading = document.getElementById("next");
  for(var i = 0; i < count; i++) {
    var hour = getH(week[i].start_time);
    var minute = getM(week[i].start_time); 
    if((hour > h) || (hour == h && minute > m)) {
      heading.innerHTML = "Next class: " + week[i].name + " at " + hour + ":" + minute;
      console.log(heading.innerHTML);
      break;
    } if(i == count-1) {
      heading.innerHTML = "You're done for today!";
      console.log(heading.innerHTML);
      break;
    }
  }
}

// check which classes are almost gonna start
function almost_start(h, m, week, count) {
  for(var i = 0; i < count; i++) {
    var hour = getH(week[i].start_time);
    var minute = getM(week[i].start_time); 
    if (h == hour && parseInt(minute) - parseInt(m) <= 30 && parseInt(minute) - parseInt(m) > 0) {
      console.log(`Almost time to go to ${week[i].name}!`);
    } else if (parseInt(h) == parseInt(hour) - 1 && parseInt(m) - parseInt(minute) <= 30 && parseInt(m) - parseInt(minute) > 0) {
      console.log(`Also almost time to go to ${week[i].name}!`);
    } else {
      console.log(`Not time to go to ${week[i].name} yet!`);
    }
  }
}

// check which classes are almost gonna end
function almost_end(h, m, week, count) {
  for(var i = 0; i < count; i++) {
    var hour = getH(week[i].end_time);
    var minute = getM(week[i].end_time); 
    if (h == hour && parseInt(minute) - parseInt(m) <= 30 && parseInt(minute) - parseInt(m) > 0) {
      console.log(`${week[i].name} is almost ending!`);
    } else if (parseInt(h) == parseInt(hour) - 1 && parseInt(m) - parseInt(minute) <= 30) {
      console.log(`${week[i].name} is also almost ending!`);
    } else {
      console.log(`${week[i].name} yeet!`);
    }
  }
}

// getHour function because the built in one doesn't work on my thing for some reason 
// turns something like 8:30:00 AM into 8
function getHour(date) {
  var h = "";
  var i = 0;
  while(date[i]!=":") {
    h = h + date[i];
    i++;
  }
  h = convert24(date, h);
  // console.log(h);
  return h;
}

// getMinute function because the built in one doesn't work on my thing for some reason 
// turns something like 8:30:00 AM into 30
function getMinute(date) {
  var m = "";
  var i = 0;
  while(date[i] != ":") {
    i++;
  }
  i++;
  while(date[i] != ":") {
    m = m + date[i];
    i++;
  }
  // console.log(m);
  return m;
}

// converts 12Hour schedule to military 24Hour schedule
function convert24(date, h) {
  var i = 0;
  while(date[i] != "A" && date[i] != 'P') {
    i++;
  }
  if(date[i] == 'A') {
    return h;
  } else if (date[i] == 'P') {
    return parseInt(h)+12;
  }
}


// for some sad reason the notifs are not permed so doesn't work :(

// console.log(Notification.permission);
// notify();

// function showNotification() {
//     var notification = new Notification("New message!", {
//     	body: "yeet yeet"
//     });
// }

// function notify() {
//   if (Notification.permission !== "granted") {
//         // Notification.requestPermission();
//         Notification.requestPermission();
// 				console.log('permiss', permission);
//   }
//   else {
//         showNotification();
//         notification.onclick = function () {
//             window.open("http://google.com");
//         };
//     }
// }


// get length of Classes array because .length doesn't work for some reason
function getSize(week) {
  var i = 0;
  while(week[i] != null) {
    i++;
  }
  return i;
}

// get Hour of the time I inputted in my Classes
function getH (time) {
  // console.log("hour: " + parseInt(time/100, 10));
  var h = parseInt(time/100, 10);
  return h;
}

// get Minute of the time I inputted in my classes
function getM (time) {
  // console.log("minute: " + parseInt(time%100, 10));
  var m = parseInt(time%100, 10);
  return m;
}

// we get the days we want (ie, if we're on thursday, we only want the classes that are on thursday)
function filterDays (day, weekNo) {
  var week = new Classes;
  var count = 0;
  var j = 0;
  for (var i = 0; i < 26; i++) {
    if ((Inventory[i].day == day && Inventory[i].index == weekNo) || (Inventory[i].day == day && Inventory[i].index == 3)) {
      week[j] = Inventory[i];
      j++;
    }
  }
  return week;
}

// how many weeks have passed since school started?
function getWeek () {
  var today = new Date();
  var date = new Date("01/03/2021");
  var Difference_In_Time = today.getTime() - date.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var daysPassed = parseInt(Difference_In_Days);
  return daysPassed;
}

// we want to know which week of classes we're supposed to take because my school
// likes making us confused
function whichWeek() {
  var daysPassed = getWeek();
  var weeksPassed = Math.floor(daysPassed/7);
  var weekNo;
  // console.log(daysPassed);
  // console.log(weeksPassed);
  if (weeksPassed%2 == 0) {
    weekNo = 1;
  } else if (weeksPassed%2 != 0) {
    weekNo = 2;
  }
  return weekNo;
}
