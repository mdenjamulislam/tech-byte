import "../app.css";
import { Link } from "react-router-dom";
import Logo from "../assets/TechByte.png";
import { FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-cover bg-center bg-no-repeat">
            <div className="bg-overlay py-6 md:py-10 lg:py-14 xl:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                        <div className="space-y-5">
                            <img src={Logo} alt="" />
                            <div className="flex items-center gap-3">
                                <Link className="social-icon">
                                    <FaFacebookF />
                                </Link>
                                <Link className="social-icon">
                                    <FaXTwitter />
                                </Link>
                                <Link className="social-icon">
                                    <FaInstagram />
                                </Link>
                                <Link className="social-icon">
                                    <FaPinterestP />
                                </Link>
                            </div>
                            <p className="text-white">@ 2024 TechByte. All Rights Reserved.</p>
                        </div>

                        <div className="space-y-5">
                            <h4 className="heading--five text-white">Get to Know Us</h4>
                            {/* menu here */}
                        </div>
                        <div className="space-y-5">
                            <h4 className="heading--five text-white">Important</h4>
                            {/* menu here */}
                        </div>
                        <div className="space-y-5">
                            <h4 className="heading--five text-white">Contact Us</h4>
                            <div className="space-y-3">
                                <Link to="tel:01987000000" className="flex items-center gap-2 text-white">
                                    <FiPhone className="text-lg md:text-xl" />
                                    <span>01987000000</span>
                                </Link>
                                <Link to="mailto:enjamul.cse@gmail.com" className="flex items-center gap-2 text-white">
                                    <MdOutlineEmail className="text-lg md:text-xl" />
                                    <span>enjamul.cse@gmail.com</span>
                                </Link>
                                <Link className="flex items-center gap-2 text-white">
                                    <IoLocationOutline className="text-lg md:text-xl" />
                                    <span>Khulna Banglaesh</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <div className="py-5 lg:py-6 bg-overlay border-t border-gray-400">
                <div className="container flex flex-col items-center gap-3 md:flex-row justify-center md:justify-between">
                    <div className="flex items-center gap-1.5">
                        <SiVisa className="text-xl text-white md:text-2xl" />
                        <RiMastercardLine className="text-xl text-white md:text-2xl" />
                        <FaGooglePay className="text-xl text-white md:text-2xl" />
                    </div>
                    <ul className="flex items-center gap-3 text-white">
                        <li>
                            <Link >Privacy Policy</Link>
                        </li>
                        <li>
                            <Link >Refund Policy</Link>
                        </li>
                        <li>
                            <Link >Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
