let btnadd = document.querySelector('#add')
let btnsubtract = document.querySelector('#subtract')
let input = document.querySelector('input')

btnadd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
})

btnsubtract.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
})