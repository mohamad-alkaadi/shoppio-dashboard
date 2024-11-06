import { Button } from "@mui/material"
import Link from "next/link"

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex space-x-1">
        <Link href={"/products/view-products"}>
          <Button
            variant="outlined"
            sx={{
              width: 200,
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            view products
          </Button>
        </Link>
        <Link href={"/products/add-product"}>
          <Button
            variant="outlined"
            sx={{
              width: 200,
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            add product
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default page
