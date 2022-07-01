import calculate from "./Calculate";

export const checkInputString = (value, stringEquation) => {
  let openParenthese =
    stringEquation.match(/[(]/g) === null
      ? 0
      : stringEquation.match(/[(]/g).length;
  let closeParenthese =
    stringEquation.match(/[)]/g) === null
      ? 0
      : stringEquation.match(/[)]/g).length;
  let parentheseSum = openParenthese - closeParenthese;

  if (
    (value == ")" && parentheseSum <= 0) ||
    (/[(^.+×÷-]$/.test(stringEquation) && /[).^+×÷]/.test(value)) ||
    // only "-" operator can be inserted after another operator
    (/([().+×÷√]-)$|(--)$/.test(stringEquation) && /[-]/.test(value)) ||
    // no inserting operators at the beginning
    (stringEquation === "" && /[).+×÷^]/.test(value)) ||
    // you can insert "-" at the beginning
    (stringEquation === "-" && /[-]/.test(value)) ||
    // no inserting π twice, or a number or a point after π.
    (/[π]$|(Ans)$/.test(stringEquation) && /[π\d.]|(Ans)/.test(value)) ||
    // no inserting "(" after number,π and ans
    (/[/dπ]$|(Ans)$/.test(stringEquation) && /[(]/.test(value)) ||
    // no inserting point "." twice, and no inserting π after a number or a point "."
    (/[√]/.test(stringEquation) && /[√^]/.test(value)) ||
    (/[/d.]$/.test(stringEquation) && /[π]|(Ans)/.test(value))
  )
    return true;
};

export const deleteString = (stringEquation) => {
  if (stringEquation.match(/s$/)) {
    //Delete "Ans" by removing 3 characters
    return stringEquation.replace(/.$/, "").replace(/.$/, "").replace(/.$/, "");
  } else {
    return stringEquation.replace(/.$/, "");
  }
};

export const replaceNames = (stringEquation, equationResult) => {
  return (
    stringEquation
      .replace("π", Math.PI) // replace π string to it real value.
      .replace("Ans", equationResult)
      // split string into an array that contain numbers and operators.
      .match(/^-\d+[.\d]*|(?<=\d)-|[)(]|[(^)√π+×÷]|[-](?=[-])|-?\d+[.\d]*/g)
  );
};
export const beforeCalculate = (stringEquation, arrayInput) => {
  if (
    // if the last input is an operator, or the input is only one number = return null
    arrayInput[arrayInput.length - 1].search(/[-+×÷]$/) !== -1 ||
    arrayInput.length == 1
  )
    return null;
  else if (stringEquation === "π" || stringEquation === "Ans")
    return arrayInput[0];
  else return calculate(arrayInput);
  2;
};
