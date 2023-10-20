import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "./Brand";


const BrandBox = () => {
   const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch('https://brand-shop-server-zeta.vercel.app/storedItem')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className="max-w-6xl m-auto my-20">
        <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Our Well Known Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
             {
                brands.map(brand => <Brand brand={brand} key={brand._id}></Brand>)
             }   
            </div>
        </div>
    );
};

export default BrandBox;