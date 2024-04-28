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
    <div className={cx("max-w-2xl py-16 px-16", className)}>{children}</div>
  );
};
