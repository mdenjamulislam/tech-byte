import React from 'react';

const AddBrand = () => {

    const handleAddBrand = (e) => {
        e.preventDefault();

        const form = e.target;
        const brand_name = form.name.value;
        const brand_desc = form.description.value;
        // const brand_icon = form.

        const brand = { brand_name, brand_desc };
        console.log(brand);

    }
    return (
        <section className="relative overflow-hidden bg-lightGray py-10 md:py-20 lg:py-28 xl:py-36">
            <div className="container lg:max-w-xl">
                <form onSubmit={handleAddBrand} className="space-y-3 md:space-y-4">
                    <div className="form-control">
                        <label className="label label-text">Brand Name</label>
                        <input type="text" name="name" placeholder="Brand name" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-full">
                        <label className="label label-text">Descriptions</label>
                        <textarea type="text" name="description" placeholder="Product Descriptions" className="textarea textarea-bordered"></textarea>
                    </div>
                    <div className="form-control col-span-full">
                        <label className="label label-text">Brand Icon</label>
                        <input type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="col-span-full flex items-center gap-3 md:gap-4">
                        <button type="submit" className="btn--primary">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddBrand;