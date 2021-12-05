import { readLines } from "https://deno.land/std@0.89.0/io/mod.ts";
import * as path from "https://deno.land/std@0.89.0/path/mod.ts";

const filename = path.join(Deno.cwd(), "input.txt");
const fileReader = await Deno.open(filename);

let prev = NaN;
let incrementCount = 0;

for await (const line of readLines(fileReader)) {
  if (isNaN(prev)) {
    prev = parseInt(line);
  } else {
    if (prev < parseInt(line)) {
      incrementCount += 1;
    }
    prev = parseInt(line);
  }
}
console.log(incrementCount);
