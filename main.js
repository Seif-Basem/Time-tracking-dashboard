// btns
let dayBtn = document.getElementById("daily");
let weekBtn = document.getElementById("weekly");
let monthBtn = document.getElementById("monthly");
//all btns
let allBtns = document.querySelector("section .left .sort");
//work data
let workHrs = document.querySelector("section .right .box .workk .hrs h3 span");
let workPrev = document.querySelector("section .right .box .workk .hrs .l-week span");
//play data
let playHrs = document.querySelector("section .right .box .playy .hrs h3 span");
let playPrev = document.querySelector("section .right .box .playy .hrs .l-week span");
//study data
let studyHrs = document.querySelector("section .right .box .studyy .hrs h3 span");
let studyPrev = document.querySelector("section .right .box .studyy .hrs .l-week span");
//exercise data
let exerciseHrs = document.querySelector("section .right .box .exercisee .hrs h3 span");
let exercisePrev = document.querySelector("section .right .box .exercisee .hrs .l-week span");
//social data
let socialHrs = document.querySelector("section .right .box .sociall .hrs h3 span");
let socialPrev = document.querySelector("section .right .box .sociall .hrs .l-week span");
//self data
let selfHrs = document.querySelector("section .right .box .selff .hrs h3 span");
let selfPrev = document.querySelector("section .right .box .selff .hrs .l-week span");

//day click
dayBtn.onclick = function() {
  dayBtn.classList.add("active");
  weekBtn.classList.remove("active");
  monthBtn.classList.remove("active");
  fetch('data.json').then((result) => {
    // console.log(result)
    let myData = result.json();
    // console.log(result);
    return myData;
  }).then((data) => {
    for (let i =0; i <= 5; i++) {
      workHrs.innerHTML = data[0].timeframes.daily.current
      workPrev.innerHTML = data[0].timeframes.daily.previous
  
      playHrs.innerHTML = data[1].timeframes.daily.current
      playPrev.innerHTML = data[1].timeframes.daily.previous
  
      studyHrs.innerHTML = data[2].timeframes.daily.current
      studyPrev.innerHTML = data[2].timeframes.daily.previous
  
      exerciseHrs.innerHTML = data[3].timeframes.daily.current
      exercisePrev.innerHTML = data[3].timeframes.daily.previous
  
      socialHrs.innerHTML = data[4].timeframes.daily.current
      socialPrev.innerHTML = data[4].timeframes.daily.previous
  
      selfHrs.innerHTML = data[5].timeframes.daily.current
      selfPrev.innerHTML = data[5].timeframes.daily.previous
    }
  })
}

//week click
weekBtn.onclick = function() {
  weekBtn.classList.add("active");
  dayBtn.classList.remove("active");
  monthBtn.classList.remove("active");
  fetch('data.json').then((result) => {
    // console.log(result)
    let myData = result.json();
    // console.log(result);
    return myData;
  }).then((data) => {
    for (let i =0; i <= 5; i++) {
      workHrs.innerHTML = data[0].timeframes.weekly.current
      workPrev.innerHTML = data[0].timeframes.weekly.previous
  
      playHrs.innerHTML = data[1].timeframes.weekly.current
      playPrev.innerHTML = data[1].timeframes.weekly.previous
  
      studyHrs.innerHTML = data[2].timeframes.weekly.current
      studyPrev.innerHTML = data[2].timeframes.weekly.previous
  
      exerciseHrs.innerHTML = data[3].timeframes.weekly.current
      exercisePrev.innerHTML = data[3].timeframes.weekly.previous
  
      socialHrs.innerHTML = data[4].timeframes.weekly.current
      socialPrev.innerHTML = data[4].timeframes.weekly.previous
  
      selfHrs.innerHTML = data[5].timeframes.weekly.current
      selfPrev.innerHTML = data[5].timeframes.weekly.previous
    }
  })
}

//month click
monthBtn.onclick = function() {
  monthBtn.classList.add("active");
  weekBtn.classList.remove("active");
  dayBtn.classList.remove("active");
  fetch('data.json').then((result) => {
    // console.log(result)
    let myData = result.json();
    // console.log(result);
    return myData;
  }).then((data) => {
    for (let i =0; i <= 5; i++) {
      workHrs.innerHTML = data[0].timeframes.monthly.current
      workPrev.innerHTML = data[0].timeframes.monthly.previous
  
      playHrs.innerHTML = data[1].timeframes.monthly.current
      playPrev.innerHTML = data[1].timeframes.monthly.previous
  
      studyHrs.innerHTML = data[2].timeframes.monthly.current
      studyPrev.innerHTML = data[2].timeframes.monthly.previous
  
      exerciseHrs.innerHTML = data[3].timeframes.monthly.current
      exercisePrev.innerHTML = data[3].timeframes.monthly.previous
  
      socialHrs.innerHTML = data[4].timeframes.monthly.current
      socialPrev.innerHTML = data[4].timeframes.monthly.previous
  
      selfHrs.innerHTML = data[5].timeframes.monthly.current
      selfPrev.innerHTML = data[5].timeframes.monthly.previous
    }
  })
}