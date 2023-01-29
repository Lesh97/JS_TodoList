setInterval(() => {
  // 현재 시간 가져오기
  const now = new Date();

  const h = now.getHours(); // 시간(0~23)
  const m = now.getMinutes(); // 분(0~59)
  const s = now.getSeconds(); // 초(0~59)

  // 시침
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 분침
  const degM = m * (360 / 60);
  // 초침
  const degS = s * (360 / 60);

  const elementH = document.querySelector(".lineHour");
  const elementM = document.querySelector(".lineMin");
  const elementS = document.querySelector(".lineSec");

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
