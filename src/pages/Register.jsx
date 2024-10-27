import { MdOutlineLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                window.location.href = '/';
            })
            .catch((error) => {
                console.log(error.message);
            });
    };


    return (
        <div className="container hero bg-lightGray min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse items-center gap-6 md:gap-10 xl:gap-16">
                <div className="w-full lg:max-w-lg text-center lg:text-left space-y-4">
                    <h1 className="display">Sign Up now!</h1>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="flex flex-col bg-base-100 w-full max-w-md p-4 lg:p-6 shrink-0 shadow-2xl rounded-2xl xl:rounded-3xl">
                    <form onSubmit={handleRegister} className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn--primary">
                                <MdOutlineLogin />
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </form>
                    <div className="mt-2">
                        <p className="text-sm">
                            Have an accout. <Link to="/login" className="text-accent">Login now.</Link>
                        </p>
                    </div>
                    <div className="divider">sign up with</div>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-2 px-3 md:px-4 py-1.5 border border-primary rounded-xl">
                            <FcGoogle className="text-xl" />
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
