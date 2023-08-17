

document.getElementById("calculate").addEventListener("click",function(){
    const inputs=getInputById("income")
    console.log(inputs)
    const food=getInputById("food")
    console.log(food)
    const rent=getInputById("rent")
    console.log(rent)
    const cloth=getInputById("cloth")
    console.log(cloth)
    
const sum=food + rent + cloth

const balance= inputs-sum
let sums= setValue("expens",sum)
return sums;
// setValue("bala",balance)

})