import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const radioFulfilled = document.querySelector('input[value="fulfilled"]');
const radioRejected = document.querySelector('input[value="rejected"]');
const input = document.querySelector('input[name="delay"]');

form.addEventListener('submit', onClick);

function onClick(e) {
  e.preventDefault();

  function createPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (radioFulfilled.checked) {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
          radioFulfilled.checked = false;
          input.value = '';
        } else {
          reject(`❌ Rejected promise in ${delay}ms`);
          radioRejected.checked = false;
          input.value = '';
        }
      }, delay);
    });
  }

  const promise = createPromise(input.value);
  promise
    .then(value =>
      iziToast.success({
        message: `${value}`,
        backgroundColor: '#59a10d',
        messageColor: '#ffffff',
        position: 'topRight',
        color: '#ffffff',
        icon: '',
      })
    )
    .catch(error =>
      iziToast.error({
        titleColor: '#ffffff',
        message: `${error}`,
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
        position: 'topRight',
        color: '#ffffff',
        icon: '',
      })
    );
}
