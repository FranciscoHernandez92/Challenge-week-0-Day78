export const order = () => {
  const formElement = document.querySelector('.form-pizza');
  const buttonCompleteOrder = document.querySelector('.complete-order');
  const buttonNextOrder = document.querySelector('.next-order');

  const onSubmit = (event) => {
    const formElement = event.target;
    const ingredients = [];
    event.preventDefault();

    const selectSize = formElement.elements[0].value;
    const selectDough = formElement.elements[1].value;

    console.log(formElement.elements);
    console.log([...formElement.elements]);

    const checkboxes = [...formElement.elements].filter(
      (item) => item.type === 'checkbox'
    );
    console.log(checkboxes);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        ingredients.push(checkbox.name);
      }
    });

    const pFinalPizza = document.querySelector('.final-order');
    if (ingredients.length >= 1) {
      pFinalPizza.innerHTML = ` Tu pizza es de tamaño ${selectDough} con masa ${selectSize} y 
      le pusiste ${ingredients.join(', ')} `;
      buttonNextOrder.value;
    } else {
      pFinalPizza.innerHTML = `Debes seleccionar al menos un ingrediente`;
    }
  };

  formElement.addEventListener('submit', onSubmit);
  // buttonCompleteOrder.addEventListener("click", onClick);
  // buttonNextOrder.addEventListener("click", onsubmit);
};
