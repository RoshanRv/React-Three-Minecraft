import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cubes from "./components/Cubes"
import FPV from "./components/FPV"
import Ground from "./components/Ground"
import Menu from "./components/Menu"
import Player from "./components/Player"
import TextureSelector from "./components/TextureSelector"

function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 10]} />
                <ambientLight intensity={0.5} />
                <FPV />
                <Physics>
                    <Player />
                    <Cubes />
                    <Ground />
                </Physics>
            </Canvas>
            <Menu />
            <TextureSelector />
            <h1 className="center">+</h1>
        </>
    )
}

export default App
