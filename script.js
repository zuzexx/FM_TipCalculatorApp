let fiveBtn = document.getElementById("five")
let tenBtn = document.getElementById("ten")
let fifteenBtn = document.getElementById("fifteen")
let twentyfiveBtn = document.getElementById("twentyfive")
let fiftyBtn = document.getElementById("fifty")
let custom = document.getElementById("custom").valueAsNumber
let resetBtn = document.getElementById("reset")

fiveBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result =Math.round(bill*0.05)
    let resultPeople = Math.round(result/people)
    let onPerson =Math.round(bill/people)
    let totalPerson =Math.round(onPerson + resultPeople)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

tenBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = Math.round(bill*0.1)
    let resultPeople = Math.round(result/people)
    if (resultPeople===0){
        resultPeople+=1
    }
    let onPerson = Math.round(bill/people)
    let totalPerson = Math.round(onPerson + resultPeople)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

fifteenBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = Math.round(bill*0.15)
    let resultPeople = Math.round(result/people)
    if (resultPeople===0){
        resultPeople+=1
    }
    let onPerson = Math.round(bill/people)
    let totalPerson = Math.round(onPerson + resultPeople)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

twentyfiveBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = Math.round(bill*0.25)
    let resultPeople = Math.round(result/people)
    if (resultPeople===0){
        resultPeople+=1
    }
    let onPerson = Math.round(bill/people)
    let totalPerson = Math.round(onPerson + resultPeople)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

fiftyBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = Math.round(bill*0.5)
    let resultPeople = Math.round(result/people)
    if (resultPeople===0){
        resultPeople+=1
    }
    let onPerson = Math.round(bill/people)
    let totalPerson = Math.round(onPerson + resultPeople)
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})
/*
custom.addEventListener("mouseover", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let customNum = custom/100
    let result = Math.round(bill*customNum)
    let resultPeople = Math.round(result/people)
    if (resultPeople===0){
        resultPeople+=1
    }
    let onPerson = Math.round(bill/people)
    let totalPerson = Math.round(onPerson + resultPeople)
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`

})

resetBtn.addEventListener("click", function(){
    document.getElementById("bill").value=""
   document.getElementById("people")=""
     document.getElementById("tip") =""
    document.getElementById("total")=""

    //bill.textContent="0"
   // people.textContent="0"
    //tip.textContent="$ 0"
    //total.textContent="$ 0"
})
*/