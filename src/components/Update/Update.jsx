import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {

    const loadedProdData = useLoaderData();

    const handleAddProducts = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_image = form.photoURL.value;
        const brand_name = form.brandName.value;
        const type = form.productType.value;
        const price = form.price.value;
        const rate = form.ratting.value;

        const updatedProduct = { name, brand_image, brand_name, type, price, rate };

        fetch(`https://brand-shop-server-zeta.vercel.app/products/${loadedProdData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Data Updated Successfuly')
                }
            })
    }
    return (
        <div className="max-w-6xl mx-auto my-8">
            <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Update Information of The Product</h1>
            <form onSubmit={handleAddProducts} className="mx-4 border-[1px] border-black p-8 rounded-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <span>Image</span>
                            <input type="text" name="photoURL" placeholder="Image URL" defaultValue={loadedProdData?.brand_image} className="input input-bordered w-full lg:w-[20rem]" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Product Name" defaultValue={loadedProdData?.name} className="input input-bordered w-full lg:w-[20rem]" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <span>Brand Name</span>
                            <input type="text" name="brandName" placeholder="Brand Name" defaultValue={loadedProdData?.brand_name} className="input input-bordered w-full lg:w-[20rem]" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <span>Type</span>
                            <select className="input input-bordered w-full lg:w-[20rem]" id="cars" name="productType">
                                <option value="phone">Phone</option>
                                <option value="pc">Computer</option>
                                <option value="headphone">Headphone</option>
                                <option value="tv">Televition</option>
                                <option value="watch">Watch</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="number" name="price" placeholder="Price" defaultValue={loadedProdData?.price} className="input input-bordered w-full lg:w-[20rem]" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <label className="input-group">
                            <span>ratting</span>
                            <input type="number" name="ratting" placeholder="Rate Between 0 to 5" defaultValue={loadedProdData?.rate} className="input input-bordered w-full lg:w-[20rem]" />
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary w-full lg:w-[50%] my-8" type="submit">Update</button>
                    </div>

                </div>
            </form>
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

export default Update;