
import webpackLogo from './assets/webpack_logo.png';
import "./css/style.css";
import "./style.scss";

let boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
import {getCounter} from './function.js';
import {clearBTN} from './clearBtn.js';

boxes.forEach(box => {
  box.addEventListener('click', getCounter);
});

btn.addEventListener("click", clearBTN);

