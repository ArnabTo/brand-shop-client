import { Link } from "react-router-dom";
const AppleProducts = ({ appleProducts }) => {

    const { _id, name, brand_name, type, price, rate, brand_image } = appleProducts;
    
    return (
        <div className="card h-[26rem]  bg-base-100 shadow-xl">
            <figure><img src={brand_image} className=" object-contain my-4" alt="Products" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>Price:{price}$</p>
                <p>Ratting: {rate}/5</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{type}</div>
                    <div className="badge badge-outline">{brand_name}</div>
                </div>
                <div className="card-actions justify-start gap-4 mt-2">
                    <Link to={`/products/update/${_id}`}> <button className="btn btn-primary">Update</button></Link>
                    <Link to={`/products/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppleProducts;