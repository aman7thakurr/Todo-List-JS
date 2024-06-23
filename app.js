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
const editbtn =document.createElement("button")
editbtn.textContent = "Edit"
editbtn.className = "editbtn"
newDiv.appendChild(editbtn)
const delbtn =document.createElement("button")
delbtn.textContent = "Delete"
delbtn.className = "delbtn"
newDiv.appendChild(delbtn)

editbtn.addEventListener('click',function(){
    const editInput = document.createElement("input")
    editInput.type = "text"
    editInput.value = newDivText.textContent
    newDiv.replaceChild(editInput,newDivText)
    editInput.addEventListener('blur',function(){
        newDivText.textContent = editInput.value
        newDiv.replaceChild(newDivText,editInput)
        })

})
delbtn.addEventListener('click',function(){
    deleteElement()
})
checkbox.addEventListener('change',function(){
    if(checkbox.checked){
         newDiv.remove()
         const completedData = document.querySelector("#completeddata")
        
        completedData.insertBefore(newDiv,currentDiv)
newDiv.insertBefore(checkbox,newDivText )
editbtn.remove()
       
    }
    else{
        console.log(false);
    }
})
function deleteElement(){
newDiv.remove()
}
}

// console.log(checkbox.value);
function addElement(){
    const text = inp.value.trim()
    if(text !== ""){
      
        createE()
        inp.value = ""
       
    }
}

