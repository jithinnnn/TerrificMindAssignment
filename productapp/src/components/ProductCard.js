import React from 'react'
import './ProductCard.css';

function ProductCard({products}) {
    
  return (
    <>
       <div className='product-grid'>
        {products.map((i)=>(
            <div key={i.id} className='product-card'>
                <img src={i.image} alt={i.title} className='product-image' />
                <h3 className='product-name'>{i.title.slice(0,22)}</h3>
                <div className='price-div'>
                    <p className='product-price'>${i.price}</p>
                </div>
            </div>
        ))
        }
    
      </div>     
    </>
  )
}

export default ProductCard