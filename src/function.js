let box1 = document.getElementById("one");
let box2 = document.getElementById("two");
let box3 = document.getElementById("three");
let count1 = 0;
let count2 = 0;
let count3 = 0;

export function getCounter(event) {
  let target = event.target; 
  if (target === box1) {
    count1++;
    box1.innerHTML = count1;
  }
  if (target === box2) {
    count2++;
    box2.innerHTML = count2;
  }
  if (target === box3) {
    count3++;
    box3.innerHTML = count3;
  }
};