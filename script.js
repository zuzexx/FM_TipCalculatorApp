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

    let result = bill*0.05
    let resultPeople = (result/people)
    let onPerson =bill/people
    let totalPerson =onPerson + resultPeople
        resultPeople=(resultPeople).toFixed(2)
        totalPerson=(totalPerson).toFixed(2)
        
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

tenBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = bill*0.1
    let resultPeople = result/people
    let onPerson = bill/people
    let totalPerson = onPerson + resultPeople
    resultPeople=(resultPeople).toFixed(2)
    totalPerson=(totalPerson).toFixed(2)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

fifteenBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = bill*0.15
    let resultPeople = result/people
    let onPerson = bill/people
    let totalPerson = onPerson + resultPeople
    resultPeople=(resultPeople).toFixed(2)
    totalPerson=(totalPerson).toFixed(2)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

twentyfiveBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = bill*0.25
    let resultPeople =result/people
    let onPerson = bill/people
    let totalPerson = onPerson + resultPeople
    resultPeople=(resultPeople).toFixed(2)
    totalPerson=(totalPerson).toFixed(2)
    
    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

fiftyBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill").valueAsNumber
    let people = document.getElementById("people").valueAsNumber
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    let result = bill*0.5
    let resultPeople = result/people
    let onPerson = bill/people
    let totalPerson = onPerson + resultPeople
    resultPeople=(resultPeople).toFixed(2)
    totalPerson=(totalPerson).toFixed(2)

    tip.textContent=`$ ${resultPeople} `
    total.textContent = `$ ${totalPerson}`
})

/*
custom.addEventListener("blur", function(){
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

})*/

resetBtn.addEventListener("click", function(){
    let bill = document.getElementById("bill")
    let people = document.getElementById("people")
    let tip = document.getElementById("tip")
    let total = document.getElementById("total")

    bill.value="0.00"
    people.value="0"
    tip.textContent="$ 0.00"
    total.textContent="$ 0.00"
})
