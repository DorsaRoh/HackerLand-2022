import React, {useState, useEffect} from 'react'
import {Flex, Image, Heading} from "@chakra-ui/react";

function HandPic({letter}){
    const imageUrl = './images/' + letter + '.png'

    return(
        <Flex alignItems="center" justifyContent="center" h="10%">
            <Image src={imageUrl}/>
        </Flex>
    )
}

export default HandPic
