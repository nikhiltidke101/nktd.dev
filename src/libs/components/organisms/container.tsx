import { cx } from "@/utils/misc";
import { cva } from "class-variance-authority";
import React from "react";

const variants = cva("max-w-2xl mx-auto", {
  variants: {
    width: {
      sm: "max-w-xl",
      md: "max-w-2xl",
      lg: "max-w-3xl",
    },
    "padding-y": {
      "reg-4": "py-4",
      "reg-8": "py-8",
      "reg-12": "py-8 md:py-12",
    },
    "padding-x": {
      "reg-4": "px-4",
      "reg-8": "px-8",
      "reg-12": "px-12",
    },
  },
  defaultVariants: {
    width: "md",
    "padding-y": "reg-8",
    "padding-x": "reg-4",
  },
});

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="max-w-2xl mx-auto w-full py-8 md:py-12">
      <div className={cx("w-full min-w-full", className)}>{children}</div>
    </div>
  );
};
