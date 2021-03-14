import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonProps } from "@material-ui/core";
import { TuiButton } from "lib/Button";

export default {
  title: "Example/Button",
  component: TuiButton,
} as Meta;

const TuiTemplate: Story<ButtonProps> = (args) => (
  <TuiButton {...args}>{args.children}</TuiButton>
);

export const Primary = TuiTemplate.bind({});
Primary.args = {
  children: "Default Button",
};

export const Secondary = TuiTemplate.bind({});
Secondary.args = {
  children: "Secondary Button",
  color: "secondary",
  onClick: () => alert("Clicked !!!"),
  className: "tui--secondary",
};
