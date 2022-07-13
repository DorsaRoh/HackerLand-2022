import React, {useState, useEffect} from 'react'
import { Box, Flex, Button, Divider, Heading, FormControl, FormLabel, Input, Select, Badge} from "@chakra-ui/react";
import Background from './Background'
import Word from './Word'
import axios from 'axios'

function Translator() {
  const [inputText, setInputText] = useState('')
  const [resultText, setResultText] = useState('')
  const [language, setLanguage] = useState('')

  const [wordArray, setWordArray] = useState([])

  useEffect(()=>{
    setWordArray(resultText.split(" "))
    console.log(resultText)
    console.log(wordArray)
  }, [resultText])

  function handleSubmit(e){
    e.preventDefault();

    let data = {
      q: inputText,
      source: language,
      target: 'en',
    }

    axios.post(`https://libretranslate.de/translate`, data)
    .then((response)=>{
      setResultText(response.data.translatedText)
    })
  }

  return (
    <Background>
        <Flex display="flex" w="100%" alignItems="center" flexDirection="column">
          <Heading
            mt="3rem"
            mb = "1rem"
            fontSize={{ base: "xx-large", lg: "xxx-large" }}
            fontWeight = '800'>
            Sign Language Translator
          </Heading>

          <Heading
            mb = "1rem"
            fontSize={{ base: "x-large", lg: "x-large" }}
            fontWeight = '600'>
            its simple – enter your text and input language. then submit!
          </Heading>

          <form
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
              <Input onChange={e=>setInputText(e.target.value)}
                placeholder="Type text to translate"
                focusBorderColor="black"
                py={7}
                mb="1rem"
              />

              <Select onChange={e=>setLanguage(e.target.value)}
                focusBorderColor="black"
                placeholder="Select your input language"
                py={7}
                mb="1rem"
              >
                <option value='en'>English</option>
                <option value='es'>Spanish</option>
                <option value='fr'>French</option>
                <option value='hi'>Hindi</option>
                <option value='de'>German</option>
                <option value='ja'>Japanese</option>
                <option value='ko'>Korean</option>
                <option value='ru'>Russian</option>

              </Select>

              <Input value = {resultText}
                placeholder="Result: English translation"
                focusBorderColor="black"
                py={10}
                mb="1rem"
              />

              <Button onClick={handleSubmit}
                mt="2rem"
                mb="0.5rem"
                colorScheme="blue"
                bgGradient="blue"
                px={10}
                py={6}
                type="submit"
              >
                Submit
              </Button>

          </form>
        </Flex>

        <Flex
          flexDirection="column"
        >
          {wordArray.map((word)=>{
            return <Word word={word}></Word>
          })}
        </Flex>

    </Background>
  )
}

export default Translator
