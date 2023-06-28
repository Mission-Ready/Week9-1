console.log(fetch("https://jsonplaceholder.typicode.com/users"));

fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  console.log(response)
);
fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  console.log(response.json())
);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20").then((response) =>
  console.log(response)
);
fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20").then((response) =>
  console.log(response.json())
);
fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

async function asyncFunction() {
  return 1;
}
console.log(asyncFunction());

async function asyncFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  console.log(result);
}
asyncFetch();

const asyncFetchPmon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  const data = await response.json();
  console.log(data);
  console.log(data.results);
};
asyncFetchPmon();

const asyncFish = async () => {
  try {
    const response = await Fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
asyncFish();

async function pokefetch() {
  try {
    const myFetch = await Fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    );
    const result = await response.json();
    console.log(myFetch);
  } catch (err) {
    console.log(err);
  }
}
