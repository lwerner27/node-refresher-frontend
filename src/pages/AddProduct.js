import React from "react";

const AddProduct = ({
    handleChange,
    addProduct,
    newProdTitle,
    newProdImgUrl,
    newProdPrice,
    newProdDescription,
}) => (
    <main>
        <form className="product-form">
            <div className="form-control">
                <label htmlFor="newProdTitle">Title</label>
                <input
                    type="text"
                    name="newProdTitle"
                    id="newProdTitle"
                    onChange={handleChange}
                />
            </div>

            <div className="form-control">
                <label htmlFor="newProdImgUrl"> Image URL</label>
                <input
                    type="text"
                    name="newProdImgUrl"
                    id="newProdImgUrl"
                    onChange={handleChange}
                />
            </div>

            <div className="form-control">
                <label htmlFor="newProdPrice">Price</label>
                <input
                    type="number"
                    name="newProdPrice"
                    id="newProdPrice"
                    step="0.01"
                    onChange={handleChange}
                />
            </div>

            <div className="form-control">
                <label htmlFor="newProdDescription">Description</label>
                <textarea
                    name="newProdDescription"
                    id="newProdDescription"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
            </div>

            <button className="btn" type="submit" onClick={addProduct}>
                Add Product
            </button>
        </form>
    </main>
);

export default AddProduct;
