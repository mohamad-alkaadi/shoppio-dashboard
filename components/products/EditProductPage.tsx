import { editProduct } from "@/actions/products"
import React from "react"

const EditProductPage = ({ product }: { product: any }) => {
  return (
    <form
      action={async (formData) => {
        await editProduct(formData, product._id)
      }}
    >
      <div className="flex space-x-2">
        <label htmlFor="name">Name</label>
        <input
          className="border-black border-2"
          name="name"
          id="name"
          defaultValue={product.name}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="description">Description</label>
        <input
          className="border-black border-2"
          name="description"
          id="description"
          defaultValue={product.description}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="keywords">Keywords</label>
        <input
          className="border-black border-2"
          name="keywords"
          id="keywords"
          defaultValue={product.keywords}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="additional-images-url">Additional Images Url</label>
        <input
          className="border-black border-2"
          name="additional-images-url"
          id="additional-images-url"
          defaultValue={product.additionalImagesUrl}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="seller">Seller</label>
        <input
          className="border-black border-2"
          name="seller"
          id="seller"
          defaultValue={product.seller}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="seller">Brand</label>
        <input
          className="border-black border-2"
          name="brand"
          id="brand"
          defaultValue={product.brand}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="price">Price</label>
        <input
          className="border-black border-2"
          name="price"
          id="price"
          defaultValue={product.price}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="main-image">Main Image Url</label>
        <input
          className="border-black border-2"
          name="main-image"
          id="main-image"
          defaultValue={product.mainImageUrl}
        />
      </div>
      <div className="flex space-x-2">
        <p>Ratings Average:</p>
        <p>{product.ratingsAverage}</p>
      </div>
      <div className="flex space-x-2">
        <p>Ratings Quantity:</p>
        <p>{product.ratingsQuantity}</p>
      </div>
      <button className="border-2 border-black" type="submit">
        Submit
      </button>
    </form>
  )
}

export default EditProductPage
