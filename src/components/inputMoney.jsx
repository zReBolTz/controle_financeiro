import { useState } from "react";
import { NumericFormat, PatternFormat } from "react-number-format";

const InputMoney = () => {
  const [value, setValue] = useState();
  return (
    <NumericFormat
      className="border rounded-md"
      value={value}
      onValueChange={(values) => setValue(values.floatValue)}
      decimalScale={2}
      fixedDecimalScale={true}
      decimalSeparator=","
      prefix="R$ "
      thousandSeparator="."
    />
  );
};

export default InputMoney;
