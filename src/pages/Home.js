import React from "react";
import Product from "../components/Product";

const Home = ({ products }) => {
    let content;
    if (products) {
        content = products.map((prod) => (
            <Product
                title={prod.title}
                imgUrl={prod.imgUrl}
                price={prod.price}
                description={prod.description}
                id={prod.id}
            />
        ));
        return content;
    } else {
        content = <h1>There are no products to display.</h1>;
    }

    return <main>{content}</main>;
};

export default Home;
