import { useEffect, useState } from "react";
import AppleProducts from "./AppleProducts";

const Apples = () => {
    const [apples, setApples] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5003/products/apple')
            .then(res => res.json())
            .then(data => setApples(data))
    }, [])
    return (
        <div className="max-w-6xl m-auto">
            <h1 className="text-center text-3xl font-extrabold my-8">Avilable Apple Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    apples.map(appleProducts => <AppleProducts appleProducts={appleProducts} key={appleProducts._id}></AppleProducts>)
                }
            </div>
        </div>
    );
};

export default Apples;