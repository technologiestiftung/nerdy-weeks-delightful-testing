import React from "react";
import { style } from "../lib/style";
export interface HeadlineProps {
  inputFood?: string;
}
export const Headline: React.FC<{ inputFood?: string }> = ({ inputFood }) => (
  <>
    <div style={style}>
      <h1>The favorite food is</h1>

      {inputFood ? (
        <h2>{inputFood}</h2>
      ) : (
        <h2>
          <div className="spinner" data-testid="spinner"></div>
        </h2>
      )}
    </div>
  </>
);
