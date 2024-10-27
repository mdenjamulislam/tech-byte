import { MdOutlineLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container hero bg-lightGray min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse items-center gap-6 md:gap-10 xl:gap-16">
                <div className="w-full lg:max-w-lg text-center lg:text-left space-y-4">
                    <h1 className="display">Login now!</h1>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card card-body bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn--primary">
                                <MdOutlineLogin />
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                    <div className="card-actions">
                        <p>
                            Are you new? <Link to="/register">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
