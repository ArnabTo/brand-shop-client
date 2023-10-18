import { useState, useEffect } from "react";
import NvidiaProducts from "./NvidiaProducts";
const Nvidia = () => {
    const [nvidias, setNvidias] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5003/products/ryzen')
        .then(res => res.json())
        .then(data => setNvidias(data))
    },[])
    return (
        <div className="max-w-6xl m-auto">
        <h1 className="text-center text-3xl font-extrabold my-8">Avilable Intel Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
            {
                nvidias.map(nvidiaProducts => <NvidiaProducts nvidiaProducts={nvidiaProducts} key={nvidiaProducts._id}></NvidiaProducts>)
            }
        </div>
    </div>
    );
};

export default Nvidia;