// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EllipsessvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EllipsessvgIcon(props: EllipsessvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 190"}
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
        <circle cx={"25"} cy={"25"} r={"25"}></circle>

        <circle cx={"25"} cy={"95"} r={"25"}></circle>

        <circle cx={"25"} cy={"165"} r={"25"}></circle>
      </g>
    </svg>
  );
}

export default EllipsessvgIcon;
/* prettier-ignore-end */
