// src/context/ProductContext.js
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Add product
  const addProduct = (product) => {
    const newProduct = { id: Date.now().toString(), ...product };
    setProducts([...products, newProduct]);
  };

  // Update product
  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((p) => (p.id === id ? { id, ...updatedProduct } : p)));
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        editingProduct,
        setEditingProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
