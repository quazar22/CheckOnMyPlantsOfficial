import * as React from "react";
import {
  PlasmicWateredButton,
  DefaultWateredButtonProps
} from "./plasmic/copy_of_check_on_my_plants/PlasmicWateredButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface WateredButtonProps extends DefaultWateredButtonProps {}

function WateredButton_(props: WateredButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicWateredButton.useBehavior<WateredButtonProps>(
    props,
    ref
  );
  return <PlasmicWateredButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<WateredButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<WateredButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const WateredButton = React.forwardRef(
  WateredButton_
) as any as ButtonComponentType;

export default Object.assign(WateredButton, {
  __plumeType: "button"
});
