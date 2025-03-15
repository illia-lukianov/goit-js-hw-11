import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const input = document.querySelector('#datetime-picker');
let intervalId;
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = new Date (selectedDates[0]);
    dateValidator(userSelectedDate);
  },
};

flatpickr("#datetime-picker", options);
startButton.disabled = true;

function dateValidator (userSelectedDate) {
  if (userSelectedDate.getTime() <= Date.now()) {
    startButton.disabled = true;
    return iziToast.error({
      title: 'Caution',
      message: "Please choose a date in the future",
      position: 'topRight',
    })
  } else {
    startButton.disabled = false;
  }
  userSelectedDate = 0;
}

startButton.addEventListener('click',() => timer(userSelectedDate))
function timer(userSelectedDate) {
  startButton.disabled = true;
  input.disabled = true;
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => countDown(userSelectedDate), 1000);
}

function countDown(userSelectedDate) {
  const date = new Date();
  const timeRes = userSelectedDate.getTime() - date.getTime(); 
  const countDownRes = convertMs(timeRes);

   if (timeRes <= 0) {
    clearInterval(intervalId);
    input.disabled = false;
    return;
  }

  days.textContent = addLeadingZero(countDownRes.days);
  hours.textContent = addLeadingZero(countDownRes.hours);
  minutes.textContent = addLeadingZero(countDownRes.minutes);
  seconds.textContent = addLeadingZero(countDownRes.seconds);
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0'); 
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}