const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('oneshow')
        }
        else{
            entry.target.classList.remove('oneshow')
        }
    })
})
const one = document.querySelectorAll('.one');
one.forEach((el)=>observe.observe(el))

setInterval(()=>{
    const code = ['10px','20px','30px','40px','50px','50%']
randomValues = code[Math.floor(Math.random()*code.length)]

document.getElementById("img").style = `
border-radius:${randomValues};
`
},1000)
