import Link from "next/link"
import { twJoin } from "tailwind-merge"


export default function Button({children, className, ...props}) {
  return <Link
    {...props}
    className={twJoin(
        `bg-neutral-light text-primary rounded-lg px-[0.5rem] py-[0.4rem]
      hover:bg-secondary active:bg-secondary inline-block border-y-2
        border-t-neutral-light-lighter border-b-neutral-light-darker
      hover:border-t-secondary-ligher hover:border-b-secondary-darker`,
        className
    )}
  >
    <button>{children}</button>
  </Link>
}