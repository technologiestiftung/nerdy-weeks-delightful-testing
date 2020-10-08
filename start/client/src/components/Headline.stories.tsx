import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Headline, HeadlineProps } from "./Headline";

export default {
  title: "Components/Headline",
  component: Headline,
} as Meta;

const Template: Story<HeadlineProps> = (args) => (
  <Headline {...args}></Headline>
);

export const DefaultHeadline = Template.bind({});
DefaultHeadline.args = { inputFood: "Dog Food" };

export const SpinnerHeadline = Template.bind({});
SpinnerHeadline.args = {};
