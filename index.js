

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

})
// document.getElementById("save").addEventListener("click",function(){
//     const sum=food + rent + cloth
//     if(disc===20){
//         const save=20/100;
//         const pay=sum-save;
//         setValue("saving",save)
//         setValue("total",pay)
//     }
//     else{
//         setValue("saving",0)
//         setValue("total",sum)

//     }
    

// })