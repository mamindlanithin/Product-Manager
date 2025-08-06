// src/components/ProductList.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext"; // For logout

const ProductList = () => {
  const { products, deleteProduct, setEditingProduct } = useContext(ProductContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 style={{ color: "red", textAlign: "center" }}>Product Manager</h1>
      <button onClick={() => navigate("/add")}>Add Product</button>
      <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{parseFloat(p.price).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => {
                      setEditingProduct(p);
                      navigate("/edit");
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteProduct(p.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
