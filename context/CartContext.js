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

    const removeProduct = (product) => {
        setProducts([...products.filter(item => item.id !== product.id)])
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
        removeProduct,
        cartLength,
        clearCart
    }

    return (
        <CartContext.Provider value={ cartContextValues }>
            { props.children }
        </CartContext.Provider>
    )
}