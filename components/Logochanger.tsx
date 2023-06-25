"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Logochanger() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const matchDarkTheme = window.matchMedia("(prefers-color-scheme:dark)");
    const matchLightTheme = window.matchMedia("(prefers-color-scheme:light)");

    const handleThemeChange = () => {
      if (matchDarkTheme.matches) setDarkTheme(true);
      else if (matchLightTheme.matches) setDarkTheme(false);
    };

    handleThemeChange();

    matchDarkTheme.addEventListener("change", handleThemeChange);
    matchLightTheme.addEventListener("change", handleThemeChange);

    return () => {
      matchDarkTheme.removeEventListener("change", handleThemeChange);
      matchLightTheme.removeEventListener("change", handleThemeChange);
    };
  }, [darkTheme]);

  return (
    <>
      {darkTheme ? (
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo-dark.png"
            width={240}
            height={40}
            className="mr-3 md:w-[240px] object-contain"
            alt="Logo"
          />
        </Link>
      ) : (
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            width={240}
            height={40}
            className="mr-3 md:w-[240px] object-contain"
            alt="Logo"
          />
        </Link>
      )}
    </>
  );
}

export default Logochanger;
