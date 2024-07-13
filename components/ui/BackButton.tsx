"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  }

  return <a onClick={handleClick} className="cursor-pointer">
          <img src="/back.svg" width="48px" height="48px" className='absolute invert top-0 left-0 md:left-[-4rem]'/>
        </a>
}

export default BackButton;