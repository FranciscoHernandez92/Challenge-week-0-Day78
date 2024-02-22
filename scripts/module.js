export const order = () => {
  const buttonCompleteOrder = document.querySelector('.complete-order');
  const buttonNextOrder = document.querySelector('.next-order');
  const sizePizza = document.querySelector('.size-pizza');
  const kindDough = document.querySelector('.size-dough');
  const finalPizza = document.querySelector('.final-order')
  const checkboxes = document.querySelectorAll('.ingredients-pizza input[type="checkbox"]')

  const initialCheckBox = {}
  checkboxes.forEach((checkbox) => {
    initialCheckBox[checkbox.name] = checkbox.checked
  })

  const onSubmit = (event) => {
    const ingredients = []
    event.preventDefault()
    const selectSize = sizePizza.value
    const selectDough = kindDough.value
    
    checkboxes.forEach((checkbox) => {
       if(checkbox.checked === true){
        ingredients.push(checkbox.value)
    }
     checkbox.checked = initialCheckBox[checkbox.name]
    }) 
     if(ingredients.length >= 1) {
      finalPizza.textContent = ` Tu pizza es de tamaño ${selectDough} con masa ${selectSize} y 
      le pusiste ${ingredients.join(', ')} `
      buttonNextOrder.innerHTML = 'Seguir pidiendo'
      buttonCompleteOrder.innerHTML = 'Terminar pedido'
    }else {
      finalPizza.textContent = 'Debes seleccionar al menos un ingrediente'
    }
    sizePizza.value = sizePizza.options[0].value
    kindDough.value = kindDough.options[0].value
  }
  buttonCompleteOrder.addEventListener('click', onSubmit)
  buttonNextOrder.addEventListener('click', onSubmit)
}
