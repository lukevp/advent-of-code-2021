import { readLines } from "https://deno.land/std@0.89.0/io/mod.ts";
import * as path from "https://deno.land/std@0.89.0/path/mod.ts";

// const filename = path.join(Deno.cwd(), "example-input.txt");
const filename = path.join(Deno.cwd(), "input.txt");
const fileReader = await Deno.open(filename);

const input = [];
for await (const line of readLines(fileReader)) {
  input.push(parseInt(line));
}

let prev = NaN;
let acc = input[0];
const windowSize = 3;
let incCount = 0;
for (let i = 1; i < input.length; i++) {
  prev = acc;
  acc += input[i];

  if (i >= windowSize) {
    acc -= input[i - windowSize];
    if (acc > prev) {
      incCount += 1;
    }
  }
}
console.log(incCount);
