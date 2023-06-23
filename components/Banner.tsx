import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="max-w-screen-xl mx-auto mt-20  flex max-lg:flex-col items-center">
          <Image
            src="/platform.png"
            width={500}
            height={500}
            className="w-full h-full object-contain"
            alt="banner"
          />
          <div className="py-8 px-4 lg:py-16 md:mt-16 lg:px-12 w-full">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Innovative platform for smart investments
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
              Algo Crab: Advanced algo trading platform for stocks and
              commodities. 15+ profitable strategies, seamless integration,
              custom development. Trade with Angel Broking, Alice Blue, Fyers,
              and more.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row  sm:space-y-0 sm:space-x-4">
              <Link
                href="/signup"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Registration
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
