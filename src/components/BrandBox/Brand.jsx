import { NavLink } from "react-router-dom";

const Brand = ({brand}) => {
    const {_id, brand_name, brand_image} = brand;

    return (
        <div className="card glass">
            <figure><img className="brand_image" src={brand_image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase brand_name">{brand_name}</h2>
                <div className="card-actions justify-start">
                    <NavLink to={`/products/${brand_name}`}><button className="btn btn-primary">Learn now!</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Brand;