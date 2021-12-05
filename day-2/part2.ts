import { readLines } from "https://deno.land/std@0.89.0/io/mod.ts";
import * as path from "https://deno.land/std@0.89.0/path/mod.ts";

const filename = path.join(Deno.cwd(), "input.txt");
// const filename = path.join(Deno.cwd(), "example-input.txt");
const fileReader = await Deno.open(filename);

let position = 0;
let depth = 0;
let aim = 0;

for await (const line of readLines(fileReader)) {
  if (!line) continue;
  const [command, unit] = line.split(" ");
  console.log(`Processing command: ${command}, Unit: ${unit}.`);
  console.log(
    `    Before position: ${position}, depth: ${depth}, aim: ${aim}.`
  );
  if (command === "forward") {
    position += parseInt(unit);
    depth += aim * parseInt(unit);
  }
  if (command === "down") {
    aim += parseInt(unit);
  }
  if (command === "up") {
    aim -= parseInt(unit);
  }
  console.log(`    After position: ${position}, depth: ${depth}, aim: ${aim}.`);
}

console.log(`Euclidean Distance Travelled: ${position * depth}`);
