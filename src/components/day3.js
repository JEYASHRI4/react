import React from 'react'

export default function Coffeeshop() {
    const count=()=>{
        alert("THANK YOU FOR YOUR PURCHASE")
    }
  return (
    <div>
    <h1>WELCOME TO OUR COFFEE SHOP</h1>
    <p>A coffee shop is a kind of restaurant that sells coffee, tea, cakes, and sometimes sandwiches and light meals.</p>
    <h2>COFFEE</h2>
    <ul>Instant Coffee
    </ul>
    <ul>
    Latte
    </ul>
    <ul>Mocha</ul>
    <ul>
    Espresso
    </ul>
    <h2>TEA</h2>
    <ul>Black Tea</ul>
    <ul>Herbal Tea</ul>
    <ul>Green Tea</ul>
    <h3>ENTER THE COUNT OF YOUR ORDERS</h3>
<input type="number"></input>
<button onClick={count}>SUBMIT</button>
    </div>
  )
}
