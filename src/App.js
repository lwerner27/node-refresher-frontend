import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

// Page Imports
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";

// Component Imports
import NavBar from "./components/NavBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            newProdTitle: "",
            newProdImgUrl: "",
            newProdPrice: "",
            newProdDescription: "",
        };

        // Method Bindings
        this.handleChange = this.handleChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    // Method for handling input field changes
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // Method for adding product to the products array
    addProduct(event) {
        event.preventDefault();

        let products;

        if (this.state.products) {
            products = this.state.products;
        } else {
            products = [];
        }

        let newProduct = {
            title: this.state.newProdTitle,
            imgUrl: this.state.newProdImgUrl,
            price: this.state.newProdPrice,
            description: this.state.newProdDescription,
        };

        products.push(newProduct);

        this.setState({
            products,
            newProdTite: "",
            newProdImgUrl: "",
            newProdPrice: "",
            newProdDescription: "",
        });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <NavBar />

                    <Switch>
                        {/* Cart Page Route */}
                        <Route path="/cart">
                            <Cart />
                        </Route>

                        {/* Cart Page Route */}
                        <Route path="/orders">
                            <Orders />
                        </Route>

                        {/* Add Product Page Route */}
                        <Route path="/admin/add-product">
                            <AddProduct
                                handleChange={this.handleChange}
                                addProduct={this.addProduct}
                                newProdTitle={this.state.newProdTitle}
                                newProdImgUrl={this.state.newProdImgUrl}
                                newProdPrice={this.state.newProdPrice}
                                newProdDescription={
                                    this.state.newProdDescription
                                }
                            />
                        </Route>

                        {/* Home Page Route */}
                        <Route path="/">
                            <Home products={this.state.products} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
