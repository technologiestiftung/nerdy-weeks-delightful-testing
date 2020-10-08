import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input, InputProps } from "./Input";
import { Button } from "./Button";
export default {
  title: "Components/Input",
  component: Input,
  argTypes: { changeHandler: { action: "change" } },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Input {...args}>{"submit button here"}</Input>
);
const ButtonTemplate: Story<InputProps> = (args) => (
  <Input {...args}>
    <Button
      text="submit"
      clickHandler={(e) => {
        e?.preventDefault();
      }}
    ></Button>
  </Input>
);
export const DefaultInput = Template.bind({});

export const WithButtonInput = ButtonTemplate.bind({});
