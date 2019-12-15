import { useState } from 'react';

const CustomerState = () => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [order, setOrders] = useState([]);
  const [pizzaImg, setPizzaImg] = useState([]);
  const [pendingCost, setPendingCost] = useState([0]);
  const [pendingOrderToppings, setPendingOrderToppings] = useState([]);

  const onChange = (e) => {
    setCity(e.target.value);
    setState(e.target.value);
    setZip(e.target.value);
    setPhone(e.target.value);
    setAddressLine1(e.target.value);
    setAddressLine2(e.target.value);
  }

  const addToCart = () => {
    let id = order.length;
    setOrders([...order, {toppings: pendingOrderToppings, cost: pendingCost, id: id}]);
    pizzaOrderStart();
    console.log(`Pizza added to cart`)
  }

  const pizzaOrderStart = () => {
    setPendingCost([]);
    setPizzaImg([]);
    setPendingOrderToppings([]);
    setPizzaImg([{img: 'https://res.cloudinary.com/doopingen/image/upload/v1575997724/unit4/pizza-base-optimized_t5y3r0.png'}]);
    setPendingCost([10]);
  }

  const handlePizzaClick = (e, topping) => {
    e.preventDefault();
    setPizzaImg([...pizzaImg, topping]);
    setPendingCost([...pendingCost, topping.cost]);
    setPendingOrderToppings([...pendingOrderToppings, topping.name]);
  }

  const clearOrder = (e, id) => {
    e.preventDefault();
    setOrders(order.filter(pizza => pizza.id !== id));
    console.log(id)
  }

  const removeToppingClick = (arr) => {
    const newArr = [];
    newArr.push([...arr])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setOrders(...order, );
    console.log("Done as well")
  };


  return {
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
    phone,
    order,
    pizzaImg,
    onChange,
    onSubmit,
    handlePizzaClick,
    pizzaOrderStart,
    addToCart,
    pendingCost,
    clearOrder,
  };
};

export default CustomerState;