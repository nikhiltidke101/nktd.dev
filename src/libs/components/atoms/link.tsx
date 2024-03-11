import React from "react";
import NextLink from "next/link";
import { cx } from "@/utils/misc";

export const Link = ({
  href,
  className,
  ...props
}: {
  href: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <NextLink
      href={href}
      className={cx(
        "border-b border-b-slate-100/30 hover:border-b-white cursor-pointer transition-colors duration-100 ease-in-out",
        className
      )}
      {...props}
    ></NextLink>
  );
};
