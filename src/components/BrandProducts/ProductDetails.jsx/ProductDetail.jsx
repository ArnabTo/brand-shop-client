import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetail = () => {
    const productData = useLoaderData();

    const handleAddtoCart = (prodcut) => {
        fetch('https://brand-shop-server-zeta.vercel.app/cartproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(prodcut)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast.success('Product Successfully added to your Cart')
                }
            })
    }

    return (
        <div className="max-w-6xl mx-auto my-8">
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <div className="flex justify-center"><img src={productData.brand_image} /></div>
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Product Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{productData.name}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Brand Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{productData.brand_name}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Ratting</dt>
                        <dd className="text-gray-700 sm:col-span-2">{productData.rate}/5</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Price</dt>
                        <dd className="text-gray-700 sm:col-span-2">{productData.price}$</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Details</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            {productData.details}
                        </dd>
                    </div>
                </dl>
            </div>
            <button onClick={() => handleAddtoCart(productData)} className="btn btn-primary my-4 mx-4">Add to Cart</button>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer />
        </div>
    );
};

export default ProductDetail;