import { useBox } from "@react-three/cannon"
import * as Textures from "../images/textures"
import { useStore } from "../hooks/useStore"
import { useState } from "react"

const Cube = ({ pos, texture }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [addCube, removeCube] = useStore((state) => [
        state.addCube,
        state.removeCube,
    ])
    const [ref] = useBox(() => ({
        type: "Static",
        position: pos,
    }))

    const activeTexture = Textures[texture + "Texture"]

    return (
        <mesh
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHovered(false)
            }}
            onClick={(e) => {
                //...
                e.stopPropagation()
                const clickedFace = Math.floor(e.faceIndex / 2)
                console.log(clickedFace)
                const { x, y, z } = ref.current.position
                if (e.altKey) {
                    removeCube(x, y, z)
                    return
                } else if (clickedFace === 0) {
                    addCube(x + 1, y, z)
                    return
                } else if (clickedFace === 1) {
                    addCube(x - 1, y, z)
                    return
                } else if (clickedFace === 2) {
                    addCube(x, y + 1, z)
                    return
                } else if (clickedFace === 3) {
                    addCube(x, y - 1, z)
                    return
                } else if (clickedFace === 4) {
                    addCube(x, y, z + 1)
                    return
                } else if (clickedFace === 5) {
                    addCube(x, y, z - 1)
                    return
                }
            }}
            ref={ref}
        >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial
                map={activeTexture}
                color={isHovered ? "grey" : "white"}
                attach="material"
            />
        </mesh>
    )
}

export default Cube
