import React from "react";
import Field from "./Field";

const FieldBox = ({ items, labels, change, existing }) => {
  return (
    <div>
      {items.map(item => {
        return (
          <Field
            key={item}
            name={item}
            labels={labels}
            change={change}
            existing={existing ? existing[item] : ""}
          />
        );
      })}
    </div>
  );
};

export default FieldBox;
