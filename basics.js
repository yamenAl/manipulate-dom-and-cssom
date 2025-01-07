console.log('workie') // console is een #object met een log #function

const button = document.querySelector('button') // sla het button element (object) op in een variable (binding)

button.addEventListener('click', moveParagraph) // javascript werkt met dot-notation, buttonPressed is een callback function

function moveParagraph () {
  // select paragpraph
  const p = document.querySelector('p')

  // add class to paragraph
  p.classList.toggle('moveit')

  // change custom property setting the opacity
  p.style.setProperty('--opa', 1)

}


// conventions
// use a named callback function instead of a anymous function
// use meaningful names for variables and functions
// never set styling directly from javascript, pass values through a custom property 
// always use a button to trigger an action
// follow the same order in JavaScripot as in HTML