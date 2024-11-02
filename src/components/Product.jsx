import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { title, price, brand, category, rating, description, photo } = product;
    console.log(photo);
    return (
        <div className="rounded-2xl bg-lightGray p-4 md:p-5 lg:rounded-3xl lg:p-6 space-y-4 group">
            <div>
                <img src={photo} alt={title} />
            </div>
            <div className="flex items-center justify-between gap-3">
                <h4 className="text-base lg:text-lg font-medium text-primary line-clamp-1 group-hover:text-accent transition-all duration-200">{title}</h4>
                <div className="flex items-center gap-1">
                    <FaRegStar className="text-base text-accent" />
                    <span className="text-sm text-textColor">{rating}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 text-xs md:text-sm">
                <p>{brand}</p>
                <p>{ category}</p>
            </div>
            <div className="flex items-center justify-between pt-3 ">
                <p className="heading--five">Tk {price}</p>
                <Link className="btn--accent">Details</Link>
            </div>
        </div>
    );
};

export default Product;
