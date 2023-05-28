import { readLines } from "https://deno.land/std@0.89.0/io/mod.ts";
import * as path from "https://deno.land/std@0.89.0/path/mod.ts";

// const filename = path.join(Deno.cwd(), "input.txt");
const filename = path.join(Deno.cwd(), "example-input.txt");
const fileReader = await Deno.open(filename);

let results: number[] = [];
let lineCount = 0;
for await (const line of readLines(fileReader)) {
  if (!line) continue;
  lineCount += 1;
  if (results.length === 0) {
    // first result, populate the bit string with all 0s.
    results = new Array(line.length).fill(0);
  }
  let offset = 0;
  for (const digit of line) {
    results[offset] += parseInt(digit);
    offset += 1;
  }
}

const pivot = lineCount / 2;
console.log(`pivot: ${pivot}`);
// Build epsilon and gamma strings
let gammaBinaryStr = "";
let epsilonBinaryStr = "";
let oxygenBinaryStr = "";
let co2BinaryStr = "";
for (const entry of results) {
  if (entry > pivot) {
    gammaBinaryStr += "1";
    epsilonBinaryStr += "0";
    oxygenBinaryStr += "1";
    co2BinaryStr += "0";
  } else if (entry === pivot) {
    console.log("here");
    oxygenBinaryStr += "1";
    co2BinaryStr += "0";
  } else {
    epsilonBinaryStr += "1";
    gammaBinaryStr += "0";
    oxygenBinaryStr += "0";
    co2BinaryStr += "1";
  }
}
console.log(results);
const epsilon = parseInt(epsilonBinaryStr, 2);
const gamma = parseInt(gammaBinaryStr, 2);
const oxygen = parseInt(oxygenBinaryStr, 2);
const co2 = parseInt(co2BinaryStr, 2);
console.log(`epsilon: ${epsilonBinaryStr} (${epsilon})`);
console.log(`gamma: ${gammaBinaryStr} (${gamma})`);
console.log(`oxygen: ${oxygenBinaryStr} (${oxygen})`);
console.log(`co2: ${co2BinaryStr} (${co2})`);
console.log(`Power Consumption: ${gamma * epsilon}`);
console.log(`CO2 Scrubber Rating: ${oxygen * co2}`);
