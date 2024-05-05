import { ComponentPropsWithoutRef, ElementType } from "react";

export type OmitAndIntersect<T extends object, K extends object> = Omit<
  T,
  keyof K
> &
  K;

export type Elements = Extract<
  ElementType,
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "sup"
  | "sub"
  | "a"
  | "div"
  | "time"
>;

export type ComponentProps<
  T extends object,
  C extends object
> = OmitAndIntersect<T, C>;

export type ElementBaseProps<T extends Elements> = ComponentPropsWithoutRef<T>;

export type ElementPropsCustom<T extends Elements> = {
  ref?: any;
  as?: T;
  children: any;
};

export type ElementProps<T extends Elements> = ComponentProps<
  ElementBaseProps<T>,
  ElementPropsCustom<T>
>;
