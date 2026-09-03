"use client";

import React from "react";

export type QuestionItem = {
  question: string;
  answer: string;
};

type QuestionProps = {
  item: QuestionItem;
  opened: boolean;
  onClick: () => void;
  index: number;
};

export default function Question({
  item,
  opened,
  onClick,
  index,
}: QuestionProps) {
  const contentId = `question-content-${index}`;

  return (
    <div className="w-full border-b-2 border-[#333333]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={opened}
        aria-controls={contentId}
        className="
          w-full
          text-left
          p-4 pl-0
          group
        "
      >
        {/* Question header */}
        <div className="flex items-center justify-between gap-6">
          <h4
            className="
              text-lg
              md:text-xl
              font-semibold
              p-2
              md:px-8
              flex-1
            "
          >
            {item.question}
          </h4>

          {/* Icon */}
          <div className="relative shrink-0 mr-4 size-5">
            {/* Plus */}
            <svg
              className={`
                absolute
                inset-0
                size-5
                transition-all
                duration-300
                ease-out
                ${opened ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
              `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>

            {/* Minus */}
            <svg
              className={`
                absolute
                inset-0
                size-5
                transition-all
                duration-300
                ease-out
                ${opened ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
              `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
        </div>

        {/* Answer */}
        <div
          id={contentId}
          className={`
            grid
            transition-[grid-template-rows,opacity,margin]
            duration-400
            ease-out
            ${
              opened
                ? "grid-rows-[1fr] opacity-100 mt-2"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <p
              className="
                w-full
                md:w-3/4
                ml-2
                md:ml-12
                pb-4
                font-normal
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              {item.answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
