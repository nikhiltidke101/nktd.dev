import React, { forwardRef } from "react";
import { ElementProps, Elements } from "./element.types";

export const Element = forwardRef(
  <T extends Elements>(
    { as = "span" as T, children, ...rest }: ElementProps<T>,
    ref: React.Ref<HTMLElement>
  ) => {
    return React.createElement(as, { ...rest, ref }, children);
  }
);

Element.displayName = "Element";
