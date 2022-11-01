import { useBox } from "@react-three/cannon"
import * as Textures from "../images/textures"
import { useStore } from "../hooks/useStore"

const Cube = ({ pos, texture }) => {
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
            onClick={(e) => {
                e.stopPropagation()
                const clickedFace = Math.floor(e.faceIndex / 2)
                console.log(clickedFace)
                const { x, y, z } = ref.current.position
                if (clickedFace === 0) {
                    addCube(x, y + 1, z)
                } else if (clickedFace === 0) {
                    addCube(x, y + 1, z)
                }
            }}
            ref={ref}
        >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={activeTexture} attach="material" />
        </mesh>
    )
}

export default Cube
