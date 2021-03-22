const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

fetch(url)
  .then((blob) => blob.json())
  .then((data) => (cities = [...data]));

const numberWithComma = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const findMaches = (wordToMatch) => {
  const regex = new RegExp(wordToMatch, "gi");

  return cities.filter(
    ({ city, state }) => city.match(regex) || state.match(regex)
  );
};

function displayMatches() {
  const regex = new RegExp(this.value, "gi");
  const matchArray = findMaches(this.value);

  let html = matchArray
    .map(({ city, state, population }) => {
      const cityName = city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithComma(population)}</span>
      </li>
    `;
    })

  let more = 0;

  if (html.length > 10) {
    more = html.length - 10
    html.length = 10
  }

  html = html.join("");

  if (more) {
    html = `${html}<li>And ${more} more..</li>`;
  }

  suggestions.innerHTML = html
}

const searchInput = document.querySelector("#search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches);
