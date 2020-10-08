import React from "react";
import { FruitResponse } from "../lib/requests";
import { style } from "../lib/style";
export interface OutputProps {
  foods: FruitResponse;
}
export const Output: React.FC<{ foods: FruitResponse }> = ({ foods }) => {
  return (
    <>
      <pre style={style}>
        <code>{JSON.stringify(foods, null, 2)}</code>
      </pre>
    </>
  );
};
