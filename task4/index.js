const readline = require("readline-sync")
console.log("Enter question")

let qr = String(readline.question())
let q =qr.slice(0,qr.length-1)
// console.log(q)
// console.log(q.length)
let qn= q.split(" ");
// console.log(qn)
if(qn[3] == "plus"){
    console.log(`${qn[2]} plus ${qn[4]} is ${Number(qn[2])+Number(qn[4])}`)    
}
else if(qn[3]=="minus"){
    console.log(`${qn[2]} minus ${qn[4]} is ${Number(qn[2])-Number(qn[4])}`)    
}
else if(qn[3]=="multiplied"){
    console.log(`${qn[2]} multiplied by ${qn[5]} is ${Number(qn[2])*Number(qn[5])}`)    
}
else if(qn[3]=="divided"){
    console.log(`${qn[2]} divided by ${qn[5]} is ${Number(qn[2])/Number(qn[5])}`)    
}
else{
    console.log("Error!")
}