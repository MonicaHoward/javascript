console.log("time to start the timer!");

let timer = document.querySelector('p')

let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')

let hr = 0
let min = 0
let sec = 0

let stopped = true;

function timerTick(){
    if (stopped == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr)

        sec++
        
        if (sec == 60) {
            min++
            sec=0;
        } 
        if (min == 60) {
            hr++
            min = 0
            sec = 0;
        } 
        timer.innerHTML = `${hr}:${min}:${sec}`
        setTimeout(timerTick, 1000)
    }
}

start.addEventListener("click", function(){
    if ( stopped == true){
        stopped = false
        timerTick()
    }
})

stop.addEventListener("click", function(){
    if ( stopped == false){
        stopped = true
    }
})
reset.addEventListener("click", function(){
   hr = 0
   min = 0 
   sec = 0
   timer.innerHTML = `0:0:0`
})






