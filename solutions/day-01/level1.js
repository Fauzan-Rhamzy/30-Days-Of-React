const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// 1
const emptyArr = []

// 2
const arr5 = [1,2,3,4,5,6]

// 3
console.log("Length:", arr5.length);

// 4
console.log("First item:", arr5[0]);

// 5
const mixedDataTypes = [1, "two", 3, "four", 5.1, "six", 7.2]
console.log("mixedDataTypes length:", mixedDataTypes.length);

// 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7
console.log("companies:", itCompanies);

// 8
console.log("number of companies:", itCompanies.length);

// 9
console.log("first company:", itCompanies[0]);
console.log("second company:", itCompanies[parseInt((itCompanies.length)/2)]);
console.log("last company:", itCompanies[itCompanies.length-1]);

// 10
itCompanies.forEach(element => {
    console.log(element);
});

// 11
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index] = itCompanies[index].toUpperCase()
    console.log(itCompanies[index]);
}

// 12
console.log(itCompanies.join(", "));

// 13
if (itCompanies.includes("FACEBOOK")) {
  console.log("Facebook");
} else {
  console.log("company is not found");
}

// 14
for (let index = 0; index < itCompanies.length; index++) {
  let counter = 0;
  const word = itCompanies[index];
  for (const letter in word) {
    if (word[letter] == "O") {
      counter++;
    }
    
  }
  if (counter>1) {
    itCompanies.splice(index, 1);
    index--;
  }
}
console.log(itCompanies.toString());

// 15
console.log(itCompanies.sort());

// 16
console.log(itCompanies.reverse());

// 17
console.log(itCompanies.slice(0, 3))

// 18
console.log(itCompanies.slice(itCompanies.length-1, 3))