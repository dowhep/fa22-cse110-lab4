function timeEverySecond() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

let intervalId = setInterval(timeEverySecond, 1000);
