"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

// generate rondom values
  for (let i = 0; i < sampleSize; i++) {
    const randOMNum = Math.floor(Math.random() * 6); 
    valueCounts[randOMNum]+=1; 
  }

  const results = [];

  // get the percent
  for (const counter of valueCounts) {
    const percent = ((counter / sampleSize) * 100);

  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const size of sampleSizes) {
    const results = runExperiment(size);
    console.log(results, size);
  }
}

main();