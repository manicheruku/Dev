let btn = document.querySelector("#btn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let loader = document.querySelector(".loader");
let copyButton = document.querySelector("#copyButton");
const speakButton = document.getElementById("speakButton");
quote.innerHTML = "Three can keep a secret, if two of them are dead.";
author.innerHTML = " ME";
function speakText() {
  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = "en-US";
  utterance.text = quote.innerHTML;
  speechSynthesis.speak(utterance);
}

btn.addEventListener("click", async function () {
  try {
    loader.style.display = "block";
    quote.innerHTML = "";
    let res = await fetch("https://api.quotable.io/quotes/random");
    let finalres = await res.json();
    let quotation = finalres[0].content;
    quote.innerHTML = quotation;
    let authorDet = finalres[0].author;
    loader.style.display = "none";
    author.innerHTML = authorDet;
  } catch (error) {
    loader.style.display = "none";
    console.log("Error fetching data:", error);
  }
});

speakButton.addEventListener("click", speakText);
copyButton.addEventListener("click", function () {
  const range = document.createRange();
  range.selectNode(quote);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Quote copied!");
});
