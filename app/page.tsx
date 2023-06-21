import React from "react";
import Banner from "@/components/Banner";
import { dignitySections } from "@/constants";
import CardItem from "@/components/CardItem";
import { v4 as getKey } from "uuid";
import FAQ from "@/components/FAQ";
import { FAQList } from "@/constants";

function Home() {
  return (
    <main>
      {/* Hero section */}
      <Banner />

      {/* Card Section */}
      <section className="py-8 md:py-16 ">
        <div className="max-w-screen-2xl  mx-auto bg-[#303446] grid sm:grid-cols-2 xl:grid-cols-4 py-8 md:py-12 xl:py-20">
          {dignitySections.map((item) => (
            <CardItem key={getKey()} {...item} />
          ))}
        </div>
      </section>

      {/* FAQ section */}

      <section className="max-w-screen-2xl mx-auto">
        <h1 className="dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 ">
          Frequently asked questions
        </h1>
        <div
          id="accordion-color"
          data-accordion="collapse"
          data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
          className="flex flex-col gap-4"
        >
          {FAQList.map((item) => (
            <FAQ {...item} key={getKey()} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
