// function getInputValue(inputid){
//     const input=document.getElementById(inputid)
//     const inputString=input.Value
//     const inputValue= parseFloat(inputString)
//     input.value='';
//     return inputValue;

//}
function getInputById(inputid){
    const input=document.getElementById(inputid)
    const inputStrig = input.value 
    const inputValue=parseFloat(inputStrig)
    input.value ='';
    return inputValue;

}
    function getETextValue(textid){
        const text=document.getElementById(textid)
        const textStrig=text.innerText 
        const textValue=parseFloat(textStrig)
        return textValue;
    }
    
    function setValue(elemetid,newValue){
        const values=document.getElementById(elemetid)
         values.innerText =newValue;
    }
  