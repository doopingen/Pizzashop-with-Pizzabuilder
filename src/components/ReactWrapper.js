import React from 'react';
import AppContext from '../context';
import customerState from '../hooks/customer-state';

const AppContainer = ({ children }) => {
  const { addressLine1, addressLine2, city, state, zip, phone, order, pizzaImg, onChange, onSubmit, handlePizzaClick, pizzaOrderStart, addToCart, pendingCost, clearOrder } = customerState();

  return (
    <AppContext.Provider value={{ addressLine1, addressLine2, city, state, zip, phone, order, pizzaImg, onChange, onSubmit, handlePizzaClick, pizzaOrderStart, addToCart, pendingCost, clearOrder }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContainer;