import Notiflix from 'notiflix';
// console.log(Notiflix);

const form = document.querySelector('.form');
let firstDelay = document.querySelector('input[name = "delay"]');
let step = document.querySelector('input[name = "step"]');
let amount = document.querySelector('input[name = "amount"]');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  // const { delay, step, amount } = evt.currentTarget.elements;
  // console.log(delay.value, step.value, amount.value);

  firstDelay = Number(firstDelay.value);
  step = Number(step.value);
  amount = Number(amount.value);

  if (firstDelay < 0 || step < 0 || amount <= 0) {
    alert('Number must be positive');
  }

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    firstDelay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

// createPromise(i, firstDelay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
