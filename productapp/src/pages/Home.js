import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

function Home() {

    //creating a state to store the data of the api
    const [products,setProducts] = useState([]);

    const getProducts=()=>{
        fetch('https://fakestoreapi.com/products').then(data=>data.json()).then(data=>setProducts(data))  //storing in the data in the state
    }

    useEffect(()=>{
    getProducts()
    },[])

    console.log(products);
    
  return (
    <div>
        <h1 className="heading">Products Page</h1>
        <ProductCard products = {products}></ProductCard>
    </div>
  )
}

export default Home