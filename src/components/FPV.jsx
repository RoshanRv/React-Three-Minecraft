import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const FPV = () => {
    const { camera, gl } = useThree()

    return <PointerLockControls args={[camera, gl]} />
}

export default FPV
