import React, { useCallback, useEffect, useState } from "react"

const actionsByKey = (key) => {
    const actions = {
        KeyW: "moveFoward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "dirt",
        Digit2: "glass",
        Digit3: "grass",
        Digit4: "wood",
        Digit5: "log",
    }

    return actions[key]
}

const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    const handleKeyDown = useCallback((e) => {
        const action = actionsByKey(e.code)
        if (action) {
            setActions((prev) => ({ ...prev, [action]: true }))
        }
    }, [])

    const handleKeyUp = useCallback((e) => {
        const action = actionsByKey(e.code)
        if (action) {
            setActions((prev) => ({ ...prev, [action]: false }))
        }
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }
    }, [handleKeyUp, handleKeyDown])

    return actions
}

export default useKeyboard
