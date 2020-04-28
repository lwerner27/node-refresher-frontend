import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, imgUrl, price, description }) => {
    return (
        <div className="grid">
            <article className="card product-item">
                <header className="card__header">
                    <h1 className="product__title">{title}</h1>
                </header>
                <div className="card__image">
                    <img src={imgUrl} alt="Product" />
                </div>
                <div className="card__content">
                    <h2 className="product__price">{price}</h2>
                    <p className="product__description">{description}</p>
                </div>
                <div className="card__actions">
                    <Link to={`/product-details/${id}`} className="btn">
                        Details
                    </Link>
                    <form>
                        <button className="btn">Add to Cart</button>
                        <input type="hidden" name="productId" value={id} />
                    </form>
                </div>
            </article>
        </div>
    );
};

export default Product;
