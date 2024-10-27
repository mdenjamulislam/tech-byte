import React, { useContext } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Logo from "../assets/TechByte.png";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-product">Add Product</Link>
            </li>
            <li>
                <Link to="/cart">My Cart</Link>
            </li>
        </>
    );

    const handleLogOut = () => {
        logOut()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <header className="p-4 relative">
            <div className="w-full lg:max-w-3xl xl:max-w-5xl mx-auto bg-primary rounded-xl lg:rounded-3xl">
                <div className="navbar px-3 md:px-6 lg:px-10 py-3 lg:py-4 text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <CgMenuLeftAlt className="text-xl" />
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/">
                            <img src={Logo} alt="" className="w-auto h-5 md:h-7" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">Profile</a>
                                    </li>
                                    <li>
                                        <a onClick={handleLogOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="flex items-center gap-2">
                                <MdOutlineLogin />
                                <span>Login</span>
                            </Link>
                        )}
                    </div>
                </div>
                {/* End of the navbar */}
            </div>
        </header>
    );
};

export default Header;
