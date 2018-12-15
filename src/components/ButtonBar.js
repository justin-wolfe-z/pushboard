import React from "react";
import AppButton from "./AppButton";

const ButtonBar = ({ items, click }) => {
  return (
    <div>
      {items.map(item => {
        return <AppButton key={item} name={item} click={click} />;
      })}
    </div>
  );
};

export default ButtonBar;
