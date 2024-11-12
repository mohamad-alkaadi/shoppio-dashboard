import AddProductsForm from "@/components/products/AddProductsForm"
import { Box } from "@mui/material"

const page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AddProductsForm />
    </Box>
  )
}

export default page
