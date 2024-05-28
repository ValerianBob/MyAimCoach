
let timer 

const field = document.getElementById("field")

function time()
{ 

    let index = 1
    let sec = 0

    timer = setInterval(() =>{
        let x = Math.floor(Math.random() * 1500) + 1;
        let y = Math.floor(Math.random() * 820) + 1;
        
        const newTarget = document.createElement("div")

        const horisontal = document.createElement("div")
        horisontal.classList.add("horisontal")

        const vertical = document.createElement("div")
        vertical.classList.add("vertical")

        const point = document.createElement("div")
        point.classList.add("point")

        newTarget.classList.add("target")
        newTarget.id = index
        newTarget.appendChild(horisontal)
        newTarget.appendChild(vertical)
        newTarget.appendChild(point)

        newTarget.style.marginTop = `${y}px`
        newTarget.style.marginLeft = `${x}px`

        sec++;
        console.log(sec)

        field.appendChild(newTarget)
        addEvent(index)

        console.log(`Location = x:${x} y:${y}`)
        console.log(`Index = ${index}`)
        
        index++;
    }, 1000)
}

time()

function addEvent(index)
{
    let cliked_target = document.getElementById(index)
    
    cliked_target.addEventListener("click", function(){
        this.remove()
        console.log("target removed")
    })
}


