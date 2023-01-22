import React from "react";
import { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react'

export default function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            }
            else {
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>

            {backToTopButton && (
                <button onClick={scrollUp}>
                    <Image src="./up.png" height="25px" width="25px" alt="scroll" position="fixed" bottom="1.5vw" right="2vw" display="flex" justify-content="center" align-items="center"></Image>
                </button>
            )}

        </div>
    )

}