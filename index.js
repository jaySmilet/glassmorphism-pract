// Import stylesheets
import './style.css';

// Write Javascript code!
navigator.mediaDevices.getUserMedia({ video: true }).then((ms) => {
  console.log(ms.getTracks()[0]);
  ms.getTracks()[0].stop;
});
