import { useState } from 'react';
import { ENGINE_METHOD_ALL } from 'constants';

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
    if (e.target.name === 'Add1'){
      setAddressLine1(e.target.value);
    }
    if (e.target.name === 'Add2'){
      setAddressLine2(e.target.value);
    }
    if (e.target.name === 'City'){
      setCity(e.target.value);
    }
    if (e.target.name === 'State'){
      setState(e.target.value);
    }
    if (e.target.name === 'Zip'){
      setZip(e.target.value);
    }
    if (e.target.name === 'Phone'){
      setPhone(e.target.value);
    }
  }

  const addToCart = () => {
    let id = order.length;
    setOrders([...order, {toppings: pendingOrderToppings, cost: pendingCost, id: id}]);
    pizzaOrderStart();
    console.log(`Pizza added to cart`)
  }

  const addPromoOrder = () => {
    let id = order.length;
    setOrders([...order, {toppings: ['Double Meat', 'Double Cheese'], cost: [22,1,1], id: id}]);
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

  const onSubmit = (e) => {
    e.preventDefault();
    setOrders(...order, );
    console.log("Done submitting")
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
    addPromoOrder,
    pendingCost,
    clearOrder,
  };
};

export default CustomerState;