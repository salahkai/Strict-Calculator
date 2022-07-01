function calculate(arr) {
  let newArr, arr1, arr2, parenthesesArr;
  let result, start, end;
  // Do parentheses calculations first
  if (arr.indexOf("(") !== -1) {
    start = arr.indexOf("(") + 1;
    end = arr.indexOf(")") - 1;
    parenthesesArr = arr.slice(start, end + 1);
    console.log(parenthesesArr, parenthesesArr.length);
    if (parenthesesArr.length == 1) {
      result = parenthesesArr[0];
    } else {
      result = feduce(parenthesesArr);
    }
    arr1 = arr.slice(0, start - 1);
    arr2 = arr.slice(end + 2);
    newArr = [...arr1, result, ...arr2];
    console.log(newArr);
    if (newArr.length == 1) {
      return newArr[0];
    } else {
      // recursion
      return calculate(newArr);
    }
  } else {
    return feduce(arr);
  }
}

function feduce(arr) {
  let newArr, arr1, arr2;
  let result, start;
  // Do × and ÷ calculations first, then + and - calculations.
  if (arr.indexOf(/^√/) !== -1) {
    start = arr.indexOf("√");
  } else if (arr.indexOf("√") !== -1) {
    start = arr.indexOf("√") - 1;
  } else if (arr.indexOf("^") !== -1) {
    start = arr.indexOf("^") - 1;
  } else if (arr.indexOf("×") !== -1) {
    start = arr.indexOf("×") - 1;
  } else if (arr.indexOf("÷") !== -1) {
    start = arr.indexOf("÷") - 1;
  } else {
    start = 0;
  }
  // Calculate.
  switch (arr[start + 1]) {
    case "+":
      result = Number(arr[start]) + Number(arr[start + 2]);
      arr1 = arr.slice(0, start);
      arr2 = arr.slice(start + 3);
      arr1.push(result);
      newArr = arr1.concat(arr2);
      break;
    case "-":
      result = Number(arr[start]) - Number(arr[start + 2]);
      arr1 = arr.slice(0, start);
      arr2 = arr.slice(start + 3);
      arr1.push(result);
      newArr = arr1.concat(arr2);
      break;
    case "×":
      result = Number(arr[start]) * Number(arr[start + 2]);
      arr1 = arr.slice(0, start);
      arr2 = arr.slice(start + 3);
      arr1.push(result);
      newArr = arr1.concat(arr2);
      break;
    case "÷":
      // if divide by 0 it will return 0.
      if (Number(arr[start + 2]) === 0) {
        return null;
      }
      result = Number(arr[start]) / Number(arr[start + 2]);
      arr1 = arr.slice(0, start);
      arr2 = arr.slice(start + 3);
      arr1.push(result);
      newArr = arr1.concat(arr2);
      break;
    case "^":
      result = Math.pow(Number(arr[start]), Number(arr[start + 2]));
      arr1 = arr.slice(0, start);
      arr2 = arr.slice(start + 3);
      arr1.push(result);
      newArr = arr1.concat(arr2);
      break;
    case "√":
      let t = 0;
      if (Number(arr[start + 2]) < 0) {
        return null;
      }
      result = Math.pow(arr[start + 2], 0.5);
      // if a number exist before the square root => do multiplication
      if (start !== -1) {
        if (arr[start].search(/-?\d+[.\d]*/) !== -1) {
          t = -1;
          result = result * arr[start];
        }
      }

      arr1 = arr.slice(0, start + 1 + t);
      arr2 = arr.slice(start + 3);
      arr1.push(result);
      newArr = arr1.concat(arr2);
      break;
  }

  if (newArr.length == 1) {
    return newArr[0];
  } else {
    // recursion ( every time the function is called, an operation is calculated and it will be replaced with it result)
    return feduce(newArr);
  }
}

export default calculate;
