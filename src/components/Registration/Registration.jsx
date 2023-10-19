import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";


const Registration = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegistration = (event) => {
        event.preventDefault();

        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        
        if (password.length < 6) {
            toast.error("Password length must have to more than 6");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password must have atleast one Capital chracter");
            return;
        } else if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~`|\\/"'=-].*/.test(password)) {
            toast.error("Password must have atleast one Special chracter");
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                toast.success("Congratulation! Your succesfully registered");
                updateUser(displayName, photoURL)
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
                    Complete Registration and Stay with Us
                </p>

                <form onSubmit={handleRegistration} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Name</label>

                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Your Name"
                            />
                        </div>
                    </div>
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
                        <label htmlFor="password" className="sr-only">PhotoURL</label>

                        <div className="relative">
                            <input
                                type="text"
                                name="photoURL"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter photoURL"
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
                        Sign Up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        All Ready a user?
                        <NavLink to="/login" className="underline" href="">Log In</NavLink>
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

export default Registration;