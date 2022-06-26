import * as _ from 'lodash';



import "./css/style.css";
import "./style.scss";

let boxes: any = document.querySelectorAll(".box");
let btn: any = document.querySelector(".btn");
import {getCounter} from './function';
import {clearBTN} from "./clearBtn";

boxes.forEach((box: { 
  addEventListener: (arg0: string, arg1: (event: any) => void) => void; 
}) => {
  box.addEventListener('click', getCounter);
});

btn.addEventListener("click", clearBTN);

