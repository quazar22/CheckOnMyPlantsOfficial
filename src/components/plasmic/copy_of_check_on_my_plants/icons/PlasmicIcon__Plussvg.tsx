// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlussvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlussvgIcon(props: PlussvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 300 300"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"} fillRule={"evenodd"}>
        <path d={"M125 0h50v300h-50z"}></path>

        <path d={"M300 125v50H0v-50z"}></path>
      </g>
    </svg>
  );
}

export default PlussvgIcon;
/* prettier-ignore-end */
