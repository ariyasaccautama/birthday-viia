"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SceneHero from "./SceneHero";
import SceneGallery from "./SceneGallery";
import SceneWish from "./SceneWish";
import SceneEnding from "./SceneEnding";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=5000",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "500vh",
      }}
    >
      <div className="flex w-[400vw] h-screen">
        <SceneHero />
        <SceneGallery />
        <SceneWish />
        <SceneEnding />
      </div>
    </div>
  );
}