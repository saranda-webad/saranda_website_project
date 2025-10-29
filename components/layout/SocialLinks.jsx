import Link from "next/link";
import social_links from "./social_links.json";

import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { twJoin } from "tailwind-merge";

export default function SocialLinks({
  icons_size = 26,
  className = "",
  linkClassName = "",
  linkProps = {},
  ...props
}) {
  linkClassName = twJoin(
    `
      relative before:absolute before:-top-1/4 before:-left-1/4
      before:-right-1/4 before:-bottom-1/4 before:bg-secondary/80
      before:-z-1 before:rounded-full before:scale-0 hover:before:scale-100
      before:duration-50
    `,
    linkClassName
  )

  return <div
    {...props}
    className={twJoin(
      `flex md:gap-[1ch] gap-[2ch] *:max-md:scale-120
      *:active:text-secondary`,
      className
    )}
  >
    <Link
      href={social_links["instagram"]}
      target="blank"
      className={linkClassName}
      {...linkProps}
    >
      <FaInstagramSquare size={icons_size}/>
    </Link>
    <Link
      href={social_links["whatsapp"]}
      target="blank"
      className={linkClassName}
      {...linkProps}
    >
      <FaWhatsappSquare size={icons_size}/>
    </Link>
    <Link
      href={social_links["linkedin"]}
      target="blank"
      className={linkClassName}
      {...linkProps}
    >
      <FaLinkedin size={icons_size}/>
    </Link>
    <Link
      href={social_links["youtube"]}
      target="blank"
      className={linkClassName}
      {...linkProps}
    >
      <FaYoutube size={icons_size}/>
    </Link>
  </div>
}