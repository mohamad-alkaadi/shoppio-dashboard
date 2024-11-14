"use client"
import { getAllProducts } from "@/actions/products"
import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const columns: GridColDef<any[number]>[] = [
  { field: "_id", headerName: "ID" },
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
          <Link href={`/${id}`}>EDIT</Link>
          <button>DELETE</button>
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

// const rows = [
//   {
//     id: 1,
//     name: "Frozen yoghurt",
//     seller: "moh",
//     brand: "momo",
//     price: 55,
//     rating: 4.6,
//   },
//   {
//     id: 2,
//     name: "not not Frozen yoghurt",
//     seller: "mohamad",
//     brand: "momo bobo",
//     price: 55,
//     rating: 4.6,
//   },
// ]

// const [products, setProducts] = useState<(typeof any)[]>([])

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const data = await getAllProducts()
//       setProducts(data)
//     } catch (error) {
//       console.error("Error fetching products: ", error)
//     }
//   }
//   fetchData()
// }, [])
