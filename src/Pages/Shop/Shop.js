import { useState, useEffect } from 'react';

const Shop = () => {

    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br');
        const items = await data.json();
        console.log(items);
    }

  return (
      <div>
          Shop Page
      </div>
  )
};

export default Shop;
