"use client"
import { createProduct } from "@/actions/products"
import { Button, TextField } from "@mui/material"
import React, { useRef } from "react"

const AddProductsForm = () => {
  // const [error, setError] = useState<string>("")
  // const nameRef = useRef<HTMLInputElement>(null)
  // const sellerRef = useRef<HTMLInputElement>(null)
  // const brandRef = useRef<HTMLInputElement>(null)
  // const priceRef = useRef<HTMLInputElement>(null)
  // const descriptionRef = useRef<HTMLInputElement>(null)
  // const keywordsRef = useRef<HTMLInputElement>(null)
  // const mainRef = useRef<HTMLInputElement>(null)
  // const additionalRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createProduct(formData)
        formRef.current?.reset()
        // if (
        //   nameRef.current != null &&
        //   sellerRef.current != null &&
        //   brandRef.current != null &&
        //   priceRef.current != null &&
        //   descriptionRef.current != null &&
        //   keywordsRef.current != null &&
        //   mainRef.current != null &&
        //   additionalRef.current != null
        // ) {
        //   nameRef.current.value = ""
        //   sellerRef.current.value = ""
        //   brandRef.current.value = ""
        //   priceRef.current.value = ""
        //   descriptionRef.current.value = ""
        //   keywordsRef.current.value = ""
        //   mainRef.current.value = ""
        //   additionalRef.current.value = ""
        // }
      }}
      className="flex flex-col"
    >
      {/* replace text field with normal inputs and outputs */}
      <TextField
        required
        name="name"
        id="name"
        label="Name"
        variant="outlined"
        // ref={nameRef}
      />
      <TextField
        name="seller"
        id="seller"
        label="Seller"
        variant="outlined"
        // ref={sellerRef}
      />
      <TextField
        name="brand"
        id="brand"
        label="Brand"
        variant="outlined"
        // ref={brandRef}
      />
      <TextField
        name="price"
        required
        id="price"
        label="Price"
        variant="outlined"
        // ref={priceRef}
      />
      <TextField
        name="description"
        id="description"
        label="Description"
        variant="outlined"
        // ref={descriptionRef}
      />
      <TextField
        name="keywords"
        id="keywords"
        label="Keywords"
        variant="outlined"
        // ref={keywordsRef}
      />

      <TextField
        required
        name="main-image"
        id="main-image"
        label="Main Image"
        variant="outlined"
        // ref={mainRef}
      />
      <TextField
        name="additional-images-url"
        id="additional-images-url"
        label="Additional Images Url"
        variant="outlined"
        // ref={additionalRef}
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default AddProductsForm
