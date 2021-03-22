const inventors = [
  { first: "Albert", last: "Einstein", year: 1897, passed: 1995 },
  { first: "Issac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  (inventor) => inventor?.year > 1500 && inventor?.year < 1600
);
console.log("1. Filter the list of inventors for those who were born in the 1500's");
console.table(fifteen);

// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(
  (inventor) => `${inventor?.first} ${inventor?.last}`
);
console.log("2. Give us an array of the inventory first and last names");
console.log(fullNames);

// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a?.year - b?.year);
console.log("3. Sort the inventors by birthdate, oldest to youngest");
console.table(ordered);

// 4. How many years did all the inventors live?
const totalYears = inventors.reduce(
  (result, inventor) => result + (inventor?.passed - inventor?.year),
  0
);
console.log("4. How many years did all the inventors live?");
console.table(totalYears);

// 5. Sort the inventors by years lived
const liveOrdered = inventors.sort(
  (a, b) => a?.passed - a?.year - (b?.passed - b?.year)
);
console.log("5. Sort the inventors by years lived");
console.table(liveOrdered);

// -------------------------------------
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// 6. Sort the people alphabet by last name
const splitName = (name) => name.split(", ");
const getLastName = (name) => splitName(name)[0];
const alpha = people.sort((a, b) => (getLastName(a) > getLastName(b) ? 1 : -1));
console.log("6. Sort the people alphabet by last name");
console.log(alpha);

// -------------------------------------
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
// 7. Sum up the instances of each of these
const transportation = data.reduce(
  (result, item) => ({
    ...result,
    [item]: (result[item] || 0) + 1
  }),
  {}
);
console.log("7. Sum up the instances of each of these");
console.table(transportation);
