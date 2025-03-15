import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

iziToast.info({
    title: 'Hello',
    message: 'Welcome!',
    color: 'blue',
})
form.addEventListener('submit', (event) => {
    let inputDelay = Number(document.querySelector("input[name=delay]").value);
    let res = document.querySelector("input[name='state']:checked").value;
    event.preventDefault();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res === 'fulfilled') {
                resolve(inputDelay);
            } else {
                reject(inputDelay);
            };
        }, inputDelay);
    });

    promise
        .then(delay => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
                color: 'green',
            });
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
                color: 'red',
            });
        });
});