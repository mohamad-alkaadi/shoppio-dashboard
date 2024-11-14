import ViewProductsTable from "@/components/products/ViewProductsTable"
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
      <ViewProductsTable />
    </Box>
  )
}

export default page
