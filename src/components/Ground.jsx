import { usePlane } from "@react-three/cannon"
import React from "react"
import { groundTexture } from "../images/textures"
import { useStore } from "../hooks/useStore"

const Ground = () => {
    const [addCube] = useStore((state) => [state.addCube])

    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }))

    groundTexture.repeat.set(100, 100)

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation()
                const [x, y, z] = Object.values(e.point).map((val) =>
                    Math.ceil(val)
                )
                addCube(x, y, z)
            }}
            ref={ref}
        >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )
}

export default Ground
