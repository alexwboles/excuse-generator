// excuse-generator.js
// Run with: node excuse-generator.js

// Arrays for building the excuse
const who = [
  "My dog",
  "My neighbor",
  "My little brother",
  "A random stranger",
  "My boss"
];

const action = [
  "ate",
  "deleted",
  "lost",
  "broke",
  "spilled",
  "misplaced",
  "ruined"
];

const what = [
  "my homework",
  "the project files",
  "the report",
  "my laptop",
  "the presentation",
  "the USB drive"
];

const when = [
  "today",
  "yesterday",
  "this morning",
  "last night",
  "earlier this afternoon",
  "right before I got here",
  "a few minutes ago"
];

// Random selection
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Build the excuse sentence
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

// Print the excuse
console.log(excuse);
