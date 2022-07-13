import React, {useState, useEffect, useRef} from 'react'
import Webcam from 'react-webcam'
import { Box, Flex, Button, Divider, Heading, FormControl, FormLabel, Input, Select, Badge} from "@chakra-ui/react";
import Background from './Background'
import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// axios.defaults.baseURL = 'https://sign-easy.herokuapp.com'

const cors = require('cors');


function Practice() {
    const [resultText, setResultText] = useState('')
    const webRef = useRef(null)

    const showImage = async()=>{
        console.log(webRef.current.getScreenshot())

        let data={
          image: webRef.current.getScreenshot().replace("data:image/webp;base64,", "")
        }

        // const response = await fetch("https://sign-easy.herokuapp.com/classify-image", {
        //     method: "POST",
        //     mode: "no-cors",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data),
        // });

        axios.post(`https://cors-anywhere.herokuapp.com/https://sign-easyv4.herokuapp.com/classify-image`, data, {
          headers: {
            "Access-Control-Allow-Credentials":true,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        })
        .then((response)=>{
          console.log(response.data)
          setResultText(response.data[0].letter)
        })

    }


  return (
    <Background>
        <Flex display="flex" w="100%" alignItems="center" flexDirection="column">
          <Heading
            mt="2rem"
            mb = "2rem"
            fontSize={{ base: "xx-large", lg: "xxx-large" }}
            fontWeight = '800'>
            Test Your Sign Language Skills!
          </Heading>

          <Webcam ref={webRef}></Webcam>

          <Button onClick = {showImage}
            mt="2rem"
            colorScheme="blue"
            bgGradient="blue"
            px={10}
            py={6}
            type="submit">
            Take a Picture
          </Button>

          {/* <Input value = {resultText}
              w="70%"
              placeholder="English translation"
              focusBorderColor="black"
              py={10}
              mt="1rem"
              mb="1rem"
            /> */}

          <Heading mt="1rem" mb="1rem">Translated Text: {resultText}</Heading>

        </Flex>

    </Background>
  )
}

export default Practice
