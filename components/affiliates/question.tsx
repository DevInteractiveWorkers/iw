"use client";

import React from "react";
import Icon from "../icon";

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

  // Formats numbers like 1 -> "01", 9 -> "09", 10 -> "10"
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className="w-full border-b border-white">
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
          <span>{formattedIndex}</span>
          <h4 className="text-lg md:text-xl font-medium p-2 flex-1">
            {item.question}
          </h4>

          {/* Icon */}
          <div className="relative shrink-0 mr-4 size-5">
            {/* Plus */}
            <Icon
              icon="plus-01"
              className={`
                absolute
                inset-0
                size-5
                transition-all
                duration-300
                ease-out
                ${opened ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
              `}
            />
            {/* Minus */}
            <Icon
              icon="dash"
              className={`
                absolute
                inset-0
                size-5
                transition-all
                duration-300
                ease-out
                ${opened ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
              `}
            />
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
