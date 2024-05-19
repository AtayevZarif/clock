setInterval(() =>{
    let time = new Date().toLocaleTimeString()
    
    let firstHour = document.getElementById("first-hour")
    let secondHour = document.getElementById("second-hour")
    let firstMinute = document.getElementById("first-minute")
    let secondMinute = document.getElementById("second-minute")
    let firstSecond = document.getElementById("first-second")
    let secondSecond = document.getElementById("second-second")
    
    let hour1 = document.getElementById("hour-1").innerText = Number(time[0])
    let hour2 = document.getElementById("hour-2").innerText = Number(time[1])
    let minute1 = document.getElementById("minute-1").innerText = Number(time[3])
    let minute2= document.getElementById("minute-2").innerText = Number(time[4])
    let second1 = document.getElementById("second-1").innerText = Number(time[6])
    let second2 = document.getElementById("second-2").innerText = Number(time[7])
    
    
    let nextSecond2 = document.createElement("h1")
    let nextSecond1 = document.createElement("h1")
    let nextMinute2 = document.createElement("h1")
    let nextMinute1 = document.createElement("h1")
    let nextHour2 = document.createElement("h1")
    let nextHour1 = document.createElement("h1")
    
    nextSecond2.className = "absolute"
    nextSecond1.className = "absolute"
    nextMinute2.className = "absolute"
    nextMinute1.className = "absolute"
    nextHour2.className = "absolute"
    nextHour1.className = "absolute"
    
    secondSecond.appendChild(nextSecond2)
    firstSecond.appendChild(nextSecond1)
    secondMinute.appendChild(nextMinute2)
    firstMinute.appendChild(nextMinute1)
    secondHour.appendChild(nextHour2)
    firstHour.appendChild(nextHour1)
    
    
    let animationNone = () => {
        firstSecond.className = "none"
        firstMinute.className = "none"
        secondMinute.className = "none"
        firstHour.className = "none"
        secondHour.className = "none"
    }
    animationNone()


    if (second2 == 9) {
        nextSecond2.innerText = 0
        nextSecond1.innerText = second1 + 1
        firstSecond.className = "number"
    } 
    else {
        nextSecond2.innerText = second2 + 1
    }
    
    if (second1 == 5) {
        nextSecond1.innerText = 0
        if (second2 == 9) {
            nextMinute2.innerText = minute2 + 1
            secondMinute.className = "number"
        }
    }

    if (minute2 == 9) {
        nextMinute2.innerText = 0
        if (second1 == 5 && second2 == 9) {
            nextMinute1.innerText = minute1 + 1
            firstMinute.className = "number"
        }
    }

    if (minute1 == 5) {
        nextMinute1.innerText = 0
        if (minute2 == 9 && second1 == 5 && second2 == 9) {
            nextHour2.innerText = hour2 + 1
            secondHour.className = "number"
        }
    }

    if (hour2 == 9) {
        nextHour2.innerText = 0
        if (minute1 == 5 && minute2 == 9 && second1 == 5 && second2 == 9) {
            nextHour1.innerText = hour1 + 1
            nextHour1.className = "number"
        }
    }

    if (hour1 == 2) {
        nextHour1.innerText = 0
        if (hour2 == 3 && minute1 == 5 && minute2 == 9 && second1 == 5 && second2 == 9){
            nextHour2.innerText = 0
            firstHour.className = "number"
        }
    }

    
    setTimeout(() => {
        nextSecond2.remove()
        nextSecond1.remove()
        nextMinute2.remove()
        nextMinute1.remove()
        nextHour2.remove()
        nextHour1.remove()
    }, 1000);
}, 1000);