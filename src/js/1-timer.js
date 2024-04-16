import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
button.setAttribute('disabled', '');
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.error({
        title: 'Error',
        titleColor: '#ffffff',
        message: 'Please choose a date in the future',
        backgroundColor: '#b51b1b',
        messageColor: '#ffffff',
        position: 'topRight',
        color: '#FFFFFF',
      });
      // button.setAttribute('disabled', '');
    } else {
      button.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

button.addEventListener('click', onClick);

function onClick(e) {
  e.target.setAttribute('disabled', '');
  input.setAttribute('disabled', '');

  let differenceOfTime;

  const intervalId = setInterval(() => {
    if (userSelectedDate) {
      differenceOfTime = userSelectedDate - Date.now();
    }

    const { days, hours, minutes, seconds } = convertMs(differenceOfTime);

    if (differenceOfTime > 0) {
      daysElement.textContent = addLeadingZero(days);
      hoursElement.textContent = addLeadingZero(hours);
      minutesElement.textContent = addLeadingZero(minutes);
      secondsElement.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
