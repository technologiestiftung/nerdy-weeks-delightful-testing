import React from "react";

export interface ButtonProps {
  clickHandler: (event?: React.ChangeEvent<any>) => void;
  text: string;
}
export const Button: React.FC<ButtonProps> = ({ clickHandler, text }) => {
  return (
    <>
      <button onClick={clickHandler}>{text}</button>
    </>
  );
};
