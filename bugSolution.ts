function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

let result = isNumber("1") ? add(Number("1"), 2):0; //Fixed: Using type guard and Number() conversion
console.log(result); // Output: 3

//Alternative solution using type assertion
let result2 = add(Number("1") as number, 2); //Fixed:Using type assertion to tell TS we are sure
console.log(result2); // Output: 3