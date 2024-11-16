"use client"
import { deleteProduct, getAllProducts } from "@/actions/products"
import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const columns: GridColDef<any[number]>[] = [
  { field: "name", headerName: "NAME" },
  { field: "seller", headerName: "SELLER" },
  { field: "brand", headerName: "BRAND" },
  { field: "price", headerName: "PRICE" },
  { field: "rating", headerName: "RATING" },
  {
    field: "actions",
    headerName: "ACTIONS",
    renderCell: (params) => {
      const { id } = params.row
      return (
        <div className="flex space-x-2">
          <Link href={`/products/view-products/${id}`}>EDIT</Link>
          <button
            onClick={() =>
              deleteProduct(id).then(() => window.location.reload())
            }
          >
            DELETE
          </button>
        </div>
      )
    },
  },
]

const ViewProductsTable = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getAllProducts()
        const extractedProducts = allProducts.map((product) => ({
          id: product._id,
          name: product.name,
          seller: product.seller,
          brand: product.brand,
          price: product.price,
          rating: product.ratingsAverage,
        }))
        setProducts(extractedProducts)
      } catch (error) {
        console.error("Error fetching products: ", error)
      }
    }
    fetchData()
  }, [])
  console.log(products)
  return (
    <Box>
      <DataGrid rows={products} columns={columns} />
    </Box>
  )
}

export default ViewProductsTable
