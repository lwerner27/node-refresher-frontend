import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

// Component Imports
import Header from "./components/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            newProdTitle: "",
            newProdImgUrl: "",
            newProdPrice: 0,
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

        let products = this.state.products;

        let newProduct = {
            title: this.state.newProdTitle,
            imageUrl: this.state.newProdImgUrl,
            price: this.state.newProdPrice,
        };

        products.push(newProduct);

        this.setState({
            products,
            newProdTite: "",
            newProdImgUrl: "",
            newProdPrice: 0,
        });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header />

                    <Switch>
                        <Route path="/admin/add-product">
                            <AddProduct
                                handleChange={this.handleChange}
                                addProduct={this.addProduct}
                            />
                        </Route>
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
