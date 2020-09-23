import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        console.log(product)
        if (!products.find(item => item.id === product.id)) {
            setProducts([...products, product])
        } 
        console.log(products);
    }

    const clearCart = () => {
        setProducts([]);
    }

    const cartContextValues = {
        products,
        setProducts,
        addProduct,
        clearCart
    }

    return (
        <CartContext.Provider value={ cartContextValues }>
            { props.children }
        </CartContext.Provider>
    )
}