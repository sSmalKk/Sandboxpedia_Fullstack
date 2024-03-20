import React from "react";

const sizes = {
  xs: "text-[10px] font-medium leading-3",
  lg: "text-[39px] font-normal leading-[46px]",
  s: "text-xs font-normal leading-[15px]",
  xl: "text-5xl font-medium leading-[59px]",
  md: "text-sm font-normal leading-[17px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
