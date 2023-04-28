const apiKey = "d7CW/g45hyeJSNKu4jScXg==8tr3CMC4nOv47fiu";
const apiURL = "https://api.api-ninjas.com/v1/facts?limit=1";
const btnEl = document.getElementById("btn");
const txtEl = document.getElementById("fact");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getFact() {
  txtEl.innerText = "Generating fact...";
  btnEl.disabled = true;
  const response = await fetch(apiURL, options);
  const data = await response.json();
  btnEl.disabled = false;
  txtEl.innerText = data[0].fact;
}

getFact();

btnEl.addEventListener("click", getFact);

// fetch(apiURL, {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiKey,
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {
//     // console.log(response);
//     console.log(response[0].fact);
//     document.getElementById("fact").innerText = response[0].fact;
//   })
//   .catch((err) => {
//     console.log(err);
//   });
