let fullname=prompt("lütfen adınızı giriniz")
let alı =document.querySelector("#myName")
alı.innerHTML=`${fullname}`

setInterval(() => { 
    let date = new Date()
    let saat = date.getHours()
    let dakika = date.getMinutes()
    let saniye = date.getSeconds()
    const weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
    let gün = weekday[date.getDay()]
    let time = document.querySelector ("#myClock")
    time.innerHTML = `${saat} : ${dakika} : ${saniye}   ${gün} `
    } , 1000)