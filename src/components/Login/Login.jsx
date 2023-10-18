
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { signInUser , signInwithGoogle} = useContext(AuthContext);
    
    const handleGoogleSignin =() =>{
        signInwithGoogle()
        .then(res => {
            console.log(res.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('Successfuly Loged In!')
            })
            .catch(error => {
                toast.error(error.message)

            })

    }
 
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                    Get started today
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                 Login and Stay Connected with Us!   
                </p>

                <form
                    onSubmit={handleLogin}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Log in in to your account</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
                    >
                        Log In
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <Link to="/registration" className="underline mx-2" href="">Sign up</Link>
                    </p>
                    <p className="text-center">
                     or <br/>
                     <button onClick={handleGoogleSignin} className="flex justify-center my-4"><img className="w-[5%]" src="https://i.ibb.co/88FPxMJ/google.png"/></button>
                    </p>
                </form>
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

export default Login;