import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { DividerProps } from "@material-ui/core";
import { Divider } from "../../lib/Divider";

export default {
  title: "Components/Divider",
  component: Divider,
} as Meta;

const MyraTemplate: Story<DividerProps> = (args) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius sunt
        nisi ipsa consequatur illum culpa rerum quasi voluptatem neque,
        reiciendis molestiae sed expedita. Sapiente sed omnis labore veniam
        consequatur.
      </p>
      <Divider {...args} />
    </div>
  );
};

export const Example = MyraTemplate.bind({});

export const Secondary = MyraTemplate.bind({});
Secondary.args = {
  color: "secondary",
  light: true,
};
