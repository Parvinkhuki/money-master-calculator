
document.getElementById("calculate").addEventListener("click",function(){
    const inputs=getInputById("income")
const food=getInputById("food")
const rent=getInputById("rent")
const cloth=getInputById("cloths")
const disc=getInputById("disc")
if(isNaN(inputs)){
    return alert("need Income to calculate")
   }
    const sum=food + rent + cloth
    
const balance= inputs-sum
if(balance<0){
    return alert("balance is 0 You poor")
}
let sums= setValue("expens",sum)
let subs= setValue("bala",balance)

})
document.getElementById("save").addEventListener("click",function(){
   
const expens=document.getElementById("expens").innerText
console.log(expens)
const disc=getInputById("disc")
//    if(isNaN(disc)){
//     return alert("need expens to calculate")
//    }
    if(disc===20){
       const saving=((expens*20)/100)
       const remain= expens- saving
       setValue("saving",saving)
       setValue("total",remain)
    }
    else{
        setValue("saving",0)
        setValue("total",expens)

    }
    

})