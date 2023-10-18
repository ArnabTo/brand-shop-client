import { useEffect, useState } from "react";
import RyzenProducts from "./RyzenProducts";
const Ryzen = () => {

    const [ryzens, setRyzens] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5003/products/ryzen')
            .then(res => res.json())
            .then(data => setRyzens(data))
    }, [])
    return (
        <div className="max-w-6xl m-auto">
            <h1 className="text-center text-3xl font-extrabold my-8">Avilable Intel Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    ryzens.map(ryzenProducts => <RyzenProducts ryzenProducts={ryzenProducts} key={ryzenProducts._id}></RyzenProducts>)
                }
            </div>
        </div>
    );
};

export default Ryzen;