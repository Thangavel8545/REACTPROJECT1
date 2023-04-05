import React, { useState } from 'react';
import  './Style1.css';

const TABLETS_ITEMS = [
  { name: 'VITLAB M500', price:135 },
  { name: 'DANIOL', price: 58.50},
  { name: 'ASPIRIN', price: 440},
  { name: 'IPCA', price: 270 },
];

const INHALERS_ITEMS = [
  { name: 'FORTCORT 200', price: 400 },
  { name: 'FORGYLN 10', price: 158 },
  { name: 'CIPLA TUBE', price: 235 },
  { name: 'SANFOI CAP 50', price: 350 },
];

const SYRUP_ITEMS= [
  { name: 'BENADRYL', price: 110},
  { name: 'NORVENT', price: 95 },
  { name: 'SEPTILLIN', price: 170 },
  { name: 'CHESTAL', price: 142 },
];

function MenuItem({ name, price, onAddToCart }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>₹{price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

function MenuSection({ title, items, onAddToCart }) {
  return (
    <div id='a1'>
      <h1>{title}</h1>
      {items.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
      <br></br>
    </div>
  );
}

function CartItem({ name, price }) {
  return (
    <div>
      <span>{name}</span>
      <span>₹{price.toFixed(2)}</span>
    </div>
  );
}

function Cart({ items }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {items.map(item => (
        <CartItem key={item.name} name={item.name} price={item.price} />
      )) }<br></br>
      <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
    </div>
  );
}

function Day3() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div id='A'>
   
    
      
      <main>
        <MenuSection title="TABLETS" items={TABLETS_ITEMS} onAddToCart={addToCart} /><br></br><br></br>
        <MenuSection title="INHALERS" items={INHALERS_ITEMS} onAddToCart={addToCart} /><br></br><br></br>
        <MenuSection title="SYRUP" items={SYRUP_ITEMS} onAddToCart={addToCart} /><br></br><br></br>
        <ol><Cart items={cartItems} /></ol>
      </main>
      <button type='Submit'>PROCEED TO BUY</button>
    </div>
  );
}

export default Day3;