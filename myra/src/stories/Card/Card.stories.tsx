import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CardProps } from "@material-ui/core";
import { Card } from "../../lib/Card";
import { Typography } from "lib/Typography";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const MyraTemplate: Story<CardProps> = (args) => {
  return <Card {...args} />;
};

export const Example = MyraTemplate.bind({});

Example.args = {
  children: (
    <Typography>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
      exercitationem debitis eligendi, sapiente eaque neque animi asperiores
      autem, delectus repellat impedit similique, reiciendis incidunt doloremque
      commodi consequatur quasi nesciunt!
    </Typography>
  ),
};
