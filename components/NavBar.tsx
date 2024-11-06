import { Box } from "@mui/material"
import React from "react"

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: "10px",
        paddingY: "5px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Box>
        {">"}hello {">"} my {">"} friend
      </Box>
      <Box>logout</Box>
    </Box>
  )
}

export default NavBar
