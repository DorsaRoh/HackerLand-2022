import React from 'react'
import Background from './Background'
import { Box, Button, Divider, Heading, ScaleFade } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

function Home() {
  return (
      <Background>
          {/* Box with whole page */}
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            userSelect="none" /* we won't let ppl select cause we're cool kids*/
          >
            {/* First Heading Line */}
            <Heading
              mt="10rem"
              fontSize={{ base: "xx-large", lg: "xxx-large" }}
              fontWeight = '800'
              bg="linear-gradient(89.95deg, #F49696 20.32%, #B596F4 118.37%)"
              bgClip="text"
            >
              WE MAKE LEARNING SIGN LANGUAGE SIMPLE.
            </Heading>

            {/* Second Heading Line */}
            <Heading
              mt="5rem"
              fontSize={{ base: "xx-large", lg: "xxx-large" }}
              fontWeight='900'
              background="linear-gradient(89.95deg, #F49696 -3.89%, #15EEEE 182.75%)"
              bgClip="text"
              letterSpacing="2px"
            >
              FOR EVERYONE.
            </Heading>

            {/* Button */}
            <Button
              rounded="xl"
              color="white"
              fontSize="xl"
              as={RouterLink}
              to="/translator"
              mt={20}
              _hover={{
                filter: "brightness(0.9)",
              }}
              _active={{
                filter: "brightness(1)",
                boxShadow: "0px 0px 5px 2px gray",
                outline: "none !important",
                border: "none !important",
              }}
              px="10"
              py="6"
              bg="linear-gradient(90deg, #F49696 50%, #A696F4 142.26%)"
              boxShadow="0px 4px 5px 0px #0000001A"
            >
              Start Now.
            </Button>
          </Box>
      </Background>
  )
}

export default Home
