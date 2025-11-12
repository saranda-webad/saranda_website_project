"use client"

import lone_tree_img from "@/public/images/lone_tree.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function LoneTreeSlidingAnimation() {
  const treeElem = useRef(null);
  const [rightShifted, setRightShifted] = useState(true);

  useGSAP(() => {
    gsap.utils.toArray("#non_hero_sections_id > section")
    .forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom+=300rem 80%",
        onLeave: () => setRightShifted(prev => !prev),
        onEnterBack: () => setRightShifted(prev => !prev),
      });
    });
  });

  return (
    <div
      className="absolute inset-0 portrait:hidden overflow-x-clip"
    >
      <Image
        src={lone_tree_img}
        alt=""
        sizes="100vw"
        className={twJoin(
          `object-fill w-screen h-screen sticky top-0 duration-1000`,
          rightShifted ? "translate-x-2/5" : "-translate-x-2/5",
        )}
        ref={treeElem}
      ></Image>
    </div>
  )
}