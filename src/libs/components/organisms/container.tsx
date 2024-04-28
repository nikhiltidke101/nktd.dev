import { cx } from "@/utils/misc";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cx("max-w-2xl px-4 py-8 md:py-12 md:px-16", className)}>
      {children}
    </div>
  );
};
