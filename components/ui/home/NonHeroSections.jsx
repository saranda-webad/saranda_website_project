import Image from "next/image";
import mist_forest_img from "@/public/images/mist_forest2.png";
import { twJoin } from "tailwind-merge";
import LoneTreeSlidingAnimation from "@/components/gsapanimations/LoneTreeSlidingAnimation";

export default function NonHeroSections({
  className = "",
  children,
  ...props
}) {
  return <>
    <main
      className={twJoin(
        "relative",
        className
      )}
      id="non_hero_sections_id"
      {...props}
    >
      <div
        className="absolute inset-0"
        id="landing_page_bg_container_id"
      >
        <Image
          id="mist_forest_img_id"
          src={mist_forest_img}
          alt=""
          sizes="100vw"
          placeholder="blur"
          className="object-cover w-screen h-screen sticky top-0"
        ></Image>
      </div>
      <LoneTreeSlidingAnimation/>
      {children}
    </main>
  </>
}
