import React from 'react';

const PizzaPreview = (props) => {

  const mappedProgress = props.data.pizzaImg.map((topping) => {

    return (
      <img style={{zIndex: topping.index}} className="pizza-img img-fluid" src={topping.img} alt="pizza" />
    )
  })

  return (
    <div className="pizza-div mx-auto mb-4 mt-4">
      {mappedProgress}
    </div>
  )
}

export default PizzaPreview