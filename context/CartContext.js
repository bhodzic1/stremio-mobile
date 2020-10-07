import React, { useState } from 'react';

export const CartContext = React.createContext();


export const CartProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState(""); 

    const addProduct = (product) => {
        if (!products.find(item => item.id === product.id)) {
            setProducts([...products, product])
        } 
    }

    const clearCart = () => {
        setProducts([]);
    }

    const cartLength = () => {
        return products.length;
    }

    const updateQuery = (query) => {
        setQuery(query);
    }


    const cartContextValues = {
        query,
        updateQuery,
        products,
        setProducts,
        addProduct,
        cartLength,
        clearCart
    }

    return (
        <CartContext.Provider value={ cartContextValues }>
            { props.children }
        </CartContext.Provider>
    )
}