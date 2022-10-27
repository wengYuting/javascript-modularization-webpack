import owlPic from '../images/owl.png'

export function hello() {
  const el = document.createElement('p')
  el.innerText = 'Hello Owl'
  return el
}

export function owl(){
  const el = document.createElement('img')
  el.src = owlPic

  return el
}
