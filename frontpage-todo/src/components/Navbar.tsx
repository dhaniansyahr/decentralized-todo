/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";

// ** motion
import { motion } from "framer-motion";

// ** Icons
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  account: any;
}

const Navbar: React.FC<Props> = ({ account }) => {
  return (
    <motion.nav
      className={`xl:px-[25px] md:px-5 shadow shadow-[#57A6A1] px-6 w-full fixed top-0 left-0 right-0 z-[20] flex flex-row items-center justify-between  md:py-4 py-3 transition-colors duration-300 bg-[#344C64]`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="lg:hidden flex">
        <Image
          src="https://nextjs.org/icons/next.svg"
          width={113}
          height={29}
          alt="Brand Logo"
          priority
        />
      </div>
      <button className="lg:hidden flex">
        <Icon icon="ic:round-menu" className="cursor-pointer" width={20} />
      </button>
      <div className="hidden lg:flex flex-row gap-8 items-center">
        <div className="flex flex-row gap-2">
          <Icon icon={"logos:ethereum"} width={30} height={30} />
          <h1 className="text-white font-bold text-xl">DTODO</h1>
        </div>
        {/* <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          width={113}
          height={29}
          alt="Kawan Study"
        /> */}

        <div className="flex gap-8 items-center justify-center text-white">
          <Link href="/features">Apps</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <h1 className="text-base text-white font-normal">{account}</h1>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Icon
          icon="tabler:circle-letter-r"
          className="cursor-pointer"
          width={20}
          color="#FFF"
        />
        <p className="font-bold text-white text-lg">Dhaniansyahr</p>
      </div>
    </motion.nav>
  );
};

export default Navbar;
