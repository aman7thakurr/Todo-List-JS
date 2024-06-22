const inp = document.querySelector('#input')

function createE(){
    const todoData = document.querySelector("#tododata")
const newDiv = document.createElement("div")
const checkbox = document.createElement("input")
checkbox.type = 'checkbox'
checkbox.value ='false'
checkbox.className   = 'checkbox' 
const newDivText = document.createTextNode(inp.value)
newDiv.appendChild(newDivText)
const currentDiv =document.getElementById("div1")
todoData.insertBefore(newDiv,currentDiv)
newDiv.insertBefore(checkbox,newDivText )

checkbox.addEventListener('change',function(){
    if(checkbox.checked){
         newDiv.remove()
         const completedData = document.querySelector("#completeddata")
        
        completedData.insertBefore(newDiv,currentDiv)
newDiv.insertBefore(checkbox,newDivText )

       
    }
    else{
        console.log(false);
    }
})
}
// console.log(checkbox.value);
function addElement(){
    const text = inp.value.trim()
    if(text !== ""){
      
        createE()
        inp.value = ""
       
    }
}

