import { useState, useEffect } from "react";
import SamaungProducts from "./SamaungProducts";
const Samsung = () => {

    const [samsungs, setSamsungs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5003/products/samsung')
        .then(res => res.json())
        .then(data => setSamsungs(data))
    },[])
    return (
        <div className="max-w-6xl m-auto">
        <h1 className="text-center text-3xl font-extrabold my-8">Avilable Samsung Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {
            samsungs.map(samProducts => <SamaungProducts samProducts={samProducts} key={samProducts._id}></SamaungProducts>)
          }
        </div>
    </div>
    );
};

export default Samsung;