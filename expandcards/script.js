const pannel= document.querySelectorAll('.pannel')

// console.log(pannel[0])

pannel.forEach((pannel)=>{
    pannel.addEventListener('click',()=>{
        removeActiveClasses()
        pannel.classList.add('active')
    })
})


function removeActiveClasses(){
    pannel.forEach(pannel=>{
        pannel.classList.remove('active')
    })
}