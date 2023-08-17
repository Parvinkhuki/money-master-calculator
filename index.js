
document.getElementById("calculate").addEventListener("click",function(){
    const inputs=getInputById("income")
const food=getInputById("food")
const rent=getInputById("rent")
const cloth=getInputById("cloths")
const disc=getInputById("disc")
    const sum=food + rent + cloth
const balance= inputs-sum
let sums= setValue("expens",sum)
let subs= setValue("bala",balance)
console.log(sum)
})
document.getElementById("save").addEventListener("click",function(){
   
const food=getInputById("food")
const rent=getInputById("rent")
const cloth=getInputById("cloths")
const disc=getInputById("disc")

    const sum=food + rent + cloth
    console.log(sum)
    if(disc===20){
       
        console.log(sum)
    }
    else{
        setValue("saving",0)
        setValue("total",sum)

    }
    

})