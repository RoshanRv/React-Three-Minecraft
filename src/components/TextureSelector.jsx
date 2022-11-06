import React, { useEffect, useState } from "react"
import useKeyboard from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "../images/images"

const images = {
    dirt: dirtImg,
    glass: glassImg,
    grass: grassImg,
    wood: woodImg,
    log: logImg,
}

const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture,
    ])
    const { dirt, glass, grass, wood, log } = useKeyboard()

    useEffect(() => {
        const textureSelectorTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)

        return () => clearTimeout(textureSelectorTimeout)
    }, [activeTexture])

    useEffect(() => {
        const textures = {
            dirt,
            glass,
            grass,
            wood,
            log,
        }

        const currentTexture = Object.entries(textures).find(([k, v]) => v)
        if (currentTexture) {
            setTexture(currentTexture[0])
        }
    }, [setTexture, dirt, glass, grass, wood, log])

    return (
        <>
            {visible && (
                <div className="absolute center texture-selector">
                    {Object.entries(images).map(([key, src]) => (
                        <img
                            src={src}
                            key={key}
                            alt={key}
                            className={`${
                                key === activeTexture && "active"
                            } texture-img `}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default TextureSelector
