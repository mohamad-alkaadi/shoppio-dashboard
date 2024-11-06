"use client"
import { Box, Drawer, IconButton } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import LocalMallIcon from "@mui/icons-material/LocalMall"
const SideBar = () => {
  const [open, setOpen] = useState(false)
  const closedWidth = 40
  const openedWidth = 126
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          bgcolor: "#ccc",
          width: !open ? `${closedWidth}px` : `${openedWidth}px`,
          transition: "width 0.5s ease",
        }}
        anchor="left"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={!open ? handleDrawerOpen : handleDrawerClose}
          sx={[{ marginX: "auto" }]}
        >
          {!open ? <MenuIcon /> : <CloseIcon />}
        </IconButton>
        <Link href={"/products"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: !open ? `${closedWidth}px` : `${openedWidth}px`,
              transition: "width 0.5s ease",
            }}
          >
            <LocalMallIcon sx={{ mr: open ? 1 : 0 }} />
            <Box
              sx={{
                display: open ? "block" : "none",
              }}
            >
              Products
            </Box>
          </Box>
        </Link>
      </Drawer>
    </Box>
  )
}

export default SideBar
