function showTime() {
  const theTime = new Date(); //To use Date, must first establish a variable. Use const instead of var. 

  const currentTime = theTime.getHours()+':'+String(theTime.getMinutes()).padStart(2,"0")+':'+String(theTime.getSeconds()).padStart(2,"0");

  const amPM = theTime.getHours() >= 12 ? 'PM' : 'AM'; //If hours is greater than or equal to 12 then it's PM, else it's AM. 

  document.getElementById('clock').textContent = currentTime; //textContent is safer than innerHTML
  
  document.getElementById('amPM').textContent = amPM; 
  }

function showDate() {
  const theDate = new Date(); 
  
  const currentDate = dayNames[theDate.getDay()]+", "+monthNames[theDate.getMonth()]+' '+ordinalDays[theDate.getDate()-1]+' '+theDate.getFullYear();

  document.getElementById('date').textContent = currentDate; 
}

// showTime(); //if you set a delay below, you can bypass this by calling these functions in the global name space here. 
// showDate();

setInterval(function() {
  showTime();
  showDate();
},); //Add an optional delay in miliseconds here between the , and )



const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const ordinalDays = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]; 