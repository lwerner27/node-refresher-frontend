import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav>
        <div className="nav-wrapper container">
            <ul className="left hide-on-med-and-down" id="nav-mobile">
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/admin/add-product">Add Product</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
