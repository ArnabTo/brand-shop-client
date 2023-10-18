import { useEffect, useState } from "react";
import IntelProducts from "./IntelProducts";

const Intel = () => {

    const [intels, setIntels] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5003/products/intel')
        .then(res => res.json())
        .then(data => setIntels(data))
    },[])
    return (
        <div className="max-w-6xl m-auto">
            <h1 className="text-center text-3xl font-extrabold my-8">Avilable Intel Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    intels.map(intelProducts => <IntelProducts intelProducts={intelProducts} key={intelProducts._id}></IntelProducts>)
                }
            </div>
        </div>
    );
};

export default Intel;