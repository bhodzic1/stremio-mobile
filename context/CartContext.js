import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        products.push(product);
    }

    const cartContextValues = {
        products,
        setProducts,
        addProduct
    }

    return (
        <CartContext.Provider value={ cartContextValues }>
            { props.children }
        </CartContext.Provider>
    )
}