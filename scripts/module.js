export const order = () => {
  const buttonCompleteOrder = document.querySelector('.complete-order');
  const buttonNextOrder = document.querySelector('.next-order');
  const sizePizza = document.querySelector('.size-pizza');
  const kindDough = document.querySelector('.size-dough');
  const finalPizza = document.querySelector('final-order')

  const onSubmit = (event) => {
    const ingredients = []
    event.preventDefault()
    const selectSize = sizePizza.value
    const selectDough = kindDough.value
    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      if(checkbox.checked === true){
        ingredients.push(checkbox.name)
      }
    })
    if(ingredients.length >= 1) {
      result.innerHTML = ` Tu pizza es de tamaño ${selectDough} con masa ${selectSize} y 
      le pusiste ${ingredients.join(', ')} `
      buttonNextOrder.value
    }else {
      result.innerHTML = `Debes seleccionar al menos un ingrediente`
    }
  }
  buttonCompleteOrder.addEventListener('click', onSubmit)
  buttonNextOrder.addEventListener('click', onsubmit)
}
