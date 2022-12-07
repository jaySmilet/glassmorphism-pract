// Import stylesheets
import './style.css';

// Write Javascript code!

var ms;

navigator.mediaDevices.getUserMedia({ video: true }).then((ms) => {
  console.log(ms.getTracks()[0]);
  ms = ms;
});

btn.addEventListener('click', () => {
  setTimeout(() => {
    ms.getTracks()[0].stop;
  }, 3000);
});
