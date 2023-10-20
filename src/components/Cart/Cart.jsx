import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart }) => {
    const {_id, name, brand_image, price, type, brand_name } = cart;
 
    const handleRemove =_id=>{
        console.log(_id)
        fetch(`https://brand-shop-server-zeta.vercel.app/cartproducts/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Item Removed Successfully')
            }
        })
    }

    return (
        <div className="card card-compact h-[20rem] bg-base-100 shadow-xl">
            <figure><img className=" object-contain h-[10rem]" src={brand_image} alt="Shoes" /></figure>
            <div className="p-4">
                <h1 className="font-bold my-2">{name}</h1> 
                <h1 className="my-2">Brand:{brand_name}</h1> 
                <p className="my-2">Price: {price}$</p>
                <button onClick={()=> handleRemove(_id)} className="btn btn-primary">Remove</button>
            </div>
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

export default Cart;