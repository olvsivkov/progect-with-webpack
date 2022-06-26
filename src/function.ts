let box1: any = document.getElementById("one");
let box2: any = document.getElementById("two");
let box3: any = document.getElementById("three");
let count1: number = 0;
let count2: number = 0;
let count3: number = 0;

export function getCounter(event:any): void {
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