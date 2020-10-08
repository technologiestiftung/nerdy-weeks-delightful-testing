import React from "react";

import { Button } from "./components/Button";
import { Headline } from "./components/Headline";
import { Input } from "./components/Input";
import { Output } from "./components/Output";
import { FruitResponse, getFoods, postFood } from "./lib/requests";

function App() {
  // local state
  const [foods, setFoods] = React.useState<FruitResponse | undefined>(
    undefined
  );
  const [inputFood, setInputFood] = React.useState<string | undefined>(
    undefined
  );

  // handler
  const clickHandler: (event?: React.ChangeEvent<any>) => void = (e) => {
    e?.preventDefault();
    if (inputFood === undefined) {
      return;
    }
    postFood(`/api/foods`, inputFood).then((res) => {
      getFoods(`/api/foods`)
        .then((food) => {
          setFoods(food);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // JSX returns
  return (
    <>
      {/* input */}
      <Headline inputFood={inputFood}></Headline>
      <Input
        changeHandler={(e) => {
          const inVal = e.target.value;
          setInputFood(inVal);
        }}
      >
        <Button text={"Submit"} clickHandler={clickHandler}></Button>
      </Input>
      {/*  headline */}
      {/* output */}
      {foods && <Output foods={foods}></Output>}
    </>
  );
}

export default App;
