const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
//const item =document.querySelectorAll(".dealine-format h4");
const item = document.querySelectorAll(".deadline-format h4");

//temp date
let tempDate = new Date ();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate =new Date(tempYear,tempMonth,tempDay + 10,11,30,0);

//let futureDate= new Date(2023,6,20,11,30,10);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month =futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent =`giveaway ends on ${weekday}, ${date}${month} ${year} ${hours}:${minutes}am`

//future time
const futureTime =futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    
    // values in ms
    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000
//calculate values
   let days =t/oneDay ;
   days = Math.floor(days);
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour)/oneMinute);
   let seconds = Math.floor((t % oneMinute) / 1000);
   //set values arrays
   const values = [days,hours,minutes,seconds];
    function format(item){
        if(item < 10){return(item =`0${item}`)}
        return item;
    }
    item.forEach(function(item, index){
        item.innerHTML=format(values[index]);
    })
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML =`<h4 class="expired">sorry the time is over</h4>`
    }
}
//count down
let countdown = setInterval(getRemainingTime,1000);


getRemainingTime();