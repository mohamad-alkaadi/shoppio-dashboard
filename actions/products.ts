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

const splitStrings = (text: string) => {
  let TrimmedText: string[] = []
  console.log("before:", text)

  // if (typeof TrimmedText === "string") {
  TrimmedText = text.split(",").map((item) => item.trim())
  console.log("after:", TrimmedText)

  return TrimmedText
  // }
  // return
}

async function createProduct(formData: FormData) {
  const addImages = formData.get("additional-images-url")
  const keywords = formData.get("keywords")

  // let addImagesTrimmed: string[] = []
  // let keywordsTrimmed: string[] = []

  // console.log(typeof formData.get("main-image"))

  // if (typeof keywords === "string") {
  //   keywordsTrimmed = keywords.split(",").map((item) => item.trim())
  // }
  // if (typeof addImages === "string") {
  //   addImagesTrimmed = addImages.split(",").map((item) => item.trim())
  // }

  const addImagesTrimmed = splitStrings(addImages as string)

  const keywordsTrimmed = splitStrings(keywords as string)
  // const keywordsTrimmed = splitStrings(keywords)

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

async function editProduct(formData: FormData, id: string) {
  const addImages = formData.get("additional-images-url")
  const keywords = formData.get("keywords")

  const addImagesTrimmed = splitStrings(addImages as string)

  const keywordsTrimmed = splitStrings(keywords as string)
  // const keywordsTrimmed = splitStrings(keywords)

  const response = await fetch(`http://127.0.0.1:3000/api/v1/products/${id}`, {
    method: "PATCH",
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
  })
  // revalidatePath("/") if we want to refresh after entering submiting data
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  console.log(data)
}

async function getAllProducts() {
  const data = await fetch("http://127.0.0.1:3000/api/v1/products")
    .then((res) => res.json())
    .then((data) => data.data.products as Products[])
  return data
}

async function deleteProduct(id: string) {
  try {
    await fetch(`http://127.0.0.1:3000/api/v1/products/${id}`, {
      method: "DELETE",
    })
    return true
  } catch (error) {
    console.log("error deleting product:", error)
    return false
  }
}
async function getProduct(id: string) {
  try {
    const data = await fetch(`http://127.0.0.1:3000/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => data.data.product as Products[])

    return data
  } catch (error) {
    console.log("error getting product:", error)
  }
}

export { createProduct, editProduct, getAllProducts, getProduct, deleteProduct }
