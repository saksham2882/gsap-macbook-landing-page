import clsx from "clsx";
import useMacBookStore from "../Store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">MacBook Pro {scale}" in {color}</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2e2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2e2e" && "active" )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white" )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white" )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
        <ambientLight intensity={1} />

        <MacbookModel14 scale={0.06} position={[0, 0, 0]} />

        <OrbitControls enableZoom={false}/>
      </Canvas>
    </section>
  );
};
export default ProductViewer;


// NOTE: Above 3D model (jxs component) of MacBook is created by converting models from ./public/models to jsx component using 'gltfjsx' package.
// command used: npx gltfjsx macbook-14.glb -T   -> This command generates a jsx component from the glb model file. (-T flag is used to remove the default texture import)
// above command run in terminal inside the ./public/models folder. (here 'macbook-14.glb' is the model file)
// same way other 3D models can be converted to jsx components for use in the app. Example: macbook-16.glb, iphone-15-pro.glb, etc.