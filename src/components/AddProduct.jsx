import React from "react";

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        
        const product = { title, price, brand, category, rating, description };
        console.log(product);
    }
    return (
        <section className="relative overflow-hidden bg-lightGray py-10 md:py-20 lg:py-28 xl:py-36">
            <div className="container">
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="form-control col-span-full md:col-span-2">
                        <label className="label label-text">Title</label>
                        <input type="text" name="title" placeholder="Product title" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-full md:col-span-2">
                        <label className="label label-text">Price</label>
                        <input type="text" name="price" placeholder="Product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label label-text">Brand</label>
                        <select class="select select-bordered w-full" required>
                            <option disabled selected>
                                Select Brand
                            </option>
                            <option>Apple</option>
                            <option>Google</option>
                        </select>
                    </div>
                    <div className="form-control col-span-2 md:col-span-1">
                        <label className="label label-text">Category</label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2 md:col-span-1">
                        <label className="label label-text">Rating</label>
                        <input type="text" name="rating" placeholder="Write 0 to 5" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-full">
                        <label className="label label-text">Descriptions</label>
                        <textarea type="text" name="description" placeholder="Product Descriptions" className="textarea textarea-bordered"></textarea>
                    </div>
                    <div className="form-control col-span-full">
                        <label className="label label-text">Descriptions</label>
                        <input type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="col-span-full flex items-center gap-3 md:gap-4">
                        <button type="reset" className="btn--accent">
                            Reset
                        </button>
                        <button type="submit" className="btn--primary">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;
