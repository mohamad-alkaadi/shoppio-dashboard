"use server"
type Products = {
  _id: string
  name: string
  description: string
  seller: string
  brand: string
  price: number
  priceDiscount: number
  ratingsAverage: number
  ratingsQuantity: number
  keywords: string[]
  mainImageUrl: string
  additionalImagesUrl: string[]
}
async function createProduct(formData: FormData) {
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
  // revalidatePath("/") if we want to refresh after entering submiting data
  console.log(data)
}

async function getAllProducts() {
  const data = await fetch("http://127.0.0.1:3000/api/v1/products")
    .then((res) => res.json())
    .then((data) => data.data.products as Products[])
  return data
}

export { createProduct, getAllProducts }
