const sections = [...document.querySelectorAll('section, footer')] 

let options = {
    threshold: 0.5
}

const handleIntersect = (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry)
            document.body.style.backgroundColor = entry.target.getAttribute('data-color');

        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)

sections.forEach(section => {
    observer.observe(section)
})