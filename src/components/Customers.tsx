import React from 'react';
import './css/Customers.css';
import CustomerCard from './subcomponents/CustomerCard';

function Customers(props: {}) {
  const customers: {name: string, imgSrc: string, desc: string}[] = [
    {name: "Tabby", imgSrc:"customers/cat1.webp", desc: "Tabby is a loving black cat that always begs for attention."},
    {name: "Stabby", imgSrc: "customers/cat2.webp", desc: "Stabby likes to pull out her claws, but is a loving kitten."},
  ];

  let cards = customers.map((cust)=>{
    return <CustomerCard key={cust.name} name={cust.name} imgSrc={cust.imgSrc} desc={cust.desc}/>
  });

  return (
    <div className="Customers">
      <div className="Cards">
        {cards}
      </div>
    </div>
  );
}

export default Customers;
