const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

const p = document.querySelector("p");

const makeGreen = () => {
  p.style.color = "#bada55";
  p.style.fontSize = "50px";
};

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "⛲");

// Styled
console.log(
  "%cI am some great text",
  "font-size: 20px; background: red; text-shadow: 2px 2px 0 blue; text-align: center; padding: 4px 8px"
);

// Warning
console.warn("OH NOOO");

// Error
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(p.classList.contains("a"), "Wrong!");

// Clear
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping
dogs.forEach(({ name, age }) => {
  console.group(`${name}`);
  console.log(`This is ${name}`);
  console.log(`${name} is ${age} years old`);
  console.log(`${name} is ${age * 7} dog years old`);
  console.groupEnd(`${name}`);
});

// Counting
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// Table
console.table(dogs);
