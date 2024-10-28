import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-lightGray py-10 md:py-20 lg:py-28 xl:py-36">
      <div className="container">
        <div className="flex flex-row">
          <div className="w-full space-y-6 lg:space-y-10 xl:w-2/3 2xl:w-1/2 relative z-[1]">
            <div>
              <div className="flex w-2/3 flex-col">
                <h4 className="heading--four divider divider-end divider-warning">
                  Effective Products
                </h4>
              </div>
              <h1 className="display">
                Here is a effective heading with high converting
              </h1>
              <p className="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                quidem laborum eos fugit, consequatur dolores corrupti aperiam
                corporis magni itaque aliquid animi provident quam optio
                explicabo, non dicta earum commodi.
              </p>
            </div>
            <button className="btn--primary">
              <FiShoppingCart />
              <span>Shop Now</span>
            </button>
          </div>
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-accent rounded-full drop-shadow-lg absolute -bottom-20 -right-16"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
