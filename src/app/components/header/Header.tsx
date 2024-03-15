"use client"
import { LinkValue } from "@/app/types/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LinkProps {
  links: LinkValue[];
}

export default function Header({ links }: LinkProps){
  
  // return (
  //   // <header className="
  //   //     w-screen
  //   //   <nav className="
  //   //       flex justify-between items-center px-6">
  //   //     <ul className="flex gap-12 invisible md:visible">
  //   //       {links.map((link) =>(
  //   //         <li key={link.name}>
  //   //           <Link href={link.href} className="hover:opacity-50 text-2xl font-sans">
  //   //             {link.name}
  //   //           </Link>
  //   //         </li>
  //   //       ))}
  //   //     </ul>
  //   //   </nav>
  //   // </header>
  // );
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <header className="
        w-screen fixed top-0
        py-6 px-2 flex 
        justify-between 
        items-center 
        bg-gray-500
        shadow-slate-500 
        shadow-sm font-body">
        <p>
          <Link href="/" className="text-3xl text-white mx-6 font-sans">
            KASSHII
          </Link>
        </p>

        <nav
          className={
            isOpen
              ? "z-40 bg-slate-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
              : "fixed right-[-100%] md:right-4"
          }
        >
          <ul
            className={
              isOpen
                ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
                : "block md:flex md:gap-8"
            }
          >
            {links.map((link) =>(
            <li key={link.name}>
              <Link onClick={handleMenuClose} href={link.href} className="hover:opacity-50 text-2xl font-sans">
                {link.name}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
        <button className="z-50 space-y-2 px-4 md:hidden" onClick={handleMenuOpen}>
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-slate-950 translate-y-2.5 rotate-45 duration-300"
                : "block w-8 h-0.5 bg-slate-950 duration-300"
            }
          />
          <span
            className={
              isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-slate-950 duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-slate-950 -rotate-45 duration-300"
                : "block w-8 h-0.5 bg-slate-950 duration-300"
            }
          />
      </button>
    </header>
  )
};
