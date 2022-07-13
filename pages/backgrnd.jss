import React from 'react'
import { Box, Button, Divider, Heading, ScaleFade } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

function Background({children}) {
  return (
      <Box pt="4.5rem">
        {/* Heading Part */}
        <Box
          as="nav"
          w="100%"
          h="4.5rem"
          display="flex"
          top="0"
          position="fixed"
          zIndex="999"
          justifyContent="space-around"
          alignItems="center"
          bgColor="#ffffff"
          boxShadow="0 2px 5px -1px gray"
        >
          <Heading
              as={RouterLink}
              to="/"
              cursor="pointer"
              transition="filter 200ms"
              _hover={{
                filter: "brightness(0.9)",
              }}
              userSelect="none"
              bgGradient="linear(to right, purple.300, green.300)"
              bgClip="text"
            >
              sign-easy
          </Heading>

          <Box id="items" d="flex" justifyContent="space-between">
            <Button variant="ghost" as={RouterLink} to="/" mr="4">
              Home
            </Button>
            <Button variant="ghost" as={RouterLink} to="/translator" mr="4">
              Translator
            </Button>
            <Button variant="ghost" as={RouterLink} to="/practice" mr="4">
              Practice
            </Button>
          </Box>

        </Box>

        {/* All the Children (starts 4.5rem below top, so below header) */}
        {children}
      </Box>
    
  )
}

export default Background
