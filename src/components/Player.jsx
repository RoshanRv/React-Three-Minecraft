import { useSphere } from "@react-three/cannon"
import { useThree, useFrame } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"
import { Vector3 } from "three"
import useKeyboard from "../hooks/useKeyboard"

const JUMP_FORCE = 5

const Player = () => {
    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0],
    }))

    const actions = useKeyboard()

    const pos = useRef([0, 0, 0])
    const velocity = useRef([0, 0, 0])

    useEffect(() => {
        api.position.subscribe((p) => (pos.current = p))
    }, [api.position])

    useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v))
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(
            new Vector3(pos.current[0], pos.current[1], pos.current[2])
        )

        if (actions.jump && Math.abs(velocity.current[1] < 0.0001)) {
            api.velocity.set(
                velocity.current[0],
                JUMP_FORCE,
                velocity.current[2]
            )
        }
    })

    return <mesh ref={ref}></mesh>
}

export default Player
