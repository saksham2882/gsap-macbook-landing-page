import { useMediaQuery } from "react-responsive"
import { performanceImages, performanceImgPositions } from "../constants"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Performance = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = useRef(null)

    useGSAP(() => {

        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        // Text animation: fade in and move up as it enters view
        gsap.fromTo(
            sectionRef.current.querySelector(".content p"),
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector(".content p"),
                    start: "top bottom",
                    end: "top center",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            }
        )
        if(isMobile) return;

        // Image positioning timeline
        const t1 = gsap.timeline({
            defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
            scrollTrigger: {
                trigger: sectionEl,
                start: "top bottom",
                end: "center center",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })

        // Position each performance image based on predefined positions
        performanceImgPositions.forEach((item) => {
            if(item.id === "p5") return;           // Skip p5 image for positioning because it is main centered image

            const selector = `.${item.id}`;
            const vars = {};

            if(typeof item.left === "number") vars.left = `${item.left}%`;
            if(typeof item.right === "number") vars.right = `${item.right}%`;
            if(typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

            if(item.transform) vars.transform = item.transform;

            t1.to(selector, vars, 0);
        })
    }, { 
        scope: sectionRef, dependencies: [isMobile] 
    })

  return (
    <section id="performance" ref={sectionRef}>
        <h2>Next-level graphics performance. Game on.</h2>

        <div className="wrapper">
            {performanceImages.map(({ id, src }) => (
                <img 
                    key={id}
                    src={src}
                    className={id}  
                    alt={`Performance image #${id}` }
                />
            ))}
        </div>

        <div className="content">
            <p>
                Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster, so{" "}
                <span className="text-white">
                    gaming feels more immersive and realistic than ever.
                </span>{" "}
                And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.
            </p>
        </div>
    </section>
  )
}
export default Performance