
const deadline1 = new Date('March 6, 2024 00:00:00').getTime();


const interval = setInterval(() => {

const now = new Date().getTime();


const distance = deadline1 - now;


const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.querySelector('.days').textContent = days, "days";
document.querySelector('.hours').textContent = hours;
document.querySelector('.minutes').textContent = minutes;
document.querySelector('.seconds').textContent = seconds;


if (distance < 0) {
clearInterval(interval);


const deadline2 = new Date('March 16, 2024 11:00:00').getTime();
setTimeout(() => {

 deadline1 = deadline2;
 interval.resume();
}, 1000);
}
}, 1000);