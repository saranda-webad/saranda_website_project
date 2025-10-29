"use client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function AboutSEctionAnimation({
  about_section_id = "about_section_id",
  about_section_inner_id = "about_section_inner_id",
  about_content_container_id = "about_content_container_id",
}) {
  useGSAP(() => {
    const st_vars = {
      trigger: "#" + about_section_id,
      scrub: 1,
      start: `top ${document.innerWidth >= document.innerHeight ? 40 : 80}%`,
      end: "top 15%",
    }

    gsap.matchMedia().add("(min-width: 768px)", () => {
        gsap.from("#" + about_section_inner_id, {
        width: "-=20rem",
        paddingLeft: "-=10rem",
        paddingRight: "-=10rem",
        scrollTrigger: Object(st_vars),
      })
    });
  })

  return null
}