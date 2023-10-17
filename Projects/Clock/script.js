
// setInterval(()=>{
//     const clock = document.getElementById("Clock")
//     let time = new Date().toLocaleTimeString()

//     clock.textContent = time
// }, 1000)

setTimeout(()=>{
    const clock = document.getElementById("Clock")
    let time = new Date().toLocaleTimeString()
    clock.textContent = time
}, 2000)

setInterval()