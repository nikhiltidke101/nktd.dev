import React from "react";
import { cva, cx } from "class-variance-authority";

import { Element } from "@/libs/components/atoms/element";

const variants = cva("font-extralight", {
  variants: {
    size: {
      "reg-10": "text-reg-10",
      "reg-12": "text-reg-12",
      "reg-14": "text-reg-14",
      "reg-16": "text-reg-16",
      "reg-20": "text-reg-20",
      "reg-24": "text-reg-24",
      "reg-30": "text-reg-30",
    },
    color: {
      primary: "text-primary",
      tertiary: "text-tertiary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    size: "reg-16",
    color: "primary",
  },
});

export const Text = ({
  tag = "span",
  size,
  color,
  children,
  className,
}: {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  size:
    | "reg-10"
    | "reg-12"
    | "reg-14"
    | "reg-16"
    | "reg-20"
    | "reg-24"
    | "reg-30";
  color: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <Element
      as={tag}
      className={cx(
        variants({
          size,
          color,
        }),
        className
      )}
    >
      {children}
    </Element>
  );
};
