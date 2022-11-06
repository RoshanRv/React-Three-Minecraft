import { nanoid } from "nanoid"
import create from "zustand"

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
const setLocalStorage = (key, cubes) =>
    localStorage.setItem(key, JSON.stringify(cubes))

export const useStore = create((set) => ({
    texture: "dirt",
    cubes: getLocalStorage("cubes") || [],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                { key: nanoid(), pos: [x, y, z], texture: prev.texture },
            ],
        }))
    },
    removeCube: (x, y, z) => {
        set((prev) => ({
            cubes: prev.cubes.filter((cube) => {
                const [X, Y, Z] = cube.pos
                return X != x || Y != y || Z != z
            }),
        }))
    },
    setTexture: (texture) => {
        set(() => ({
            texture,
        }))
    },
    saveWorld: () => {
        set((prev) => {
            setLocalStorage("cubes", prev.cubes)
        })
    },

    resetWorld: () => {
        set(() => ({ cubes: [] }))
    },
}))
