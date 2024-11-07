"use client"
import { Box } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import HomeIcon from "@mui/icons-material/Home"
const NavBar = () => {
  const pathname = usePathname()
  const fileNames = pathname.split("/").filter(Boolean)
  console.log(fileNames)
  let result = ""
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
        {pathname === "/" ? (
          <span>
            <HomeIcon /> {" / "}
          </span>
        ) : (
          <Link href={"/"}>
            <HomeIcon /> {" / "}
          </Link>
        )}
        {fileNames.map((item, index) => {
          result = result.concat("/", item)
          return (
            <>
              <span key={index}>
                {result === pathname ? (
                  <span className="select-none">{item}</span>
                ) : (
                  <Link href={result}>{item}</Link>
                )}
                {" / "}
              </span>
            </>
          )
        })}
      </Box>
      <Box>logout</Box>
    </Box>
  )
}

export default NavBar
