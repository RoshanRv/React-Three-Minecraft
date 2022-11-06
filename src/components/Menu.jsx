import React from "react"
import { useStore } from "../hooks/useStore"

const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [
        state.saveWorld,
        state.resetWorld,
    ])

    return (
        <div className="flex absolute menu">
            <button className="btn" onClick={() => saveWorld()}>
                Save
            </button>
            <button className="btn" onClick={() => resetWorld()}>
                Reset
            </button>
        </div>
    )
}

export default Menu
