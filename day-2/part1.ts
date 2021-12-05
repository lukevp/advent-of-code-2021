import { readLines } from "https://deno.land/std@0.89.0/io/mod.ts";
import * as path from "https://deno.land/std@0.89.0/path/mod.ts";

const filename = path.join(Deno.cwd(), "input.txt");
// const filename = path.join(Deno.cwd(), "example-input.txt");
const fileReader = await Deno.open(filename);

let position = 0;
let depth = 0;

for await (const line of readLines(fileReader)) {
  if (!line) continue;
  const [command, unit] = line.split(" ");
  console.log(`Processing command: ${command}, Unit: ${unit}.`);
  console.log(`    Before position: ${position}, depth: ${depth}.`);
  if (command === "forward") {
    position += parseInt(unit);
  }
  if (command === "down") {
    depth += parseInt(unit);
  }
  if (command === "up") {
    depth -= parseInt(unit);
  }
  console.log(`    After position: ${position}, depth: ${depth}.`);
}

console.log(`Euclidean Distance Travelled: ${position * depth}`);
