import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TypographyProps } from "@material-ui/core";
import { Typography } from "lib/Typography";

import "./Typography.styles.scss";

export default {
  title: "Components/Typography",
  component: Typography,
} as Meta;

const MyraTemplate: Story<TypographyProps> = (args) => (
  <div className="typography-story">
    <Typography {...args}>{args.children}</Typography>
  </div>
);

export const Default_Text = MyraTemplate.bind({});
Default_Text.args = {
  children: "Default paragraph text",
};

export const Headings = MyraTemplate.bind({});
Headings.args = {
  children: "Heading 1",
  variant: "h1",
};

export const Custom_Class = MyraTemplate.bind({});
Custom_Class.args = {
  children: "Paragraph with custom class name",
  className: "typography-story__custom-class",
};
