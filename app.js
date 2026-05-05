
const n = Number(process.argv[2]);

if (Number.isInteger(n)) {
  console.log("My number: " + n);
} else {
  console.log("Not a number");
}

const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

for (const line of lines) console.log(line);
const x = Number(process.argv[2]);

if (!Number.isInteger(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;

  while (i < x) {
    console.log("C is fun");
    i++;
  }
}

const size = Number(process.argv[2]);

if (!Number.isInteger(size) || size <= 0) {
  console.log("Missing size");
} else {
  let i = 0;

  while (i < size) {
    let row = "";
    let j = 0;

    while (j < size) {
      row += "x";
      j++;
    }

    console.log(row);
    i++;
  }
}



