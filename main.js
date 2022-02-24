let form = document.querySelector('.btn')
let input = document.querySelector('input')
let box_1 = document.querySelector('.box-1')
let box_2 = document.querySelector('.box-2')
let box_3 = document.querySelector('.box-3')

form.addEventListener('click' , (event) => {
  event.preventDefault();
  let a = input.valuedad
  if(a == 'Birbola'){1
    box_1.classList.add('box-active')
    box_2.classList.add('box-active')
    box_3.classList.add('box-active')
    box_1.classList.remove('box-active-2')
    box_2.classList.remove('box-active-2')
    box_3.classList.remove('box-active-2')
    box_1.classList.remove('box-active-3')
    box_2.classList.remove('box-active-3')
    box_3.classList.remove('box-active-3')
  }
  else if(a == '0' || a == '00' || a == '000'){
    box_1.classList.add('box-active-3')
    box_2.classList.add('box-active-3')
    box_3.classList.add('box-active-3')
    box_1.classList.remove('box-active-2')
    box_2.classList.remove('box-active-2')
    box_3.classList.remove('box-active-2')
    box_1.classList.remove('box-active')
    box_2.classList.remove('box-active')
    box_3.classList.remove('box-active')
  }
  else{
    box_1.classList.add('box-active-2')
    box_2.classList.add('box-active-2')
    box_3.classList.add('box-active-2')
    box_1.classList.remove('box-active')
    box_2.classList.remove('box-active')
    box_1.classList.remove('box-active-3')
    box_2.classList.remove('box-active-3')
    box_3.classList.remove('box-active-3')
    box_3.classList.remove('box-active')
  }
  input.value = ' '
})