import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Payout from './pages/Payout'
import Refund from './pages/Refund'

function App() {
  const [page, setPage] = useState("payout")
  const handlePage = (pageName) => {
    setPage(pageName)
  }

  return (
    <>
      <Flex w={"100%"} fontFamily={"Inter"}>
        <Box w={"16%"} position={'fixed'} zIndex={3}>
          <Sidebar />
        </Box>
        <Flex w={"100%"}>
          <Box w={"16%"}>

          </Box>
          <Box bgColor={"white"} w={"84%"}>
            <Box bgColor={"white"} w={"84%"} borderBottom={"1px solid #D9D9D9"} position={"fixed"} zIndex={2}>
              <Box px={"32px"}>
                <Navbar />
              </Box>
            </Box>
            <Box px={"32px"} pt={"96px"} pb={"32px"} bgColor={"#FAFAFA"} zIndex={0}>
              {/* {
              page=="payout"?
              <Payout handlePage={handlePage} page={page}/>
              : */}
              <Refund handlePage={handlePage} page={page} />
              {/* } */}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default App
