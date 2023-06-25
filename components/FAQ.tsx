import React from "react";
import { FaqListPropType } from "@/types";

function FAQ({ id, title, paragraph }: FaqListPropType) {
  return (
    <div data-aos="fade-up">
      {" "}
      <h2 id={`accordion-color-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-3 font-medium text-left text-gray-500  dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target={`#accordion-color-body-${id}`}
          aria-expanded="false"
          aria-controls={`accordion-color-body-${id}`}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon=""
            className="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-color-body-${id}`}
        className="hidden"
        aria-labelledby={`accordion-color-heading-${id}`}
      >
        <div className="px-6 py-4">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
1;
