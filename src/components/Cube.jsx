import { useBox } from "@react-three/cannon"
import * as Textures from "../images/textures"

const Cube = ({ pos, texture }) => {
    const [ref] = useBox(() => ({
        type: "Static",
        position: pos,
    }))

    const activeTexture = Textures[texture + "Texture"]

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={activeTexture} attach="material" />
        </mesh>
    )
}

export default Cube
