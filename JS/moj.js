const counter = document.querySelectorAll('.counter')
const boxScroll = document.querySelector('.boxScroll')


const options = {
    rootMargin: '-110px'
}

const startScroll = entry => {
    console.log(entry[0].isIntersecting);

    if (entry[0].isIntersecting) {
        counter.forEach(el=>{
            const updateScroll = () => {
                const finalNumber = el.getAttribute('data-number')
                const value = parseInt(el.textContent)

                const speed = finalNumber / 150

                if (value < finalNumber) {
                    el.textContent = `${Math.floor(value + speed)}`
                    setTimeout(updateScroll, 1)
                }
                else {
                    el.textContent = finalNumber
                }
            }

            updateScroll()
        })
    }
}

const observer = new IntersectionObserver(startScroll, options)
observer.observe(boxScroll)