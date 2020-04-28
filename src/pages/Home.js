import React from "react";
import Product from "../components/Product";

const Home = ({ products }) => {
    return (
        <main>
            <Product
                title="The Wolf of Cape Fen"
                imgUrl="http://julianalbrandt.com/wp-content/uploads/The-Wolf-of-Cape-Fen-266x400.jpg"
                price={19.99}
                description="A book written by Juliana Brandt"
            />
        </main>
    );
};

export default Home;
