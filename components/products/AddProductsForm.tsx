import { TextField } from "@mui/material"
import React from "react"

async function createProduct(formData: FormData) {
  "use server"

  const addImages = formData.get("additional-images-url")
  const keywords = formData.get("keywords")

  let addImagesTrimmed: string[] = []
  let keywordsTrimmed: string[] = []

  console.log(typeof formData.get("main-image"))

  if (typeof keywords === "string") {
    keywordsTrimmed = keywords.split(",").map((item) => item.trim())
  }
  if (typeof addImages === "string") {
    addImagesTrimmed = addImages.split(",").map((item) => item.trim())
  }

  const data = await fetch("http://127.0.0.1:3000/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      seller: formData.get("seller"),
      brand: formData.get("brand"),
      price: formData.get("price"),
      description: formData.get("description"),
      keywords: keywordsTrimmed,
      mainImageUrl: formData.get("main-image"),
      additionalImagesUrl: addImagesTrimmed,
    }),
  }).then((res) => res.json())
  console.log(data)
  // revalidatePath("/") if we want to refresh after entering submiting data
}

const AddProductsForm = () => {
  return (
    <form action={createProduct} className="flex flex-col">
      <TextField
        required
        name="name"
        id="name"
        label="Name"
        variant="outlined"
      />
      <TextField name="seller" id="seller" label="Seller" variant="outlined" />
      <TextField name="brand" id="brand" label="Brand" variant="outlined" />
      <TextField
        name="price"
        required
        id="price"
        label="Price"
        variant="outlined"
      />
      <TextField
        name="description"
        id="description"
        label="Description"
        variant="outlined"
      />
      <TextField
        name="keywords"
        id="keywords"
        label="Keywords"
        variant="outlined"
      />

      <TextField
        required
        name="main-image"
        id="main-image"
        label="Main Image"
        variant="outlined"
      />
      <TextField
        name="additional-images-url"
        id="additional-images-url"
        label="Additional Images Url"
        variant="outlined"
      />
      <button type="submit">hello</button>
    </form>
  )
}

export default AddProductsForm
