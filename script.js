let some = document.querySelector('.Location button')

some.addEventListener('mouseover', somefunc)

function somefunc(){
    some.style.background = 'transparent'
    some.style.border = '2px black solid'
}


some.addEventListener('mouseleave', leav)

function leav(){
    some.style.background = 'blue'
    some.style.border = 'none'
}


let some1 = document.querySelector('.kitchen3 button')

some1.addEventListener('mouseover', somefunc1)

function somefunc1(){
    some1.style.background = 'transparent'
    some1.style.border = '2px black solid'
}


some1.addEventListener('mouseleave', leav1)

function leav1(){
    some1.style.background = 'blue'
    some1.style.border = 'none'
}