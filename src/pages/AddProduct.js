import React from "react";

const AddProduct = ({ handleChange, addProduct }) => (
    <main>
        <form className="product-form">
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>

            <div className="form-control">
                <label htmlFor="imageUrl"> Image URL</label>
                <input type="text" name="imageUrl" id="imageUrl" />
            </div>

            <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" step="0.01" />
            </div>

            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="5"
                ></textarea>
            </div>

            <button className="btn" type="submit">
                Add Product
            </button>
        </form>
    </main>
);

export default AddProduct;
