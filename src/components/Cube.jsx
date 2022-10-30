import { useBox } from "@react-three/cannon"

const Cube = ({ pos, texture }) => {
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }))

    return <mesh ref={ref}></mesh>
}

export default Cube
