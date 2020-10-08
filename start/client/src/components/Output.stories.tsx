import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Output, OutputProps } from "./Output";

export default {
  title: "Components/Output",
  component: Output,
} as Meta;

const Template: Story<OutputProps> = (args) => <Output {...args} />;

export const DefaultOutput = Template.bind({});
DefaultOutput.args = {
  foods: { fruits: { description: "foo", data: ["Dog food"] } },
};
