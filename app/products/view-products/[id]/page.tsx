"use client"
import { getProduct } from "@/actions/products"
import EditProductPage from "@/components/products/EditProductPage"
import React, { useEffect, useState } from "react"

const Product = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<any[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(id)
        setProduct(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <EditProductPage product={product} />
    </div>
  )
}

export default Product
