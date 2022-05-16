import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div>
            {/* <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div> */}
            <div>
                <div class="card" >
                    <h3  >Product Name :{product.name}</h3>
                    <img class="card-img-top" src={product.image} alt=" "></img>
                    <p >Some quick example text to build on the card title<br></br> and make up the bulk of the card's content.</p>
                    <div>${product.price}</div>
                 </div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    );
}