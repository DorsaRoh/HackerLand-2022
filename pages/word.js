import React, {useState, useEffect} from 'react'
import { Box, Flex, Button, Divider, Heading, FormControl, FormLabel, Input, Select, Badge} from "@chakra-ui/react";
import HandPic from './HandPic'

function Word({word}){
    const letterArray = word.split('')

    return(
        <Flex alignItems="center" justifyContent="center" w="100%">
            <Heading padding="50">{word}</Heading>
            {letterArray.map((letter)=>{
                return <HandPic letter={letter}></HandPic>
            })}
        </Flex>
    )
}

export default Word
