const start = document.getElementById('start')

const stop = document.getElementById('stop')

let clear
start.addEventListener('click', (e)=>{
    if(!clear){ //When you don't apply this the on pressing start more then once more instances strat and changes color
        clear = setInterval(()=>{
            // document.body.style.backgroundColor = `#${Math.floor(Math.random()*(16**6)).toString(16).padStart(6, '0')}`
    
            document.body.style.backgroundColor = `#${Math.floor((Math.random()*10)%1)}${Math.floor(Math.random()*(10**5))}`
        }, 1000)
    } 
})

stop.addEventListener('click',(e)=>{
    clearInterval(clear)
    clear = null
}
)