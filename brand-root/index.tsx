import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandRoot() {
  return (
    <>
      <Link className={`flex items-center gap-x-2`} href={`/`}>
        <Image
          src={`/logo.png`}
          alt="Picture of the author"
          width={50}
          height={50}
          className={`w-12 h-12`}
        />
        <div className="flex flex-col leading-tight">
          <span className={`font-thin text-zinc-400`}>ordem dos</span>
          <span className={`text-lg font-bold tracking-widest uppercase`}>
            Livros
          </span>
        </div>
      </Link>
    </>
  );
}
