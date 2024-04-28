import React from "react";
import NextLink from "next/link";
import { cx } from "@/utils/misc";

export const Link = ({
  href,
  className,
  children,
  ...props
}: {
  href?: string;
  className?: string;
  [key: string]: any;
}) => {
  const ComponentToUse = href ? NextLink : "s";

  if (
    href?.startsWith("http") ||
    href?.startsWith("mailto") ||
    href?.startsWith("tel")
  ) {
    return (
      <span className="after:content-['↗'] after:text-reg-12 after:relative after:top-[-0.1em] after:ml-1 hover:text-green-500">
        <ComponentToUse
          href={href}
          target="_blank"
          className={cx(
            `text-primary duration-200 font-light ease-in-out font-news italic border-b-tertiary hover:border-b-green-600 border-b`,
            className
          )}
          {...props}
        >
          {children}
        </ComponentToUse>
      </span>
    );
  }

  return (
    <ComponentToUse
      href={href ?? "/"}
      className={cx(
        "text-primary duration-200 font-light ease-in-out font-news italic border-b-tertiary hover:border-b-green-600 border-b",
        className
      )}
      {...props}
    >
      {children}
    </ComponentToUse>
  );
};
