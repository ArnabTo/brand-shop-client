import { useEffect, useState } from "react";
import Cart from "./Cart";


const MyCart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-zeta.vercel.app/cartproducts')
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cartProduct.map(cart => <Cart cart={cart} key={cart._id}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;