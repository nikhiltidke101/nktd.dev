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
      <span className="after:content-['↗'] text-tertiary after:text-reg-16 after:relative after:ml-1 after:mb-0 hover:after:text-yellow-500">
        <ComponentToUse
          href={href}
          target="_blank"
          className={cx(
            `text-primary duration-200 font-extralight ease-in-out underline underline-offset-2 decoration-tertiary hover:decoration-yellow-500`,
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
        "text-primary duration-200 font-extralight ease-in-out underline underline-offset-2 decoration-tertiary hover:decoration-yellow-500",
        className
      )}
      {...props}
    >
      {children}
    </ComponentToUse>
  );
};
