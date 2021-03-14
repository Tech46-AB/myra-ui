import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonProps } from "@material-ui/core";
import { Button } from "lib/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const MyraTemplate: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = MyraTemplate.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Secondary = MyraTemplate.bind({});
Secondary.args = {
  children: "Secondary Button",
  color: "secondary",
  onClick: () => alert("Clicked !!!"),
  className: "myra--secondary",
};
