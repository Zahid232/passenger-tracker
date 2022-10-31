
let adddd=0

document.getElementById("add").addEventListener('click',function(){
    adddd+=1
    render()
})

document.getElementById("reset").addEventListener('click',function(){
    if (adddd>0){
        document.getElementById("display").innerText+=`-${adddd}`
        adddd=0
        render()
    }
    

})

function render(){
    document.getElementById("count").innerText=adddd

}

document.getElementById("del").addEventListener('click',function(){
    document.getElementById("display").innerText='Previous count'

})


